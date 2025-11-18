import { createSlice } from '@reduxjs/toolkit';
import { Advertisement } from './types';
import { fetchAdvertisementById, fetchAdvertisements } from './actions';

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface AdvertisementsSliceState {
  items: Advertisement[];
  currentItem: Advertisement | null;
  fetchingStatus: RequestStatus;
  fetchingByIdStatus: RequestStatus;
  error: string | null;
}

const initialState: AdvertisementsSliceState = {
  items: [],
  currentItem: null,
  fetchingStatus: 'idle',
  fetchingByIdStatus: 'idle',
  error: null,
};

export const advertisementSlice = createSlice({
  name: 'advertisementSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertisements.pending, (state) => {
        state.items = [];
        state.fetchingStatus = 'loading';
      })
      .addCase(fetchAdvertisements.fulfilled, (state, action) => {
        state.items = action.payload;
        state.fetchingStatus = 'succeeded';
      })
      .addCase(fetchAdvertisements.rejected, (state, action) => {
        state.items = [];
        state.fetchingStatus = 'failed';
        state.error = action.payload as string;
      })
      // Обработка fetchAdvertisementById
      .addCase(fetchAdvertisementById.pending, (state) => {
        state.currentItem = null;
        state.fetchingByIdStatus = 'loading';
      })
      .addCase(fetchAdvertisementById.fulfilled, (state, action) => {
        state.currentItem = action.payload;
        state.fetchingByIdStatus = 'succeeded';
      })
      .addCase(fetchAdvertisementById.rejected, (state, action) => {
        state.currentItem = null;
        state.fetchingByIdStatus = 'failed';
        state.error = action.payload as string;
      });
  },
});
