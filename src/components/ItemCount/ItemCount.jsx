import React from 'react';
import { useState } from "react"
import { useCartContext } from "../../contexts/cartContext";
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

const ItemCount = ( { stock, initial, data, setState} ) => {

    const [count, setCount] = useState(initial);
    const { AddToCart } = useCartContext()

    function add(){
            if (count < stock){
                setCount( count + 1 );
            }
        }
    function subtract(){
        if (count > initial)
        setCount(count - 1 );
    }
    function reset(){
        setCount(initial)
    }
    function onAdd(){
      AddToCart({
          ...data,
          quantity: count
    })
    setState("otro")
  }

  return (
    <div>
    <p><strong>Cantidad: {count}</strong></p>
    <ButtonGroup>
    <Button  onClick={subtract}><strong>-</strong></Button>
    <Button  onClick={add}><strong>+</strong></Button>
    <Button  onClick={reset}><strong>Reiniciar</strong></Button>
    <Button  onClick={onAdd}><strong>Agregar al carrito</strong></Button>
    </ButtonGroup>
    </div>
  )
}

export default ItemCount