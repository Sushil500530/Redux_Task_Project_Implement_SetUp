import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "../../components/tasks/taskSlice";
import userSlice from "./user/userSlice";

const store = configureStore({
    reducer: {
        taskSlice: taskSlice,
        userSlice: userSlice,
    }
});
export default store;