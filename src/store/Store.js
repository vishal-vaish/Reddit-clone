import { configureStore } from "@reduxjs/toolkit";
import postReducer from "./PostSlice";
import userReducer from "./userSlice";

const store = configureStore({
  reducer: {
    post: postReducer,
    user: userReducer,

  },
});
export default store;

