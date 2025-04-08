import { createSlice } from "@reduxjs/toolkit";

const feedSlice = createSlice({
  name: "feed",
  initialState: null,
  reducers: {
    addFeed: (state, action) => {
      return action.payload;
    },
    removeOneFeed: (state , action) => {
      return state.filter(request => request._id !== action.payload);
    },
    removeFeed:(state , action) =>{
      return null
    }
  },
});

export const { addFeed, removeFeed ,removeOneFeed } = feedSlice.actions;
export default feedSlice.reducer;


