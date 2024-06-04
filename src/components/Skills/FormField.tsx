import React from 'react';

const style = {
	pageInput: `p-2.5 leading-6 rounded border border-[#667081] focus:outline-[#007298] mb-5`,
	label: `mr-5`,
};

export const FormField = ({ field, value, onChange }) => {
	return (
		<div>
			<label htmlFor={field.inputID} className={style.label}>
				{field.labelText}
			</label>
			<input
				type={field.type}
				id={field.inputID}
				placeholder={field.placeholderText}
				name={field.name}
				value={value}
				className={style.pageInput}
				onChange={onChange}
			/>
		</div>
	);
};
