import { createSlice } from '@reduxjs/toolkit';
import { fetchEducations } from './educationThunk';
import { StateStatus, stateStatus } from '../constants';

interface EducationsListItem {
	date: number;
	title: string;
	description: string;
}
interface EducationsState {
	status: StateStatus;
	data: EducationsListItem[];
	error: null | string;
}

const initialState: EducationsState = {
	status: stateStatus.idle,
	data: [],
	error: null,
};

export const educationSlice = createSlice({
	name: 'education',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(fetchEducations.pending, (state) => {
				state.status = stateStatus.loading;
				return state;
			})
			.addCase(fetchEducations.fulfilled, (state, action) => {
				state.status = stateStatus.succeeded;
				state.data = action.payload.data.educations;
				return state;
			})
			.addCase(fetchEducations.rejected, (state, action) => {
				state.status = stateStatus.failed;
				state.error = action.error.message;
				return state;
			});
	},
});

export const educationReducer = educationSlice.reducer;
