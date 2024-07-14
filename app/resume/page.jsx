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
			className="min-h-[80vh] flex items-center justify-center0 py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flew-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto lx:mx-0 gap-6">
						<TabsTrigger value="experience">Experience</TabsTrigger>
						<TabsTrigger value="education">Education</TabsTrigger>
						<TabsTrigger value="skills">Skills</TabsTrigger>
						<TabsTrigger value="about">About me</TabsTrigger>
					</TabsList>
					{/* content */}
					<div className="min-h-[70vh] w-full">
						<TabsContent value="experience" className="w-full">
							experience
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
