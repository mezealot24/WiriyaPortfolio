"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import "swiper/css/navigation";
import { BsArrowRight, BsGithub } from "react-icons/bs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/ui/WorkSliderBtns";

const projectsData = [
	{
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
		live: "wiriya-portfolio.vercel.app",
		github: "https://github.com/mezealot24/projectmutayloov.2",
	},
	{
		category: "Fullstack Web",
		title: "Todo List",
		description:
			"a user-friendly application designed to help you efficiently manage your daily tasks and activities. Easily add, edit, and delete tasks to stay organized and productive.",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb2.png",
		live: "",
		github: "",
	},
	{
		category: "Game",
		title: "Simon-game",
		description: ".",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb3.png",
		live: "",
		github: "",
	},
	// ... (other projects)
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
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh]
            flex flex-col justify-center py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none"></div>
					<div className="flex flex-col gap-[30px] h-[50%]">
						{/* project category */}
						<div className="text-8xl leading-none font-extrabold text-transparent text-outline">
							{currentProject.title}
						</div>
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
												<p>Github repository</p>
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
							{projectsData.map((project, index) => {
								return (
									<SwiperSlide key={index}>
										<div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											{/* overlay */}
											<div className="absolute inset-0 bg-black/10 z-10"></div>
											{/* image */}
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													alt={project.title}
													fill
													className="object-cover"
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Project;
