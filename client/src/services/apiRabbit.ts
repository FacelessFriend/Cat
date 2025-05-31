import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchRabbit = createAsyncThunk(
  'animals/fetchRabbit',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://api.bunnies.io/v2/loop/random/?media=webm,mp4');
      return response.data
    } catch (error) {
      const message =
        axios.isAxiosError(error) ? error.message : 'Неизвестная ошибка';
      return rejectWithValue(message);
    }
  }
);