import { createSlice } from '@reduxjs/toolkit';
import { stateStatus } from '../constants';
import { fetchSkills } from './skillsThunk';

const initialState = {
	status: stateStatus.idle,
	data: [],
	error: null,
};

export const skillsSlice = createSlice({
	name: 'skills',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchSkills.pending, (state) => {
				state.status = stateStatus.loading;
				return state;
			})
			.addCase(fetchSkills.fulfilled, (state, action) => {
				state.status = stateStatus.succeeded;
				state.data = action.payload.data.skills;
				return state;
			})
			.addCase(fetchSkills.rejected, (state, action) => {
				state.status = stateStatus.failed;
				state.error = action.error.message;
				return state;
			});
	},
});

export const skillsReducer = skillsSlice.reducer;
