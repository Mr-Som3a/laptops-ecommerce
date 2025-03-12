'use client'
import React, {useCallback, useRef, useState } from "react";
import Link from "next/link";
import { CartItem } from "@/hooks/declare";
import PlusMinus from "./plusMinus";
import MoveBin from "./moveBin";
import { useAppContext } from "@/hooks/useContextApi";

interface props {
  element: CartItem;
}
function CartItems({ element }: props) {
  const [count, setCount] = useState(element.quantity);
  const {setCartItems}=useAppContext()
  const handlePlus=()=>{
    setCount(count+1)
    element.quantity++
    setCartItems((previous)=>previous.map(item=>item.id===element.id?{...item,quantity:element.quantity}:item))
    
  }
  const handleMinus=()=>{
    setCount(count-1)
    element.quantity--
    setCartItems((previous)=>previous.map(item=>item.id===element.id?{...item,quantity:element.quantity}:item))

  }
  return (
    <>
      <div className="card lg:card-side border-1 bg-base-100 my-2">
        <figure className="p-1">
          <img
            className="lg:w-42 lg:h-42 lg:object-contain"
            src={
              element?.item.img ||
              "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
            }
            alt="Album"
          />
        </figure>
        <div className="card-body w-[60%]">
          <Link
            href="/laptops"
            className="hover:link-hover hover:text-cyan-700"
          >
            <h2 className="card-title">{element?.item.title}</h2>
            <span>{element?.item.model}</span>
          </Link>
          <p className="overflow-hidden text-ellipsis">{element?.item.description}</p>
          <div className="text-2xl font-semibold text-green-900">Price: {element?.item.price*element.quantity}$</div>
          <div className="card-actions justify-end space-x-3 items-center">
            <PlusMinus count={count} handleMinus={handleMinus} handlePlus={handlePlus} />
            <MoveBin itemToBin={element} />
            
          </div>
        </div>
      </div>
    </>
  );
}
export default CartItems;
