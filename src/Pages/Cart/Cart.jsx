import React,{ useContext } from 'react'
import {PRODUCTS} from "../../Products" 
import { ShopContext } from '../../Context/ShopContext';
import CartItem from './CartItem';
import './Cart.css'
import { useNavigate } from 'react-router-dom';
const Cart = () => {
  const { cartItems, getTotalAmount} = useContext(ShopContext)
  const totaAmount = getTotalAmount()
  const navigate = useNavigate()
  return (
    <div className='Cart'>
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className='cartItems'>
        {PRODUCTS.map(
          (product)=>{
            if(cartItems[product.id] !==0){
              return<CartItem data={product} />
            }
          }
        )}
      </div>
      <h3>Subtotal: ${totaAmount}</h3>
      <button className='complete' onClick={()=>navigate("/")}>Complete Shopping</button>
    </div>
  )
}

export default Cart