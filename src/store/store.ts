import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { educationReducer } from './education/educationSlice';
import { skillsReducer } from './skills/skillsSlice';

export const store = configureStore({
	reducer: {
		education: educationReducer,
		skills: skillsReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
