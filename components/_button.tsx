
import React from "react";

interface props{
    onClick:()=>void,
    className:string,
    children:React.ReactNode
}

export default function Button({onClick,className,children}:props){
 
    
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
};
