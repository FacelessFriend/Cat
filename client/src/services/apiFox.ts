import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchFox = createAsyncThunk(
  'animals/fetchFox',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get('https://randomfox.ca/floof/');
      return response.data
    } catch (error) {
      const message =
        axios.isAxiosError(error) ? error.message : 'Неизвестная ошибка';
      return rejectWithValue(message);
    }
  }
);