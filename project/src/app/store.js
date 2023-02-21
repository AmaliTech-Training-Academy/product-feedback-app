import { configureStore } from '@reduxjs/toolkit';
import feedbackReducer from '../features/feedback/feedbackSlice';
import mobileNavReducer from '../features/mobileNav/mobileNavSlice';
import storage from 'redux-persist/lib/storage'
import { persistReducer } from  'redux-persist'
import { combineReducers } from '@reduxjs/toolkit'

const persistConfig = {
  key: 'root',
  version: 1,
  storage
}

const reducer = combineReducers({
  feedback: feedbackReducer,
  mobileNav: mobileNavReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
  reducer: persistedReducer
});
