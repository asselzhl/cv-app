import React from 'react';

const style = {
	pageInput: `p-2.5 leading-6 rounded border border-[#667081] focus:outline-[#007298]`,
	label: `mr-5`,
	error: `text-red-500`,
};

export const FormField = ({ field, formik }) => {
	return (
		<div className='mb-6'>
			<label htmlFor={field.inputID} className={style.label}>
				{field.labelText}
			</label>
			<input
				type={field.type}
				id={field.inputID}
				placeholder={field.placeholderText}
				name={field.name}
				value={formik.values[field.inputID]}
				className={style.pageInput}
				onChange={formik.handleChange}
				onBlur={formik.handleBlur}
			/>
			<div className={style.error}>
				{formik.errors[field.inputID] &&
					formik.touched[field.inputID] &&
					formik.errors[field.inputID]}
			</div>
		</div>
	);
};
