import React from 'react';
import { Link } from "react-router-dom"
import Button from '@mui/material/Button';
import { ButtonGroup } from "@mui/material";

const ButtonIn = () => {
  return (
    <>
    <ButtonGroup>
    <Link to="/cart">
        <Button
        className='btn btn-outline-primary'
        >Ir al carrito o Terminar compra</Button>
    </Link>
    <Link to="/">
        <Button
        className='btn btn-outline-primary'
        >Seguir comprando</Button>
    </Link>
    </ButtonGroup>
    </>
  )
}

export default ButtonIn