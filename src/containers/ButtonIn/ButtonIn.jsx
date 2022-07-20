import React from 'react';
import { Link } from "react-router-dom"

const ButtonIn = () => {
  return (
    <>
    <Link to="/cart">
        <button
        className='btn btn-outline-primary'
        >Ir al carrito o Terminar compra</button>
    </Link>
    <Link to="/">
        <button
        className='btn btn-outline-primary'
        >Seguir comprando</button>
    </Link>
    </>
  )
}

export default ButtonIn