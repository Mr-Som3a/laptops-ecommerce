"use client";
import React from "react";


interface Props{
  count:number,
  handlePlus:()=>void,
  handleMinus:()=>void
}
const PlusMinus = ({count,handleMinus,handlePlus}:Props) => {
    
  return (
    <div className="flex justify-center items-center">
      <button disabled={count===1?true:false} onClick={handleMinus} name="plus" className="btn min-h-8 h-8 px-2 ">
        <h1 className="text-xl  ">
          <span className="w-[18px] h-[18px]">ـــ</span>
        </h1>
      </button>
      <div className="mx-4">{count}</div>
      <button onClick={handlePlus} name='minus' className="btn min-h-8 h-8 px-2 ">
        <img src="/images/plus.svg" alt="" />
      </button>
    </div>
  );
};

export default PlusMinus;
