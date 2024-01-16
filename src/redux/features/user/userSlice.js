import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    name: 'sushil',
    email: 'sushil@gmail.com',
    userTasks: {}
}

const userSlice = createSlice({
    name:'userSlice',
    initialState,
    reducers: {

    }
});

export default userSlice.reducer;