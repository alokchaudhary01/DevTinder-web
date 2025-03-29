import { configureStore } from "@reduxjs/toolkit";
import useReducer  from "./userSlice";

const appstore = configureStore({
    reducer: {useReducer}
})

export default appstore