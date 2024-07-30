"use client";

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadButton = () => {
	const handleDownload = () => {
		window.open(
			"https://drive.google.com/file/d/1aC74VgY9x1eDhwM15jXvdmUGyizoqG-i/view?usp=drive_link",
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
