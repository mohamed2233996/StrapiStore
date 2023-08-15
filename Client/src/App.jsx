import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Products from './components/Products'
import Categories from './components/categories'
function App() {

  return (
    <>
      <Categories />
      <Products />
    </>
  )
}

export default App
