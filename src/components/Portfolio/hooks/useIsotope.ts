import { useRef, useState, useEffect } from 'react';
import Isotope from 'isotope-layout';



export const useIsotope = () => {
	const isotope = useRef<Isotope | null>(null);
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

	return {
		filterKey,
		handleFilterKeyChange,
	};
};
