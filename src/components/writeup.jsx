import { motion } from "framer-motion";

const containerVariants = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.25,
			delayChildren: 0.2
		}
	}
};

const fadeUp = {
	hidden: { opacity: 0, y: 40 },
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 1,
			ease: [0.25, 0.8, 0.25, 1]
		}
	}
};

const Writeup = () => {
	return (
		<motion.div
			className="lg:-mt-[4rem] sm:mt-[2rem] flex flex-col text-center gap-4 p-[calc(2rem+2vw)]"
			variants={containerVariants}
			initial="hidden"
			whileInView="show"
			viewport={{ once: true, amount: 0.6 }}
		>
			<motion.div variants={fadeUp}>
				<div className="logo text-[8vw] lg:text-[4rem] font-extrabold">
					Where Science Meets Radiance
				</div>
			</motion.div>
			
			<motion.div variants={fadeUp}>
				<div className="text-[calc(.5rem+2vw)] lg:text-[1.5rem]">
					Discover skincare rooted in innovation, crafted to enhance your natural glow and empower lasting beauty.
				</div>
			</motion.div>
		</motion.div>
	);
};

export default Writeup;
