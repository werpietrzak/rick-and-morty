import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

export const watchlistSlice = createSlice({
  name: 'watchlist',
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.push(action.payload);
    },
    deleteItem: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    checkItem: (state, action) => {
      const editedItem = state.find((item) => item.id === action.payload.id);
      editedItem.isCompleted = editedItem.isCompleted ? false : true;
    },
  },
});

export const { addItem, deleteItem, checkItem } = watchlistSlice.actions;

export default watchlistSlice.reducer;
