"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
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
		description: "(+66) 92 328 7570",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "wiriya.on@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Bangplee, Samut-prakan 10540",
	},
];

const Contact = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		service: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState({
		success: false,
		message: "",
	});

	const handleInputChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleServiceChange = (value) => {
		setFormData((prev) => ({
			...prev,
			service: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setIsSubmitting(true);
		setSubmitStatus({ success: false, message: "" });

		try {
			const result = await emailjs.send(
				"service_afxnb1o",
				"template_6izagbg",
				{
					from_name: `${formData.firstName} ${formData.lastName}`,
					from_email: formData.email,
					phone_number: formData.phone,
					service_requested: formData.service,
					message: formData.message,
					to_name: "Wiriya",
				},
				"gXwzgYe7BIyW0Z-x4"
			);

			if (result.status === 200) {
				setSubmitStatus({
					success: true,
					message: "Message sent successfully! I will get back to you soon.",
				});

				// Clear form
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					service: "",
					message: "",
				});
			} else {
				setSubmitStatus({
					success: false,
					message: `Failed to send message: ${result.text}`,
				});
			}
		} catch (error) {
			setSubmitStatus({
				success: false,
				message: "Failed to send message. Please try again later.",
			});
		} finally {
			setIsSubmitting(false);
		}
	};

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
				<div className="flex flex-col xl:flex-row gap-8">
					{/* form */}
					<div className="xl:h-[54%] order-2 xl:order-none">
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
						>
							<h3 className="text-4xl text-accent">Let's work together</h3>
							<p className="text-white/60">
								"Let's jam on code. Full-stack dev with a guitar riff twist."
							</p>

							{/* Status message */}
							{submitStatus.message && (
								<div
									className={`p-4 rounded ${
										submitStatus.success
											? "bg-green-600/20 text-green-400"
											: "bg-red-600/20 text-red-400"
									}`}
								>
									{submitStatus.message}
								</div>
							)}

							{/* input grid */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input
									type="text"
									name="firstName"
									placeholder="Firstname"
									value={formData.firstName}
									onChange={handleInputChange}
									required
								/>
								<Input
									type="text"
									name="lastName"
									placeholder="Lastname"
									value={formData.lastName}
									onChange={handleInputChange}
									required
								/>
								<Input
									type="email"
									name="email"
									placeholder="Email"
									value={formData.email}
									onChange={handleInputChange}
									required
								/>
								<Input
									type="tel"
									name="phone"
									placeholder="Phone number"
									value={formData.phone}
									onChange={handleInputChange}
									required
								/>
							</div>

							{/* select */}
							<Select
								name="service"
								onValueChange={handleServiceChange}
								value={formData.service}
								required
							>
								<SelectTrigger className="w-full">
									<SelectValue placeholder="Select a service" />
								</SelectTrigger>
								<SelectContent>
									<SelectGroup>
										<SelectLabel>Select a Service</SelectLabel>
										<SelectItem value="web">Web Development</SelectItem>
										<SelectItem value="uxui">UX/UI Designer</SelectItem>
										<SelectItem value="logo">Logo</SelectItem>
										<SelectItem value="game">Game Developer</SelectItem>
									</SelectGroup>
								</SelectContent>
							</Select>

							{/* textarea */}
							<Textarea
								className="h-[200px]"
								name="message"
								placeholder="Type your message here."
								value={formData.message}
								onChange={handleInputChange}
								required
							/>

							{/* submit button */}
							<Button
								type="submit"
								size="md"
								className="max-w-40"
								disabled={isSubmitting}
							>
								{isSubmitting ? "Sending..." : "Send message"}
							</Button>
						</form>
					</div>

					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => (
								<li key={index} className="flex items-center gap-6">
									<div className="text-accent">{item.icon}</div>
									<div>
										<p className="text-accent">{item.title}</p>
										<h3>{item.description}</h3>
									</div>
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
