"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
	const handleDownload = () => {
		window.open(
			"https://drive.google.com/uc?export=download&id=1O0nGn6nW7gEC0kissk5sCMZpT9td_UuA",
			"_blank"
		);
	};

	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={handleDownload}
		>
			<span>Download CV</span>
			<FiDownload className="text-xl" />
		</Button>
	);
};

export default DownloadButton;
