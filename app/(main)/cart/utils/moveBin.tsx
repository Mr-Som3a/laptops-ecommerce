'use clinet'
import { CartItem } from "@/hooks/declare";
import { useAppContext } from "@/hooks/useContextApi";
import React from "react";

interface props{
    itemToBin:CartItem
}
const MoveBin = ({itemToBin}:props) => {
    const {cartItems,setCartItems}=useAppContext()
    const moveBin=()=>{
        console.log(itemToBin)
        const updated = cartItems.filter(ele=>ele.id !== itemToBin.id)
        setCartItems([...updated])
    }
  return (
    <div>
      <button onClick={moveBin} className="">
        <img src="/images/trash.svg" alt="" />
      </button>
    </div>
  );
};

export default MoveBin;
