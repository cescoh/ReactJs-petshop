import React, { useEffect, useState } from 'react';
import { Container, Table } from "react-bootstrap"
import { useCartContext } from "../../contexts/cartContext"
import CartTable from "../CartTable/CartTable"
import { addDoc, collection, getFirestore } from 'firebase/firestore';
import CartButtons from '../CartButtons/CartButtons';
import CartForm from '../CartForm/CartForm';


export default function Cart() {
    const { cartList, removeCart } = useCartContext()
    const [purchaseId, setPurchaseId] = useState(false);
    const [atCheckout, setAtCheckout] = useState(false);

    let totalPrice = 0;
    cartList.forEach((item) => {
    totalPrice = totalPrice + item.quantity * item.data.price;
  });

    function generateOrder(e) {
      e.preventDefault()
      let order = {}

      order.buyer = {name: e.target.name.value, email: e.target.email.value,tel: e.target.tel.value}
      order.total = totalPrice

      order.items = cartList.map(cartItem => {
        const id = cartItem.data.id
        const title = cartItem.data.title
        const price = cartItem.data.price * cartItem.quantity

        return {id, title, price}
      })
      const db = getFirestore()
      const orderCollection = collection(db, 'orders')
      addDoc(orderCollection, order)
      .then(resp =>{ 
        setPurchaseId(resp.id);

      })
    }

    useEffect(() => {
      return () => {
        if(purchaseId){removeCart(); }
      }
    },)

    if (purchaseId) {
      return (
        <div className="py-5">
          <h1>Compra exitosa!</h1>
          <h3>
            Tu orden de compra es: <strong>{purchaseId}</strong>
          </h3>
        </div>
      );
    }

    if (atCheckout) {
      return (
        <div className="py-5">
          <CartForm generateOrder={generateOrder} />
        </div>
      );
    }

  return (
    <div>
    <Container>
    <Table className="mt-5" striped bordered hover variant="light">
    <thead>
      <tr>
        <th></th>
        <th>Nombre</th>
        <th>Cantidad</th>
        <th>Precios</th>
        <th>Borrar</th>
      </tr>
    </thead>
    <tbody>
    {
        cartList.map((item) => ( <CartTable item={item} key={item.data.id} />) )
    }
    </tbody>
    </Table>
    </Container>
    <CartButtons setAtCheckout={setAtCheckout} totalPrice={totalPrice} />
    </div>
  )
}

