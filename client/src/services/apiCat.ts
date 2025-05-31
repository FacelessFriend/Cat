import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { CatResponse } from '../interfaces/cat';

export const fetchCat = createAsyncThunk(
  'animals/fetchCat',
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get<CatResponse[]>('https://api.thecatapi.com/v1/images/search?size=full');
      return response.data
    } catch (error) {
      const message =
        axios.isAxiosError(error) ? error.message : 'Неизвестная ошибка';
      return rejectWithValue(message);
    }
  }
);