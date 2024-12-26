'use client'

import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slice/authSlice';
import offersReducer from './slice/authSlice'

const store = configureStore({
    reducer: {
        auth: authReducer,
        offers: offersReducer,
    },
});

export default store;
