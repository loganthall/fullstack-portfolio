import { createSlice } from '@reduxjs/toolkit';
import { initialValue } from './todoSlice';

const getInitialSubTodo = () => {

};

const initialSubValue = {
  filterStatus: 'all',
  todoList: getInitialSubTodo(),
};

export const subTodoSlice = createSlice({
  name: 'subTodo',
  initialState: initialSubValue,
  reducers: {
    addSubTodo: (state, action) => {
      state.subTodoList.push(action.payload);
      const subTodoList = window.localStorage.getItem('subTodoList');
      if (subTodoList) {
        const subTodoListArr = JSON.parse(subTodoList);
        subTodoListArr.push({
          ...action.payload,
        });
        window.localStorage.setItem('subTodoList', JSON.stringify(subTodoListArr));
      } else {
        window.localStorage.setItem(
          'subTodoList',
          JSON.stringify([
            {
              ...action.payload,
            },
          ])
        );
      }
    },
    updateSubTodo: (state, action) => {
      const subTodoList = window.localStorage.getItem('subTodoList');
      if (todoList) {
        const subTodoListArr = JSON.parse(subTodoList);
        subTodoListArr.forEach((todo) => {
          if (todo.id === action.payload.id) {
            todo.status = action.payload.status;
            todo.title = action.payload.title;
          }
        });
        window.localStorage.setItem('subTodoList', JSON.stringify(subTodoListArr));
        state.subTodoList = [...subTodoListArr];
      }
    },
    deleteSubTodo: (state, action) => {
      const subTodoList = window.localStorage.getItem('subTodoList');
      if (subTodoList) {
        const subTodoListArr = JSON.parse(subTodoList);
        subTodoListArr.forEach((todo, index) => {
          if (todo.id === action.payload) {
            subTodoListArr.splice(index, 1);
          }
        });
        window.localStorage.setItem('subTodoList', JSON.stringify(subTodoListArr));
        state.subTodoList = subTodoListArr;
      }
    },
    updateSubFilterStatus: (state, action) => {
      state.filterStatus = action.payload;
    },
  },
});

export const { addSubTodo, updateSubTodo, deleteSubTodo, updateSubFilterStatus } =
  subTodoSlice.actions;
export default subTodoSlice.reducer;
