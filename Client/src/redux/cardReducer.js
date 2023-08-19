import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    product: [],
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addtoCart: (state, action) => {
                const product = state.product.find(item => item.id === action.payload.id)
            !product && state.product.push(action.payload)
        },
        removefromCart: (state, action) => {
            state.product = state.product.filter(item =>item.id !== action.payload.id)
        },
        resetCart: (state) => {
            state.product = []
        },
    },
})

export const { addtoCart, removefromCart, resetCart} = cartSlice.actions

export default cartSlice.reducer