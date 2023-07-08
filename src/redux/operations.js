import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://64a989ad8b9afaf4844acd26.mockapi.io';

//BEFORE createAsyncThunk
// import {
//   fetchingInProgress,
//   fetchingSuccess,
//   fetchingError,
// } from './taskSlice';
// export const fetchTasks = () => async dispatch => {
//   try {
//     // Індикатор завантаження
//     dispatch(fetchingInProgress());
//     // HTTP-запит
//     const response = await axios.get('/tasks');
//     // Обробка даних
//     dispatch(fetchingSuccess(response.data));
//   } catch (error) {
//     // Обробка помилки
//     dispatch(fetchingError(error.message));
//   }
// };

//WITH createAsyncThunk
export const fetchTasks = createAsyncThunk(
  'tasks/fetchAll',
  // Використовуємо символ підкреслення як ім'я першого параметра,
  // тому що в цій операції він нам не потрібен
  async (_, thunkAPI) => {
    try {
      const response = await axios.get('/tasks');
      // При успішному запиті повертаємо проміс із даними
      return response.data;
    } catch (error) {
      // При помилці запиту повертаємо проміс
      // який буде відхилений з текстом помилки
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
