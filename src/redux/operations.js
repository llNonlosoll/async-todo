import axios from 'axios';

import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from './taskSlice';

axios.defaults.baseURL = 'https://64a989ad8b9afaf4844acd26.mockapi.io';

export const fetchTasks = () => async dispatch => {
  try {
    // Індикатор завантаження
    dispatch(fetchingInProgress());
    // HTTP-запит
    const response = await axios.get('/tasks');
    // Обробка даних
    dispatch(fetchingSuccess(response.data));
  } catch (error) {
    // Обробка помилки
    dispatch(fetchingError(error.message));
  }
};
