import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequests: (state, action) => {
      return action.payload;
    },
    removeRequests: (state , action) => {
        
        return state.filter(request => request._id !== action.payload);
    },
  },
});

export const { addRequests, removeRequests , removeOneFeed } = requestSlice.actions;
export default requestSlice.reducer;