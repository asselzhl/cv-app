import { createSlice } from '@reduxjs/toolkit';
import { stateStatus } from '../constants';
import { addSkill, fetchSkills } from './skillsThunk';

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
			.addCase(fetchSkills.fulfilled, (state) => {
				state.status = stateStatus.succeeded;
				return state;
			})
			.addCase(fetchSkills.rejected, (state, action) => {
				state.status = stateStatus.failed;
				state.error = action.error.message;
				return state;
			})
			.addCase(addSkill.fulfilled, (state, action) => {
				state.status = stateStatus.succeeded;
				state.data.push(action.payload.data.skill);
				return state;
			});
	},
});

export const skillsReducer = skillsSlice.reducer;
