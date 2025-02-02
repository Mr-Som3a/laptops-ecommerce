import React from "react";

function OrderSummary() {
  return (
    <div>
      <div className="card-body">
        <h2 className="card-title">Order summary</h2>
        <div className="flex flex-col space-y-2 ">
          <div className="flex justify-between">
            <h3>Original Price</h3>
            <span>323$</span>
          </div>
          <div className="flex justify-between">
            <h3>Savings</h3>
            <span>44$</span>
          </div>
          <div className="flex justify-between">
            <h3>Store Pickup</h3>
            <span>23$</span>
          </div>
          <div className="flex justify-between">
            <h3>Tax</h3>
            <span>3$</span>
          </div>
          <div className="divider"></div>
          <div className="flex justify-between">
            <h3>Total</h3>
            <span>423$</span>
          </div>
        </div>
        <div className=" flex flex-col mt-2 card-actions items-center">
          <button className="btn btn-primary btn-wide">
            Proceed to Checkout
          </button>
          <div className="divider my-1">OR</div>
          <a className="text-blue-700" href="/">
            continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
}

export default OrderSummary;
