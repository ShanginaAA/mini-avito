import { createAsyncThunk } from '@reduxjs/toolkit';
import { Advertisements } from './types';
import { apiServer } from '@shared/api/config';
import { RootState } from '@app/providers/store/AppStore';

export const fetchAdvertisements = createAsyncThunk<any, void, { state: RootState }>(
  'advertisements/fetchAdvertisements',
  async (_, { rejectWithValue, getState }) => {
    return await apiServer
      .get<Advertisements[]>(`items`)
      .then((response) => response.data)
      .catch((error) => {
        console.log(error);
        return rejectWithValue(error.response.data);
      });
  },
);

export const fetchAdvertisement = createAsyncThunk<any, any, { state: RootState }>(
  'advertisements/fetchAdvertisement',
  async (id, { rejectWithValue, getState }) => {
    const { data } = await apiServer.get<Advertisements>(`items/${id}`);
    return data;
  },
);

export const createAdvertisement = createAsyncThunk<any, any, { state: RootState }>(
  'advertisements/createAdvertisement',
  async (payload, { rejectWithValue, getState }) => {
    return await apiServer
      .post<Advertisements>(`items`, payload)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data));
  },
);

export const updateAdvertisement = createAsyncThunk<any, any, { state: RootState }>(
  'advertisements/updateAdvertisement',
  async (payload, { rejectWithValue, getState }) => {
    return await apiServer
      .put<Advertisements>(`items/${payload.id}`, payload.data)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data));
  },
);

export const deleteAdvertisement = createAsyncThunk<any, any, { state: RootState }>(
  'advertisements/deleteAdvertisement',
  async (id, { rejectWithValue, getState }) => {
    return await apiServer
      .delete(`items/${id}`)
      .then((response) => response.data)
      .catch((error) => rejectWithValue(error.response.data));
  },
);
