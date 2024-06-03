import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from '../../services/apiConfig';

export const fetchEducations = createAsyncThunk(
	'fetchEducations',
	async (_, thunkApi) => {
		try {
			const data = await agent.get('api/educations');
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
