import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { FormFieldWithError } from './FormFieldWithError';
import { Button } from '../Button/Button';
import { addSkill } from '../../store/skills/skillsThunk';
import { formFields } from '../../helpers/lists/formFieldsList';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'src/store/store';

const style = {
	form: `border border-[#26C17E] p-5 rounded mt-7`,
};

export const SkillForm = () => {
	const dispatch = useDispatch<AppDispatch>();

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
		<form
			className={style.form}
			onSubmit={formik.handleSubmit}
			data-testid='skill-form'
		>
			{formFields.map((field) => {
				return (
					<FormFieldWithError
						key={field.inputID}
						field={field}
						formik={formik}
					/>
				);
			})}
			<Button
				text='Add skill'
				type='submit'
				disabled={!(formik.isValid && formik.dirty)}
			/>
		</form>
	);
};
