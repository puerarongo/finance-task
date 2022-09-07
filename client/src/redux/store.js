import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage';
import reducers from "./reducer/reducers";

const middleware = getDefaultMiddleware({
    serializableCheck: false,
});

const persistConfig = {
    key: 'root',
    storage,
};

export const store = configureStore({
    reducer: persistReducer(persistConfig, reducers),
    middleware
});

export const persistor = persistStore(store);