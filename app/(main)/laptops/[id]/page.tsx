'use client'
import AddToCart from "@/components/addToCart";
import React, { useState } from "react";
import { laptops } from "../laptopDieres";
import { useParams } from "next/navigation";
import { notFound } from 'next/navigation';


export const LaptopDetails = () => {
  const {id} =useParams()
  const laptop = laptops.find((item) => item.id === Number(id));
  const [index, setIndex]=useState(0)

  const handleClick = (item:string)=>{
    const images = [...laptop!.img]
    const newIndex = images.indexOf(item)
    setIndex(newIndex)
  }
  if(laptop){
    return (
      <div className="container flex  space-x-10 my-20 mx-auto lg:m-20">
        <section>
          <div className="">
            <div className="rounded-xl w-96 h-96 ">
              <img  src={laptop.img[index]}/>
            </div>
          </div>
          <div className="flex space-x-4 ">
            {laptop.img.map((item) => (
              <div role="button" key={item} className="avatar">
                <button onClick={()=>handleClick(item)} className=" transition duration-300 ease-in-out hover:shadow-teal-800 hover:shadow-md rounded-xl w-20">
                  <img src={item} />
                </button>
              </div>
            ))}
          </div>
        </section>
        <section>
          <h1 className="text-4xl mb-4 font-bold">Product Name</h1>
          <div className="text-xl "> Price : {laptop.price}$</div>
          <h2 className="text-2xl my-2">Description</h2>
          <p className="text-lg">{laptop.description}</p>
          <div className="flex space-x-4 flex-wrap   mt-8">
            <AddToCart
              item={{ id: laptop.id, item: laptop, quantity: 1 }}
              style="btn-outline max-w-56"
            >
              Add To Cart
            </AddToCart>
            <AddToCart
              item={{ id: laptop.id, item: laptop, quantity: 1 }}
              style="btn-info max-w-56"
            >
              Buy Now
            </AddToCart>
          </div>
          <div className="my-4 text-sm link text-slate-500 underline underline-offset-1">
            delivery Terms & Condition
          </div>
          <div className="my-2 font-semibold ">Secure your payment</div>
          <div className="flex my-3 space-x-4">
            <img src="/images/mastercard.svg" alt="masterCard" />
            <img src="/images/visa.svg" alt="localBank" />
            <img src="/images/paypal.svg" alt="visa" />
          </div>
          <div className="card-bordered border-2 p-4 rounded-lg">
            <div className="font-bold">
              <img
                className="inline-block"
                src="/images/return.svg"
                alt="return-cashback-money"
              />
              Return
            </div>
            <div>
              You have 60 days to return the item(s) using any of the following
              methods:
            </div>
            <div>
              <img className="inline-block" src="/images/dot.svg" alt="" />
              Free store return
            </div>
            <div>
              <img className="inline-block" src="/images/dot.svg" alt="" />
              Free returns via USPS Dropoff Service
            </div>
          </div>
        </section>
      </div>
    );
  }else{
    notFound
  }
  
};



export default LaptopDetails;
