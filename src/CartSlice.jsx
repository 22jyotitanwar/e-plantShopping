import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Holds all cart items
  },
  reducers: {
    // ✅ Add item to cart
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    // ✅ Remove item from cart
    removeItem: (state, action) => {
      const name = action.payload;
      state.items = state.items.filter(item => item.name !== name);
    },

    // ✅ Update quantity of an item in the cart
    updateQuantity: (state, action) => {
      const { name, amount } = action.payload;
      const item = state.items.find(i => i.name === name);
      if (item) {
        item.quantity = amount;
      }
    },
  },
});

// ✅ Export the actions for use in your components
export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

// ✅ Export the reducer for use in your store
export default CartSlice.reducer;
``

