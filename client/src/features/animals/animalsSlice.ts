import { createSlice } from "@reduxjs/toolkit";
import { CatResponse } from "../../interfaces/cat";
import { DogResponse } from "../../interfaces/dog";
import { FoxResponse } from "../../interfaces/fox";
import { BunnyResponse } from "../../interfaces/rabbit";
import { fetchDog } from "../../services/apiDog";
import { fetchCat } from "../../services/apiCat"; 
import { fetchFox } from "../../services/apiFox"; 
import { fetchRabbit } from "../../services/apiRabbit";

type AnimalStateStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface AnimalState<T> {
  data: T | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

interface AnimalsState {
  cat: AnimalState<CatResponse[]>;
  dog: AnimalState<DogResponse>;
  fox: AnimalState<FoxResponse>;
  rabbit: AnimalState<BunnyResponse>;
}

const initialState: AnimalsState = {
  cat: { data: null, status: 'idle', error: null },
  dog: { data: null, status: 'idle', error: null },
  fox: { data: null, status: 'idle', error: null },
  rabbit: { data: null, status: 'idle', error: null },
};

const animalsSlice = createSlice({
  name: "animals",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCat.pending, (state) => {
        state.cat.status = 'loading';
        state.cat.error = null;
      })
      .addCase(fetchCat.fulfilled, (state, action) => {
        state.cat.status = 'succeeded';
        state.cat.data = action.payload;
      })
      .addCase(fetchCat.rejected, (state, action) => {
        state.cat.status = 'failed';
        state.cat.error = action.payload as string;
      })
      .addCase(fetchDog.pending, (state) => {
        state.dog.status = 'loading';
        state.dog.error = null;
      })
      .addCase(fetchDog.fulfilled, (state, action) => {
        state.dog.status = 'succeeded'; 
        state.dog.data = action.payload;
      })
      .addCase(fetchDog.rejected, (state, action) => {
        state.dog.status = 'failed'; 
        state.dog.error = action.payload as string;
      })
      .addCase(fetchFox.pending, (state) => {
        state.fox.status = 'loading'; 
        state.fox.error = null;
      })
      .addCase(fetchFox.fulfilled, (state, action) => {
        state.fox.status = 'succeeded'; 
        state.fox.data = action.payload;
      })
      .addCase(fetchFox.rejected, (state, action) => {
        state.fox.status = 'failed';
        state.fox.error = action.payload as string;
      })
      .addCase(fetchRabbit.pending, (state) => {
        state.rabbit.status = 'loading';
        state.rabbit.error = null;
      })
      .addCase(fetchRabbit.fulfilled, (state, action) => {
        state.rabbit.status = 'succeeded';
        state.rabbit.data = action.payload;
      })
      .addCase(fetchRabbit.rejected, (state, action) => {
        state.rabbit.status = 'failed';
        state.rabbit.error = action.payload as string;
      });
  },
});

export default animalsSlice.reducer;
