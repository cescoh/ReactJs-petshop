import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../contexts/cartContext"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

function CartButtons({ setAtCheckout, totalPrice }) {
    const { cartList, removeCart } = useCartContext()

  return cartList.length === 0 ? (
    <div>
      <h1>El carrito se encuentra vacío</h1>
      <Link to={"/"}>
        <Button>Ir a la Tienda</Button>
      </Link>
    </div>
  ) : (
    <>
      <div>
        <h2>
          <strong>Precio Total: ${totalPrice}</strong>
        </h2>
      </div>
      <div>
      <ButtonGroup>
        <Button
          onClick={() => {
            removeCart();
          }}
        >
          <strong>Vaciar Carrito</strong>
        </Button>
        <Button
          onClick={(e) => {
            setAtCheckout(true);
          }}
        >
          <strong>Comprar Items</strong>
        </Button>
      </ButtonGroup>
      </div>
    </>
  );
}

export default CartButtons;