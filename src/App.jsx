import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './Components/NavBar'
import Shop from './Pages/Shop/Shop'
import Cart from './Pages/Cart/Cart'
import ShopContextProvider from './Context/ShopContext'
const App = () => {
  return (
    <div className='App'>
      <ShopContextProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/cart' element={<Cart/>} />
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  )
}

export default App