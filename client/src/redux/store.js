import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

import reducers from "./reducer/reducers";

const persistConfig = {
    key: 'root',
    storage,
};


export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers)
});

export const persistor = persistStore(store);