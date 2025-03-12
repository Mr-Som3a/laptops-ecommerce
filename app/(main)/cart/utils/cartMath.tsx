import { CartItem } from "@/hooks/declare";

export function totalPrice(items:CartItem[]){
    return items.reduce((total,item)=>total + item.item.price * item.quantity, 0)
}
