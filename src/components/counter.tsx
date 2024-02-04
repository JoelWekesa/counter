'use client';

import { useEffect, useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const handleNew = () => {
			const now = new Date().setHours(0, 0, 0, 0);
			const yearEnd = new Date('12/31/2023').setHours(0, 0, 0, 0);

			const diff = now - yearEnd;

			const count = (diff / (24 * 1000 * 60 * 60)) * 10;
			setCount(count);
			setLoading(false);
		};

		handleNew();
	}, []);

	return (
		<p className='text-center text-white text-9xl'>{loading ? '...' : count}</p>
	);
};

export default Counter;
