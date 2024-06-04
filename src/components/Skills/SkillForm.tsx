import React from 'react';
import { FormField } from './FormField';
import { Button } from '../Button';
import { useSelector } from 'react-redux';
import { getSkillFormData } from '../../store/selectors';
import { useAppDispatch } from '../../store/store';
import {
	clearSkillFormData,
	setSkillFormData,
} from '../../store/skillForm/skillFormSlice';
import { addSkill } from '../../store/skills/skillsThunk';

const style = {
	form: `border border-[#26C17E] p-5 rounded mb-10`,
};

const formFields = [
	{
		labelText: 'Skill name:',
		type: 'text',
		placeholderText: 'Enter skill name',
		name: 'name',
		inputID: 'name',
	},
	{
		labelText: 'Skill range:',
		type: 'number',
		placeholderText: 'Enter skill range',
		name: 'range',
		inputID: 'range',
	},
];

export const SkillForm = () => {
	const skillFormData = useSelector(getSkillFormData);
	const dispatch = useAppDispatch();

	const handleInputChange = (e) => {
		dispatch(setSkillFormData({ [e.target.name]: e.target.value }));
	};

	const handleFormSubmit = (e) => {
		e.preventDefault();
		dispatch(addSkill(skillFormData));

		dispatch(clearSkillFormData());
	};

	return (
		<form className={style.form} onSubmit={handleFormSubmit}>
			{formFields.map((field) => {
				return (
					<FormField
						key={field.inputID}
						field={field}
						value={skillFormData[field.inputID]}
						onChange={handleInputChange}
					/>
				);
			})}
			<Button buttonConfig='addSkill' />
		</form>
	);
};
