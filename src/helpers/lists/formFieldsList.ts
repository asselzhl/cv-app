interface FormFieldsItem {
	labelText: string;
	type: string;
	placeholderText: string;
	name: string;
	inputID: string;
}
export const formFields: FormFieldsItem[] = [
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
