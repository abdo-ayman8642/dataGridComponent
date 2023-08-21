import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./rowDataSlice";

const store = configureStore({ reducer: todoSlice });
export default store;
