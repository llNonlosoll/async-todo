import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './operations';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  //BEFORE createAsyncThunk
  //   reducers: {
  //     // Виконається в момент старту HTTP-запиту
  //     fetchingInProgress(state) {
  //       state.isLoading = true;
  //     },
  //     // Виконається якщо HTTP-запит завершився успішно
  //     fetchingSuccess(state, action) {
  //       state.isLoading = false;
  //       state.error = null;
  //       state.items = action.payload;
  //     },
  //     // Виконається якщо HTTP-запит завершився з помилкою
  //     fetchingError(state, action) {
  //       state.isLoading = false;
  //       state.error = action.payload;
  //     },
  //   },
  //WITH createAsyncThunk
  extraReducers: {
    [fetchTasks.pending](state) {
      state.isLoading = true;
    },
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [fetchTasks.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});
//BEFORE createAsyncThunk
// export const { fetchingInProgress, fetchingSuccess, fetchingError } =
//   taskSlice.actions;

export const tasksReducer = taskSlice.reducer;
