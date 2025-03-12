'use client'
// import { lazy } from "react";
import { useAppContext } from "@/hooks/useContextApi";
import CartItems from "./utils/cartItems";
import OrderSummary from "./utils/orderSummary";
// const CartItems = lazy(()=> import("./utils/cartItems"))


export default function Cart() {
  
  const {cartItems}=useAppContext()
  return (
    <section className="w-[80%]">
      <div className="flex justify-between"><h1 className="text-2xl font-bold my-4">Shopping Cart</h1>
      <div className="text-xl text-green-700">{cartItems.length} Items</div>
      </div>
      <div className="grid grid-cols-8 gap-x-4">
        <div className="groupOfCards col-span-5 ">
          {cartItems.length<=0?<div>
            NO ITEM IN YOUR CART
          </div>:
          cartItems.map(element=>(
            <div key={element.id}>
              <CartItems element={element} />
            </div>

          ))}
          
        </div>
        <div className="card col-span-3 bg-base-100 w-96 shadow-xl max-h-[25rem]">
          <OrderSummary cartItems={cartItems}/>
        </div>
      </div>
    </section>
  );
}
