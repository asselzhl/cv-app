import { RootState } from './store';

// Educations selectors
export const getEducationsList = (state: RootState) => state.education.data;
export const getEducationsStateStatus = (state: RootState) =>
	state.education.status;

// Skills selectors
export const getSkillsStateStatus = (state: RootState) => state.skills.status;
export const getSkillsList = (state: RootState) => state.skills.data;
