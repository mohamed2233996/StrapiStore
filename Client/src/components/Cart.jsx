import React, { useState } from 'react';
import './Cart.css'
import { FaCartShopping, FaTrashCan, FaArrowRotateRight } from "react-icons/fa6";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { removefromCart, resetCart } from '../redux/cardReducer';


const Cart = () => {
    const [cartList, setCartList] = useState(true);
    const showCartlist = () => {cartList ? setCartList(false) : setCartList(true)}

    const product = useSelector(state => state.cart.product)
    const dispatch = useDispatch()
    console.log(product.length)

    return (
        <div className='cart'>
            <div className='cart-icon'
                onClick={product.length > 0 ? showCartlist : undefined}><FaCartShopping />
            </div>
            <div className='cart-badge'>{product.length}</div>
            {cartList || product.length > 0
                ? (
                    <ul className="cart-list">
                        {product.map(product => (
                            <li className="cart-item" key={product.id}>
                                <img src={import.meta.env.VITE_APP_URL + product.image} alt="" className="cart-item-img" />
                                <span className="cart-item-title">{product.title}</span>
                                <span className="cart-item-price">{product.price}</span>
                                <span className='trash-icon'
                                    onClick={() => dispatch(removefromCart({
                                        id: product.id,
                                    }))}
                                ><FaTrashCan /></span>
                            </li>
                        ))}
                        <span className='cart-rest'
                            onClick={() => dispatch(resetCart())}
                        ><FaArrowRotateRight /></span>
                    </ul>
                )
                : ("")
            }
        </div>
    );
}

export default Cart;
