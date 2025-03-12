"use client";
import { useRouter } from "next/navigation";
import React from "react";
import ButtonS from "./_button";

interface props {
  src: string;
  title: string;
  description: string;
  price: number;
}
export default function Card({ src, title, description, price }: props) {
  const router = useRouter();
  const handleClick = () => {
    console.log("go to card");
    router.push("/cart");
  };
  return (
    <div className="card bg-base-100 w-80 h-96  md:w-64 md:min-h-80 shadow-xl">
      <figure>
        <img src={src} />
      </figure>
      <div className="card-body p-4">
        <h2 className="card-title">{title}</h2>
        <p className="flex flex-wrap h-20 overflow-y-hidden">{description}</p>
        <span>{price}</span>
      </div>
    </div>
  );
}
