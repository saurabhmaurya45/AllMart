import { configureStore } from '@reduxjs/toolkit'
import userCart from './cartSlice'

const store = configureStore({
    reducer: {
        // Add reducers here
        cart: userCart,

    }
})

export default store;