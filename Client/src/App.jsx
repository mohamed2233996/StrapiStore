import { useState,useEffect } from 'react'
import './App.css'
import Products from './components/Products'
import Categories from './components/categories'
import Cart from './components/Cart'
import StoreContext from './Hooks/StoreContext'
function App() {

  const [valueSend , setValueSend] = useState("/products?populate=*")
  const [selectedCategore, setselectedCategore] = useState([])

  return (
    <>
      <Cart />
      <StoreContext.Provider value={{
        valueSend, setValueSend,
        selectedCategore, setselectedCategore
        }}>
        <Categories />
        <Products /> 
      </StoreContext.Provider>
    </>
  )
}

export default App
