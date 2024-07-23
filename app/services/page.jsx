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
			"I build websites using MERN stack. My projects include an e-commerce site for spiritual jewelry and a zodiac-based fortune-telling system. Let's create a website that fits your needs!",
		href: "",
	},
	{
		num: "02",
		title: "UX/UI Designer",
		description:
			"I design user-friendly interfaces. My background in music helps me create designs that look good and feel intuitive, like in my zodiac suggestion feature.",
		href: "https://www.figma.com/design/iSjRloi1PoQsfTCcL3Iznf/Mutayloo-%7C-old-design?node-id=356-2007&t=pMvv5YRiVeUkST5O-1",
	},
	{
		num: "03",
		title: "Logo Design",
		description:
			"I create simple but effective logos. My experience in music and spiritual jewelry helps me design logos that capture the essence of your brand.",
		href: "",
	},
	{
		num: "04",
		title: "Interactive Web Apps",
		description:
			"I create fun web applications. One of my projects is a Simon game. I can also make engaging apps like zodiac-based suggestion systems that users will enjoy.",
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
