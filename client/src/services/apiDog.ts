import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchDog = createAsyncThunk(
  'animals/fetchDog',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://dog.ceo/api/breeds/image/random');
      return response.data
    } catch (error) {
      const message =
        axios.isAxiosError(error) ? error.message : 'Неизвестная ошибка';
      return rejectWithValue(message);
    }
  }
);