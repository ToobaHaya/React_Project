import React, { useContext, useState } from 'react';
import { BsFillCartFill } from 'react-icons/bs'
import Offcanvas from 'react-bootstrap/Offcanvas';
import CartItems from './CartItems';
import { CartContext } from '../context/context';

function Cart() {
  const { state, dispatch } = useContext(CartContext)

  return (
    <>
    
   </>
    );
}
  
export default Cart;
