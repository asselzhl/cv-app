import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FormField } from './FormField';
import { Button } from '../Button';
import { useAppDispatch } from '../../store/store';
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
		type: 'text',
		placeholderText: 'Enter skill range',
		name: 'range',
		inputID: 'range',
	},
];

export const SkillForm = () => {
	const dispatch = useAppDispatch();

	const formik = useFormik({
		initialValues: {
			name: '',
			range: '',
		},
		onSubmit: (values, { resetForm }) => {
			dispatch(addSkill(values));

			resetForm();
		},
		validationSchema: Yup.object({
			name: Yup.string().required('Skill name is required'),
			range: Yup.number()
				.required('Skill range is required')
				.moreThan(9, 'Skill range must be more than or equal to 10')
				.lessThan(101, 'Skill range must be less than or equal to 100'),
		}),
	});

	return (
		<form className={style.form} onSubmit={formik.handleSubmit}>
			{formFields.map((field) => {
				return <FormField key={field.inputID} field={field} formik={formik} />;
			})}
			<Button buttonConfig='addSkill' />
		</form>
		// disable button
	);
};
