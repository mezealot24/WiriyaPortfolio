"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
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
		category: "Web Application",
		title: "Quiz Game",
		description:
			"Quiz game is a fun and interactive way to test your knowledge and have a good time. It's a great way to challenge yourself and learn something new.",
		stack: [
			{ name: "Next.js" },
			{ name: "Tailwind.css" },
			{ name: "TypeScript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb3.png",
		live: "https://www.kruearth.net/",
		github: "https://github.com/mezealot24/Quiz-Game",
	},
	{
		category: "Web E-Commerce",
		title: "Mutayloo",
		description:
			"Mutayloo is a unique e-commerce platform for spiritual jewelry, offering enchanted accessories, horoscope readings, and astrological insights for a mystical shopping experience.",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "Javascript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb1.png",
		live: "https://projectmutayloov2-wiriyas-projects.vercel.app/",
		github: "https://github.com/mezealot24/projectmutayloov.2",
	},
	/* {
		category: "Web Application",
		title: "Todo List",
		description:
			"a user-friendly application designed to help you efficiently manage your daily tasks and activities. Easily add, edit, and delete tasks to stay organized and productive.",
		stack: [
			{ name: "Next.js" },
			{ name: "Tailwind.css" },
			{ name: "TypeScript" },
			{ name: "Node.js" },
			{ name: "PostgreSQL" },
		],
		image: "/assets/work/thumb2.png",
		live: "https://todorock-frontend-deploy.vercel.app/",
		github: "https://github.com/mezealot24/todorock-frontend-deploy",
	}, */

	// ... (other projects)
];

const Project = () => {
	const [selectedProject, setSelectedProject] = useState(projectsData[0]);

	const handleSlideChange = (swiper) => {
		//get current slide index
		const currentIndex = swiper.activeIndex;
		//update project based on current slide
		setSelectedProject(projectsData[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] sm:min-h-[60vh] flex flex-col justify-center py-6 sm:py-12 xl:px-0"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row xl:gap-[30px]">
					<div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
						<div className="flex flex-col gap-[20px] xl:gap-[30px] h-full justify-between">
							{/* project title */}
							<div className="text-5xl sm:text-8xl leading-none font-bold text-transparent text-outline">
								{selectedProject.title}
							</div>
							{/* project category */}
							<h2 className="text-2xl sm:text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
								{selectedProject.category} project
							</h2>
							{/* project description */}
							<p className="text-white/60">{selectedProject.description}</p>
							{/* project stack */}
							<ul className="flex flex-wrap gap-2">
								{selectedProject.stack.map((item, index) => (
									<li
										key={index}
										className="text-sm sm:text-base text-accent bg-white/5 px-3 py-1 rounded-full"
									>
										{item.name}
									</li>
								))}
							</ul>
							{/* border */}
							<div className="border border-white/20"></div>
							{/* button */}
							<div className="flex items-center gap-4 mt-auto">
								<Link href={selectedProject.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowUpRight className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live Project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								<Link href={selectedProject.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-[50px] sm:w-[70px] h-[50px] sm:h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
												<BsGithub className="text-white text-2xl sm:text-3xl group-hover:text-accent" />
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
							className="h-[300px] sm:h-[520px] mb-12"
							onSlideChange={handleSlideChange}
						>
							{projectsData.map((project, index) => {
								return (
									<SwiperSlide key={index} className="w-full">
										<div className="h-[260px] sm:h-[460px] relative group flex justify-center items-center bg-pink-50/20">
											{/* overlay */}
											<div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
											{/* image */}
											<div className="relative w-full h-full">
												<Image
													src={project.image}
													fill
													className="object-cover"
													alt=""
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/* slider button */}
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
