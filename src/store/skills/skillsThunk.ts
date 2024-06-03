import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from '../../services/apiConfig';

export const fetchSkills = createAsyncThunk(
	'fetchSkills',
	async (_, thunkApi) => {
		try {
			const data = await agent.get('api/skills');
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
