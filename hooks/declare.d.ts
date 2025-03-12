import { laptop } from "@/app/laptops/laptopDieres"
import React from "react"

export interface User{
    username:string
    email:string
}
export interface Laptop{
    id: number,
    title:string,
    model: string,
    category: string,
    description:string,
    price: number,
    offer:number,
    img: string,
}
export interface CartItem{
    id:number,
    item:Laptop,
    quantity:number
}
export interface AppContextType {
    theme: string;
    setTheme: (theme: string) => void;
    user: User | null; // Replace 'User' with your user type
    setUser: React.Dispatch<React.SetStateAction<User|null>>    
    isLoading: boolean;
    setIsLoading: (loading:boolean)=>void
    // Add other state properties here
    category:string|null
    setCategory: (category:string|null)=> void
    laptops:Laptop[]
    setLaptops:React.Dispatch<React.SetStateAction<Laptop[]>>
    laptop:Laptop|null
    setLaptop:React.Dispatch<React.SetStateAction<Laptop |null>>
    cartItems:CartItem[]
    setCartItems:React.Dispatch<React.SetStateAction<CartItem[]>>
    

}