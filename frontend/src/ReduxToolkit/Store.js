// store.js
import { configureStore, combineReducers } from '@reduxjs/toolkit';
import taskReducer from './TaskSlice';
import authReducer from './AuthSlice';
import submissionReducer from './SubmissionSlice';

const rootReducer = combineReducers({
  task: taskReducer,
  auth: authReducer,
  submission: submissionReducer
  // Add other reducers here if needed
});

const store = configureStore({
  reducer: rootReducer,
  // No need to manually add thunk – it's already included
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
  // Add devTools or other configs if needed
});

export default store;
