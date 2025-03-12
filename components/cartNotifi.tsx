'use client'
import { useAppContext } from '@/hooks/useContextApi'

const CartNotifi = () => {
    const {cartItems}= useAppContext()
  return (
        <span className="badge badge-sm indicator-item">{cartItems.length}</span>
 
  )
}

export default CartNotifi
