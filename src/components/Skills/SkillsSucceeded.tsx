import React from 'react';
import { buttonKeys } from '../../helpers/buttonMap';
import { SkillForm } from './SkillForm';
import { SkillsItem } from './SkillsItem';
import { Scale } from './Scale';
import { Button } from '../Button/Button';

const style = {
	list: `flex flex-col gap-y-1 mb-7`,
};

interface SkillsListItem {
	name: string;
	range: number;
}

interface SkillsSucceededProps {
	skillsList: SkillsListItem[];
	isFormHidden: boolean;
	toggleForm: () => void;
}

export const SkillsSucceeded = ({
	skillsList,
	isFormHidden,
	toggleForm,
}: SkillsSucceededProps) => {
	const buttonConfig = isFormHidden
		? buttonKeys.openEdit
		: buttonKeys.closeEdit;
	return (
		<div>
			<Button buttonConfig={buttonConfig} onClick={toggleForm} />
			{!isFormHidden && <SkillForm />}

			<ul className={style.list}>
				{skillsList.map((skill) => {
					return <SkillsItem key={skill.name} skill={skill} />;
				})}
			</ul>

			<Scale />
		</div>
	);
};
