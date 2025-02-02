'use client'
import { AppProvider, useAppContext } from "@/hooks/useContextApi";
import React from 'react';
import Button from './_button';

interface props{
    label:string,
    category:string|null,
    src:string,
    alt:string
}
function CategorySelection({label,src,alt,category}:props) {
    const {setCategory}=useAppContext()
    const handleClick=(categoryName:string|null)=>{
        setCategory(categoryName)
    }
    return (
        <Button onClick={()=>handleClick(category)} className="transition ease-in-out duration-300  hover:scale-105" >
                  
                  <img src={src} alt={alt} />
                  {label}
                </Button>
    );
}

export default CategorySelection;