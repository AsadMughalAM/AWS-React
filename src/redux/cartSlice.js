import { createSlice } from "@reduxjs/toolkit";
const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    AddItem: (state, action) => {
      state.push(action.payload);
    },
   // In your cartSlice.js
// cartSlice.js
RemoveItem: (state, action) => {
  return state.filter(item => item.data.id !== action.payload); 
}
  },
});
export const { AddItem } = cartSlice.actions;
export const { RemoveItem } = cartSlice.actions;
export default cartSlice.reducer;
