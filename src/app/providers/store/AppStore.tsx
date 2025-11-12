import { advertisementSlice } from '@entities/advertisements';
import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import React from 'react';

export const store = configureStore({
  reducer: {
    [advertisementSlice.name]: advertisementSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export const makeStore = () => store;

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore['getState']>;
export type AppDispatch = AppStore['dispatch'];
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
