import { createSlice } from '@reduxjs/toolkit';

interface SkillFormState {
	name: string;
	range: number | string;
}

const initialState: SkillFormState = {
	name: '',
	range: '',
};

export const skillFormSlice = createSlice({
	name: 'skillForm',
	initialState,
	reducers: {
		setSkillFormData: (state, action) => {
			const { payload } = action;

			const isRangeDefined = payload.range !== undefined;
			const isRangeNotNumber = typeof payload.range !== 'number';

			if (isRangeDefined && isRangeNotNumber) {
				payload.range = Number(payload.range);
			}
			return { ...state, ...payload };
		},
		clearSkillFormData: (state) => {
			state = initialState;
			return state;
		},
	},
});

export const skillFormReducer = skillFormSlice.reducer;
export const { setSkillFormData, clearSkillFormData } = skillFormSlice.actions;
