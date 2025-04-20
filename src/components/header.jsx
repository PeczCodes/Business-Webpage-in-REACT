import React, {useState} from 'react';
import logo from '../assets/logo.png';
import clsx from "clsx";

const Header = () => {
	const [active, setActive] = useState(false);
	const nav = ["Products", "Quiz", "Testimonials", "Contact", "Shop Now"]
	
	return (
		<div className="backdrop-blur-xs sticky top-0 z-5 flex justify-between items-center pt-1 pr-[2rem] pl-[.5rem] cursor-pointer">
			<div className="flex items-center">
				<img className="w-[4rem]  drop-shadow-black" src={logo} alt=""/>
				<div className="logo text-3xl -ml-2 text-black">Aura</div>
			</div>
			<div className="grid gap-2 relative lg:hidden" onClick={() => setActive(!active)}>
				<div className={clsx("h-[2px] bg-black transition-all duration-500", active? "w-[.5rem]": "w-[2rem]")}></div>
				<div className={clsx("h-[2px] w-[2rem] bg-black transition duration-500")}></div>
				<div className={clsx("h-[2px] bg-black transition-all duration-500", active? "w-[1rem]": "w-[2rem]")}></div>
			</div>
			<div className={clsx("bg flex flex-col h-[calc(100vh-5rem)]  transition-transform duration-500 origin-right gap-3 absolute top-[5rem] left-0 min-h-[100%] w-full p-[2rem] items-center shadow-lg overflow-hidden", active ? "scale-x-100" : "scale-x-0")}>
				{
					nav.map((val, idx) => <a className={clsx("opacity-0 text-black transition-all duration-500", active? "opacity-100 translate-y-0":" translate-y-[-1rem]")} key={idx}>{val}</a>)
				}
			</div>
			<div className="flex gap-6 items-center max-lg:hidden">
				{nav.map((val, idx) => {
					if(val === "Shop Now"){
						return <a key={idx} className="bg-amber-500 py-2 px-4 w-fit rounded-2xl">{val}</a>
					}
					return <a key={idx}>{val}</a>
				})}
			</div>
		
		</div>
	);
};

export default Header;