import { combineReducers } from "@reduxjs/toolkit";
import stockReducer from "./stock-reducer";
import trackedStockReducer from "./trackedStock-reducer";

export default combineReducers({
    stockReducer: stockReducer,
    trackedReducer: trackedStockReducer
});