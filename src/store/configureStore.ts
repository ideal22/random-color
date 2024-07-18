import { combineSlices, configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';
import elementSlice from './slices/elementSlice';

const rootReducer = combineSlices({
  elements: elementSlice,
});

export const makeStore = (preloadedState?: Partial<RootState>) => {
  const store = configureStore({
    reducer: rootReducer,

    middleware: (getDefaultMiddleware) => {
      return getDefaultMiddleware();
    },
    preloadedState,
  });

  return store;
};

export const store = makeStore();

export type RootState = ReturnType<typeof rootReducer>;

export type AppStore = typeof store;
export type AppDispatch = AppStore['dispatch'];

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
