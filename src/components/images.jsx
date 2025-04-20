import { motion } from 'framer-motion';
import left from "../assets/left.jpg";
import right from "../assets/right.jpg";
import center from "../assets/center.jpg";
import React from 'react';

const Images = () => {
	return (
		<div className="grid grid-cols-3 justify-center mx-auto mt-[5rem] mb-[2rem] max-sm:w-[70%] sm:w-[60%] lg:w-[50%] xl:w-[48%]">
			<motion.img
				className="w-[100%] border-2 border-white -rotate-20"
				src={left}
				alt=""
				initial={{ opacity: 0, x: -200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay: 1, duration: 1, type: 'spring', stiffness: 100 }}
			/>
			<motion.img
				className="w-[100%] border-2 border-white relative z-1"
				src={center}
				alt=""
				initial={{ opacity: 0, scale: 0.8 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ delay: .5, duration: 1, type: 'spring', stiffness: 50 }}
			/>
			<motion.img
				className="w-[100%] border-2 border-white rotate-20"
				src={right}
				alt=""
				initial={{ opacity: 0, x: 200 }}
				animate={{ opacity: 1, x: 0 }}
				transition={{ delay:.75, duration: 1, type: 'spring', stiffness: 100 }}
			/>
		</div>
	);
};

export default Images;
