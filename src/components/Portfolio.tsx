import React, { useEffect, useRef, useState } from 'react';
import Isotope from 'isotope-layout';

import project01 from '../assets/project01.jpg';
import project02 from '../assets/project02.png';
import { PortfolioInfo } from './PortfolioInfo';

export const Portfolio = () => {
	const isotope = useRef<Isotope | null>();
	const [filterKey, setFilterKey] = useState('*');

	const [isHovering, setIsHovering] = useState(false);

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

	const handleMouseOver = () => {
		setIsHovering(true);
	};

	const handleMouseOut = () => {
		setIsHovering(false);
	};
	return (
		<div>
			<div>
				<span onClick={handleFilterKeyChange('*')}>All / </span>
				<span onClick={handleFilterKeyChange('code')}>Code / </span>
				<span onClick={handleFilterKeyChange('ui')}>UI</span>
			</div>

			<ul className='filter-container ml-[-15px]'>
				<div
					className='filter-item ui'
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					{isHovering && <PortfolioInfo />}
					<img src={project01} alt='' />
				</div>
				<div
					className='filter-item code'
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					{isHovering && <PortfolioInfo />}
					<img src={project02} alt='' />
				</div>
				<div
					className='filter-item ui'
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					{isHovering && <PortfolioInfo />}
					<img src={project01} alt='' />
				</div>
				<div
					className='filter-item code'
					onMouseOver={handleMouseOver}
					onMouseOut={handleMouseOut}
				>
					{isHovering && <PortfolioInfo />}
					<img src={project02} alt='' />
				</div>
			</ul>
		</div>
	);
};
