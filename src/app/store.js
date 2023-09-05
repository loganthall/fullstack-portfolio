import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../slices/todoSlice';
import subTodoReducer from '../slices/subTodoSlice';

export const store = configureStore({
  reducer: {
    todo: todoReducer,
    subTodo: subTodoReducer
  },
});
