import { configureStore } from "@reduxjs/toolkit";
import userReducer from './features/user';

export const store = configureStore({
    reducer: {
        user: userReducer,
    },
    devTools: true
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
