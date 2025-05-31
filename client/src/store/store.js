import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import animalsReducer from '../features/animals/animalsSlice';
export const store = configureStore({
    reducer: {
        animals: animalsReducer,
    },
});
export const useAppDispatch = () => useDispatch();
export const useAppSelector = useSelector;
