import React from 'react';
import { motion } from 'framer-motion';

const Cta = () => {
	return (
		<motion.button
			className="m-auto rounded-xs lg:-mt-[2rem] bg-amber-500 p-2 w-fit flex justify-center capitalize"
			initial={{ scale: 0.9, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			whileHover={{
				scale: 1.1,
				backgroundColor: '#f59e0b',
			}}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 10,
				duration: 5000,
			}}
		>
			Begin Your Skin Transformation
		</motion.button>
	);
};

export default Cta;
