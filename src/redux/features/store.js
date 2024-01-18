import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./user/userSlice";
import taskSlice from "./task/taskSlice";

const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        userSlice: userSlice,
    }
});
export default store;