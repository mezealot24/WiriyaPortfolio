"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

const projectsData = [
	{
		num: "01",
		category: "Fullstack Web",
		title: "Project Mutayloo",
		description:
			"Project Mutayloo a unique e-commerce platform dedicated to spiritual jewelry. Alongside offering a wide range of enchanted accessories, it features horoscope readings and detailed astrological information for all zodiac signs, providing a holistic mystical shopping experience.",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "",
	},
	{
		num: "02",
		category: "Frontend Web",
		title: "Project Mutayloo",
		description: "Simon-Game with React.js mini-project",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
		],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "",
	},
	{
		num: "03",
		category: "Todo-list",
		title: "Project Mutayloo",
		description: "Todo-list with feature for tech-Lifestyle",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb1.png",
		live: "",
		github: "",
	},
];

const Project = () => {
	const [currentProject, setCurrentProject] = useState(projectsData[0]);

	const handleSlideChange = (swiper) => {
		//get curren slide index
		const currentIndex = swiper.activeIndex;

		setCurrentProject(projectsData[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			className="min-h-[80vh]
            flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"></div>
					<div className="flex flex-col gap-[30px] h-[50%]">
						{/* outline num */}
						<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
							{currentProject.num}
						</div>
						{/* project category */}
						<h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
							{currentProject.category}
						</h2>
						{/* project description */}
						<p className="text-white/60">{currentProject.description}</p>
						{/* stack */}
						<ul className="flex gap-4">
							{currentProject.stack.map((item, index) => {
								return (
									<li key={index} className="text-xl text-accent">
										{item.name}
										{/* remove the last comma */}
										{index !== currentProject.stack.length - 1 && ","}
									</li>
								);
							})}
						</ul>
						{/* border */}
						<div className="border border-white/20"></div>
						{/* button live*/}
						<div className="flex items-center gap-4">
							<Link href={currentProject.live}>
								<TooltipProvider delayDuration={100}>
									<Tooltip>
										<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
											<BsArrowRight className="text-white text-3xl group-hover:text-accent transform -rotate-45 transition-transform duration-300 ease-in-out" />
										</TooltipTrigger>
										<TooltipContent>
											<p>Live project</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</Link>
							{/*button github*/}
							<div>
								<Link href={currentProject.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Githob repository</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
							</div>
						</div>
					</div>
					<div className="w-full xl:w-[50%]">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="xl:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projectsData.map((currentProject, index) => {
								return <SwiperSlide key={index}>slide</SwiperSlide>;
							})}
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Project;
