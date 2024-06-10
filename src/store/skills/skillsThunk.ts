import { createAsyncThunk } from '@reduxjs/toolkit';
import { agent } from '../../services/apiConfig';

interface SkillItem {
	name: string;
	range: number | string;
}

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

export const addSkill = createAsyncThunk(
	'addSkill',
	async (skill: SkillItem, thunkApi) => {
		try {
			const data = await agent.post('api/skills', skill);
			return data;
		} catch (error) {
			return thunkApi.rejectWithValue(error);
		}
	}
);
