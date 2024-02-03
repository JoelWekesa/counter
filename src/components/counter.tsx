const Counter = () => {
	const now = new Date().setHours(0, 0, 0, 0);
	const yearEnd = new Date('12/31/2023').setHours(0, 0, 0, 0);

	const diff = now - yearEnd;

	const count = (diff / (24 * 1000 * 60 * 60)) * 10;

	return <p className='text-center text-white text-9xl'>{count}</p>;
};

export default Counter;
