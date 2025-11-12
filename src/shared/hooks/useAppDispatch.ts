import { AppDispatch } from '@app/providers/store/AppStore';
import { useDispatch } from 'react-redux';

export const useAppDispatch = () => useDispatch<AppDispatch>();
