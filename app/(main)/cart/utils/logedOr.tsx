"use client";
import Button from "@/components/_button";
import CartNotifi from "@/components/cartNotifi";
import { useAppContext } from "@/hooks/useContextApi";
import Link from "next/link";
import React from "react";

const LogedOr = () => {
    const {cartItems}=useAppContext();
    return (
      <>
        <div className="dropdown dropdown-end">
          <button tabIndex={0} className="btn btn-ghost btn-circle mx-2">
            <div className="indicator">
              <img src="/images/cart.svg" className="w-5 h-5" alt="cart" />
              
              {/* notifi component */}
              <CartNotifi />
            </div>
          </button>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">{cartItems.length} Items</span>
              {/* <span className="text-info">Subtotal: ${}</span> */}
              <div className="card-actions">
                <Link href="/cart" className="btn btn-primary btn-block">
                  View cart
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="dropdown dropdown-end">
          <button
            tabIndex={0}
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img
                alt=""
                src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
              />
            </div>
          </button>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
    <div className="flex space-x-8">
      <Link className="btn btn-ghost" href='/auth/login'>
        Log-in
      
      </Link>
      <Button onClick={() => {}} className="btn btn-outline">
        Sign-Up
      </Button>
    </div>
    </>
  );
};

export default LogedOr
