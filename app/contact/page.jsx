"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { motion } from "framer-motion";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+66) 92 328 7570 ",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "wiriya.on@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Bangplee,Samut-prakan 10540",
	},
];

const Contact = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:h-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text4xl text-accent"> Let's work together </h3>
							<p className="text-white/60">
								Lorem, ipsum dolor sit amet consectetur adipisicing elit.
								Accusantium.
							</p>
							{/* input */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="firstname" placeholder="Firstname" />
								<Input type="lastname" placeholder="Lastname" />
								<Input type="email" placeholder="Email" />
								<Input type="phone" placeholder="Phone number" />
							</div>
							{/* select */}
							<Select>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
									<SelectContent>
										<SelectGroup>
											<SelectLabel>Select a Service</SelectLabel>
											<SelectItem value="est">Web Development</SelectItem>
											<SelectItem value="cst">UX/UI Designer</SelectItem>
											<SelectItem value="lst">Logo</SelectItem>
											<SelectItem value="mst">Game Developer</SelectItem>
										</SelectGroup>
									</SelectContent>
								</SelectTrigger>
							</Select>
						</form>
					</div>
					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						info
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
