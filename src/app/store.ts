import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import experienceReducer from '../store/reducers/experienceReducer';
import projectReducer from '../store/reducers/projectReducer';
import skillsReducer from '../store/reducers/skillsReducer';

export const store = configureStore({
  reducer: {
    experience: experienceReducer,
    project: projectReducer,
    skills: skillsReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
