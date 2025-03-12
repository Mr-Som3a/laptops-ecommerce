import Link from "next/link";
import Checkout from "../../checkout/page";
import React, { useEffect } from "react";
import { useAppContext } from "@/hooks/useContextApi";
import { totalPrice } from "./cartMath";
import { CartItem } from "@/hooks/declare";
import { Span } from "next/dist/trace";

interface Props{
  cartItems:CartItem[]
}
function OrderSummary({cartItems}:Props) {
  const Offer=15
  let OrgPrice=totalPrice(cartItems)
  let Total=OrgPrice-OrgPrice*(15/100)
  console.log(cartItems)
  return (
    <div>
      <div className="card-body">
        <h2 className="card-title">Order summary</h2>
        <div className="flex flex-col space-y-2 ">
          <div className="flex justify-between">
            <h3>Original Price</h3>
            <span>{OrgPrice}$</span>
          </div>
          <div className="flex justify-between">
            <h3>Offer Amount</h3>
            {cartItems.length<=0?<span className="text-red-600 font-bold">--</span>:<span className="text-red-600">{Offer}%</span>}
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <span>{Total}$</span>
          </div>
        </div>
        {/* <Checkout /> */}
        <div className=" flex flex-col mt-2 card-actions items-center">
          <button className="btn btn-primary btn-wide">
            Proceed to Checkout
          </button>
          <div className="divider my-1">OR</div>
          <Link href='/laptops' className="text-blue-700">
            continue Shopping
          </Link>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
