import { combineReducers } from "@reduxjs/toolkit";
import issueReducer from "../reducers/issueReducer";
export const rootReducer=combineReducers({
    issue:issueReducer
})