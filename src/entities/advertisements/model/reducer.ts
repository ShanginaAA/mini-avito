import { createSlice } from '@reduxjs/toolkit';
import { Advertisement } from './types';
import { fetchAdvertisements } from './actions';

export type RequestStatus = 'idle' | 'loading' | 'succeeded' | 'failed';

interface AdvertisementsSliceState {
  items: Advertisement[];
  fetchingStatus: RequestStatus;
  error: string | null;
}

const initialState: AdvertisementsSliceState = {
  items: [],
  fetchingStatus: 'idle',
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
        // state.error =
      });
  },
});
