import {configureStore} from "@reduxjs/toolkit";
import issueReducer from "../reducers/issueReducer";

export const store=configureStore({
    reducer: issueReducer,
    middleware: getDefaultMiddleware =>getDefaultMiddleware(),
    devTools: true
})