import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "../todo/todoSlice";
import userSlice from "../user/userSlice";
// import { userSlice } from "../user/userSlice";

export const store = configureStore({
  reducer: {
    todos: todoSlice,
    aidai: userSlice,
    users: userSlice,
  },
});
