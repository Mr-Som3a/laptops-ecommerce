'use client'
import React from 'react';
import Button from './_button';
import { useAppContext } from '@/hooks/useContextApi';
import {  CartItem } from '@/hooks/declare';

interface props{
    children:React.ReactNode
    style:string
    item:CartItem
}

function AddToCart({children,style,item}:props) {
    const {setCartItems,cartItems}= useAppContext()
    const handleClick=()=>{
        const exist = cartItems.find(e=>e.id===item.id)
        console.log(exist)
        if(exist){
            console.log('added same to cart')
            return setCartItems(prev=>prev.map(ele=>ele.id===item.id?{...ele,quantity:ele.quantity+item.quantity}:ele))
        }
        console.log('added to cart')
        return setCartItems([item,...cartItems])
    }
    return (
        <Button className={`btn btn-block ${style} mt-2`} onClick={()=>handleClick()}>
            {children}
        </Button>
    );
}
export default AddToCart;