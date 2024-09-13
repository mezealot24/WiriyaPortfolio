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
		category: "Web Application",
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
		live: "https://projectmutayloov2-wiriyas-projects.vercel.app/",
		github: "https://github.com/mezealot24/projectmutayloov.2",
	},
	{
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
	},
	{
		category: "Web Application",
		title: "Quiz Game",
		description:
			"Quiz game is a fun and interactive way to test your knowledge and have a good time. It's a great way to challenge yourself and learn something new.",
		stack: [
			{ name: "React.js" },
			{ name: "Tailwind.css" },
			{ name: "TypeScript" },
			{ name: "Node.js" },
			{ name: "MongoDB" },
		],
		image: "/assets/work/thumb3.png",
		live: "https://silicon-warin-quiz-game.vercel.app/",
		github: "https://github.com/mezealot24/Quiz-Game",
	},
	// ... (other projects)
];

const Project = () => {
	const [currentProject, setCurrentProject] = useState(projectsData[0]);

	const handleSlideChange = (swiper) => {
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
			className="min-h-screen flex flex-col justify-start py-4 px-4 sm:px-6 lg:px-8"
		>
			<div className="container mx-auto">
				<div className="flex flex-col lg:flex-row lg:gap-8">
					{/* Swiper component - now at the top for mobile */}
					<div className="w-full lg:w-1/2 lg:order-2 mb-8 lg:mb-0">
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className="h-[300px] sm:h-[400px] lg:h-[520px]"
							onSlideChange={handleSlideChange}
						>
							{projectsData.map((project, index) => (
								<SwiperSlide key={index}>
									<div className="h-full relative group flex justify-center items-center bg-pink-50/20">
										<div className="absolute inset-0 bg-black/10 z-10"></div>
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
							))}
							<WorkSliderBtns
								containerStyles="flex gap-2 absolute right-0 bottom-0 z-20 w-full justify-between lg:w-max lg:justify-end"
								btnStyles="bg-accent hover:bg-accent-hover text-primary text-lg sm:text-xl w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center transition-all"
							/>
						</Swiper>
					</div>

					{/* Text content - now below the Swiper for mobile */}
					<div className="w-full lg:w-1/2 lg:order-1 flex flex-col justify-between">
						<div className="flex flex-col gap-4 sm:gap-6">
							<h1 className="text-3xl sm:text-5xl lg:text-7xl font-extrabold text-transparent text-outline leading-tight">
								{currentProject.title}
							</h1>
							<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white capitalize">
								{currentProject.category}
							</h2>
							<p className="text-white/60 text-sm sm:text-base">
								{currentProject.description}
							</p>
							<ul className="flex flex-wrap gap-2">
								{currentProject.stack.map((item, index) => (
									<li
										key={index}
										className="text-sm sm:text-base text-accent bg-white/5 px-3 py-1 rounded-full"
									>
										{item.name}
										{index !== currentProject.stack.length - 1 && ","}
									</li>
								))}
							</ul>
							<div className="border border-white/20 my-4"></div>
							<div className="flex items-center gap-4">
								<Link href={currentProject.live}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex justify-center items-center group">
												<BsArrowRight className="text-white text-2xl sm:text-3xl group-hover:text-accent transform -rotate-45 transition-transform duration-300 ease-in-out" />
											</TooltipTrigger>
											<TooltipContent>
												<p>Live project</p>
											</TooltipContent>
										</Tooltip>
									</TooltipProvider>
								</Link>
								<Link href={currentProject.github}>
									<TooltipProvider delayDuration={100}>
										<Tooltip>
											<TooltipTrigger className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white/5 flex justify-center items-center group">
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
				</div>
			</div>
		</motion.section>
	);
};

export default Project;
