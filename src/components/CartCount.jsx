import React from 'react'
import { useCart } from 'react-use-cart'
const CartCount = () => {
    const {totalItems} = useCart();
  return (
    <sup>{totalItems}</sup>
  )
}

export default CartCount