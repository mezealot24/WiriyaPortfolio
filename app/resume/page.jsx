"use client";

import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
	FaJava,
} from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

import { motion } from "framer-motion";

//about data

const about = {
	title: "About me",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi quis simi",
	info: [
		{
			fieldName: "Name",
			fieldValue: "Wiriya Onnompan",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+66)923287570",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Thailand",
		},
		{
			fieldName: "Email",
			fieldValue: "wiriya.on@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English,Thai",
		},
	],
};

// experience data
const experience = {
	icon: "/assests/resume/badge.svg",
	title: "My experience",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi quis simi.",
	items: [
		{
			company: "Generation Thailand",
			position: "Full Stack Developer",
			duration: "Present",
		},
		{
			company: "Anothai Service CO, LTD",
			position: "Technical Assisstant air conditioner",
			duration: "2020-2024",
		},
		{
			company: "Freelance",
			position: "Guitarist",
			duration: "2010-2018",
		},
	],
};

const education = {
	icon: "/assets/resume/cap.svg",
	title: "My education",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi quis simi.",
	items: [
		{
			institution: "Generation Thailand",
			degree: "Full Stack Web Development Bootcamp",
			duration: "2024",
		},
		{
			institution: "Codecademy",
			degree: "Certified Full Stack Web Development (MERN Stack)",
			duration: "2024",
		},
		{
			institution: "Rangsit University",
			degree: "Bachelor's Degree Computer Science",
			duration: "2006-2011",
		},
	],
};

const skills = {
	title: "My skills",
	description:
		"Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae nisi quis simi.",
	skillList: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "CSS 3",
		},
		{
			icon: <FaJs />,
			name: "Javascript",
		},
		{
			icon: <FaReact />,
			name: "React.js",
		},
		{
			icon: <SiTailwindcss />,
			name: "tailwind.css",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <FaFigma />,
			name: "figma",
		},
		{
			icon: <FaHtml5 />,
			name: "html5",
		},
		{
			icon: <FaJava />,
			name: "java",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs defaultValue="experience" className="flex flex-col xl:flex-row">
					<div className="flex flex-col xl:flex-row w-full gap-[60px]">
						{/* TabsList (left side) */}
						<div className="xl:w-1/4">
							<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
								<TabsTrigger value="experience">Experience</TabsTrigger>
								<TabsTrigger value="education">Education</TabsTrigger>
								<TabsTrigger value="skills">Skills</TabsTrigger>
								<TabsTrigger value="about">About me</TabsTrigger>
							</TabsList>
						</div>

						{/* TabsContent (right side) */}
						<div className="xl:w-3/4 min-h-[70vh]">
							<TabsContent value="experience" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl">{experience.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{experience.description}
									</p>
									<ScrollArea className="h-[400px]">
										<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
											{experience.items.map((item, index) => {
												return (
													<li
														key={index}
														className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
													>
														<span className="text-accent">{item.duration}</span>
														<p className="py-3 text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
															{item.position}
														</p>
														<div className="flex items-center gap-3">
															{/* dot */}
															<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
															<p className="text-white/60">{item.company}</p>
														</div>
													</li>
												);
											})}
										</ul>
									</ScrollArea>
								</div>
							</TabsContent>
							<TabsContent value="education" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl">{education.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{education.description}
									</p>
								</div>
							</TabsContent>
							<TabsContent value="skills" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
							</TabsContent>
							<TabsContent value="about" className="w-full">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl">{about.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{about.description}
									</p>
								</div>
							</TabsContent>
						</div>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
