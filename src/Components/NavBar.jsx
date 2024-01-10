import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'
import './NavBar.css'
const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='links'>
        <Link to='/' className='shop'>Shop</Link>
        <Link to='/cart'>
          <ShoppingCart size={32} className='cart'/>
        </Link>
      </div>
    </div>
  )
}

export default NavBar