import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Ваш корневой редюсер

const store = configureStore({
  reducer: rootReducer,
  // другие опции, если необходимо
});

export default store;