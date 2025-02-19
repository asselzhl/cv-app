import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { educationReducer } from './education/educationSlice';
import { skillsReducer } from './skills/skillsSlice';

import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
	key: 'root',
	storage,
	blacklist: ['education', 'skills'],
};

const skillsPersistConfig = {
	key: 'skills',
	storage,
	whitelist: ['data'],
};

export const rootReducer = combineReducers({
	education: educationReducer,
	skills: persistReducer(skillsPersistConfig, skillsReducer),
});

export const persistedReducer = persistReducer(persistConfig, rootReducer);

export const createStore = () =>
	configureStore({
		reducer: persistedReducer,
		middleware: (getDefaultMiddleware) =>
			getDefaultMiddleware({
				serializableCheck: {
					ignoredActions: [
						'fetchEducations/fulfilled',
						'fetchEducations/rejected',
						'fetchSkills/fulfilled',
						'fetchSkills/rejected',
						'addSkill/rejected',
						'addSkill/fulfilled',
						FLUSH,
						REHYDRATE,
						PAUSE,
						PERSIST,
						PURGE,
						REGISTER,
					],
				},
			}),
	});

export const store = createStore();

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
