import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { filterReducer } from './filterSlice';
import { contactReducer } from './contactSlice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import { authReducer } from './authSlice';

// const rootReducer = combineReducers({
//   contacts: contactReducer,
//   filter: filterReducer,
// });

const persistConfig = {
  key: 'token',
  storage,
  whitelist: ['token'],
};

// const persistedContactReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    contacts: contactReducer,
    filter: filterReducer,
    auth: persistReducer(persistConfig, authReducer),
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
