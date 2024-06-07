import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

import { PortfolioItem } from './PortfolioItem';
import { FilterKeysItem, ProjectsItem } from '../../helpers/lists/projectsList';

const style = {
	filterKeysWrapper: `mb-5 flex gap-x-3`,
	filterKey: `cursor-pointer bg-[#009E60] text-white rounded-full py-1 px-4`,
	projectsList: `filter-container ml-[-10px]`,
};

interface PortfolioProps {
	projectsList: ProjectsItem[];
	filterKeys: FilterKeysItem[];
}

export const Portfolio = ({ projectsList, filterKeys }: PortfolioProps) => {
	const isotope = useRef<Isotope | null>();
	const [filterKey, setFilterKey] = useState<string>('*');

	useEffect(() => {
		isotope.current = new Isotope('.filter-container', {
			itemSelector: '.filter-item',
			layoutMode: 'fitRows',
		});

		return () => isotope.current?.destroy();
	}, []);

	useEffect(() => {
		if (filterKey === '*') isotope.current?.arrange({ filter: `*` });
		else isotope.current?.arrange({ filter: `.${filterKey}` });
	}, [filterKey]);

	const handleFilterKeyChange = (key: string) => () => setFilterKey(key);

	return (
		<div>
			<div className={style.filterKeysWrapper}>
				{filterKeys.map((filterKey) => {
					return (
						<button
							key={filterKey.key}
							className={style.filterKey}
							onClick={handleFilterKeyChange(filterKey.key)}
						>
							{filterKey.tag}
						</button>
					);
				})}
			</div>

			<ul className={style.projectsList}>
				{projectsList.map((project) => {
					return <PortfolioItem key={project.info.title} project={project} />;
				})}
			</ul>
		</div>
	);
};
