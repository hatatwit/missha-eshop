import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  products: []
}

export const cartReducer = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increment: (state, action) => {
      const item = state.products.find((item) => item.id === action.payload.id);

      if (item) {
        item.quantity += action.payload.quantity
      } else {
        state.products.push(action.payload)
      }
    },
    decrement: (state, action) => {
      state.products = state.products.filter(item => item.id !== action.payload) 
    }
  }
})

// Action creators are generated for each case reducer function
export const { increment, decrement } = cartReducer.actions

export default cartReducer.reducer