import { RootState } from '@app/providers/store/AppStore';

export const selectAdvertisements = (state: RootState) => state.advertisementSlice.items;
export const selectFetchStatus = (state: RootState) => state.advertisementSlice.fetchingStatus;
