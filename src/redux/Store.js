import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./reducer/userReducer";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['user'],
    blacklist: []
};

const rootReducer = combineReducers({
    user: userReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
        reducer: persistedReducer,    
        devTools: process.env.NODE_ENV !== 'production',
});

export const persistor = persistStore(store);

export default store;