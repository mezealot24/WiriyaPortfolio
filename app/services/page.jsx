"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { BsArrowLeft, BsArrowDownLeft } from "react-icons/bs";

const services = [
	{
		num: "01",
		title: "Web Development",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolores facere facilis mollitia dolorem voluptatibus enim neque.",
		href: "",
	},
	{
		num: "02",
		title: "UX/UI Designer",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolores facere facilis mollitia dolorem voluptatibus enim neque.",
		href: "",
	},
	{
		num: "03",
		title: "Logo Design",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolores facere facilis mollitia dolorem voluptatibus enim neque.",
		href: "",
	},
	{
		num: "04",
		title: "Game Designer",
		description:
			"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit, dolores facere facilis mollitia dolorem voluptatibus enim neque.",
		href: "",
	},
];

const Services = () => {
	const [hoveredIndex, setHoveredIndex] = useState(null);

	return (
		<section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
			<div className="container mx-auto">
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
					}}
					className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
				>
					{services.map((service, index) => (
						<div
							key={index}
							className="flex-1 flex flex-col justify-center gap-6 group"
							onMouseEnter={() => setHoveredIndex(index)}
							onMouseLeave={() => setHoveredIndex(null)}
						>
							<div className="w-full flex justify-between items-center">
								<div className="text-1xl font-bold text-outline text-white/20 group-hover:text-accent transition-all duration-500">
									{service.num}
								</div>
								<Link
									href={service.href}
									className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center"
								>
									{hoveredIndex === index ? (
										<BsArrowDownLeft className="transform transition-all duration-500" />
									) : (
										<BsArrowLeft className="transition-all duration-500" />
									)}
								</Link>
							</div>
							<h3 className="text-2xl font-bold">{service.title}</h3>
							<p className="text-gray-300">{service.description}</p>
							<div className="border-b border-white/20 w-full"></div>
						</div>
					))}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
