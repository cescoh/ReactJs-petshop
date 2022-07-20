import React from 'react';
import { useCartContext } from "../../contexts/cartContext"
import { Button } from "react-bootstrap"
import { Link } from "react-router-dom"
import Cart from '../../components/Cart/Cart';


const CartContainer = () => {
  const { cartList } = useCartContext()
  return (
    <>
      {
        cartList.length === 0 ?
        <div className=" d-flex justify-content-center flex-column align-items-center mt-5">
          <h1 className='text-center'>Carrito de Compras</h1>
          <p className="text-center">Oops El carrito esta Vacío</p>
          <Link to="/">
            <Button variant="danger">Ir al Inicio</Button>
          </Link>
        </div> :
           <div className="mt-5">
           <h1 className='text-center'>Carrito de Compras</h1>
           <Cart/>
          </div>
      }
    </>
  )
}

export default CartContainer