import { configureStore } from '@reduxjs/toolkit';
import counter from './counter';

const initialState = {
    value: 0,
}

const store = configureStore({
    reducer: counter,
    preloadedState: initialState,
});

export default store;