import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./slice/userSlice";
import candidatesSlice from "./slice/candidatesSlice";

const store = configureStore({
    reducer: {
        user: userSlice.reducer,
        candidates: candidatesSlice.reducer
    }
})

export default store