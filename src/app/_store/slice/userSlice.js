import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    fullName: '',
    email: '',
    password: '',
    isLoggedIn: false,
};

const authReducer = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login(state, action) {
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true;
        },
        register(state, action) {
            state.fullName = action.payload.fullName;
            state.email = action.payload.email;
            state.password = action.payload.password;
            state.isLoggedIn = true; 
        },
        logout(state) {
            state.fullName = '';
            state.email = '';
            state.password = '';
            state.isLoggedIn = false;
        },
    },
});

export const { login, register, logout } = authReducer.actions;
export default authReducer.reducer;
