'use client'
import { useRouter } from "next/navigation";
import React from "react";
import ButtonS from "./_button";

interface props{
    src:string,
    alt:string,
    title:string,
    description:string,
    price:number
}
export default function Card({src,alt,title,description,price}:props) {
  const router = useRouter()
  const handleClick=()=>{
    console.log('go to card')
    router.push('/cart')
  }
  return (
    <div className="card bg-base-100 w-80 md:w-64 shadow-xl">
      <figure>
        <img
          src={src}
          alt={alt}
         
        />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <span>{price}</span>
        <div className="card-actions justify-center">
          <button onClick={handleClick} className="btn btn-primary">Add To Cart</button>
          {/* <ButtonS action={()=>handleClick} title="Add To Card" style="btn btn-primary"/> */}
        </div>
      </div>
    </div>
  );
}
