import React from 'react';
import { createContext, useContext, useState } from "react";

const CartContext = createContext([])
export const useCartContext = () => useContext(CartContext)

export const CartContextProvider = ({ children }) => {
    const [cartList, setCartList] = useState([])
    const [orderBuyer, setorderBuyer] = useState([])

    const addForm = (objBuyer) =>{
        setorderBuyer([...orderBuyer,objBuyer])
        console.log(orderBuyer)
    }

    const AddToCart = (objProduct) => {
        let listedCart = [...cartList];
        if (listedCart.some((item) => item.data.id === objProduct.data.id))
        {
            listedCart.find((item) => item.data.id === objProduct.data.id).quantity += objProduct.quantity;
            setCartList(listedCart)
        } else {
            setCartList([...cartList, objProduct]);
        }
    }

    const removeCart = () => setCartList([]);

const totalPrice = () => {
    let total = 0;

    cartList.forEach((newItem) => {
        total +=
        parseInt(newItem.data.price) * parseInt(newItem.quantity)
        });
        return parseInt(total);
    };

const deleteProd = (id) => {
    setCartList(cartList.filter((newItem) => newItem.data.id !== id))
}

const iconCart = () => cartList.reduce((acum, valor) => acum + valor.quantity, 0);

    return(
        <CartContext.Provider 
        value={{
            cartList,
            orderBuyer,
            addForm,
            setCartList,
            AddToCart,
            deleteProd,
            totalPrice,
            removeCart,
            iconCart
            }}>
        {children}
        </CartContext.Provider>
    )
}