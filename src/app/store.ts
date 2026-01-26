/*import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";


const rootReducer = combineReducers({
  auth: authReducer,
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["auth"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(logger),
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
*/




import { configureStore, combineReducers } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";

/**
 * Root reducer combines all slice reducers
 */
const rootReducer = combineReducers({
  auth: authReducer,
});

/**
 * Redux-persist configuration
 * - key: Root key for persistence
 * - storage: Uses localStorage
 * - whitelist: Only persist auth state
 * - version: Schema version for migrations (optional)
 */
const persistConfig = {
  key: "root",
  storage,
  version: 1,
  whitelist: ["auth"],
};

/**
 * Create persisted reducer
 */
const persistedReducer = persistReducer(persistConfig, rootReducer);

/**
 * Configure Redux store with redux-persist middleware configuration
 */
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist actions for serialization check
        ignoredActions: [
          FLUSH,
          REHYDRATE,
          PAUSE,
          PERSIST,
          PURGE,
          REGISTER,
        ],
      },
    }),
});

/**
 * Create persistor for use in PersistGate
 */
export const persistor = persistStore(store);

/**
 * Type exports for use throughout the app
 */
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
