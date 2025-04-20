import left from "../assets/left.jpg";
import right from "../assets/right.jpg";
import center from "../assets/center.jpg";

import React from 'react';

const Images = () => {
	return (
		<div className="grid grid-cols-3 justify-center mx-auto mt-[5rem] mb-[2rem] max-sm:w-[70%] sm:w-[60%] lg:w-[50%] xl:w-[48%]">
			<img className="w-[100%] border-2 border-white -rotate-20" src={left} alt=""/>
			<img className="w-[100%] border-2 border-white relative z-1" src={center} alt=""/>
			<img className="w-[100%] border-2 border-white rotate-20" src={right} alt=""/>
		</div>
	);
};

export default Images;




