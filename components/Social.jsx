import Link from "next/link";

import { FaGithub, FaLinkedin } from "react-icons/fa";

const socials = [
	{ icon: <FaGithub />, path: "https://github.com/mezealot24" },
	{
		icon: <FaLinkedin />,
		path: "https://www.linkedin.com/in/wiriya-onnompan-b7673a305/",
	},
];

const Social = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link
						key={index}
						href={item.path}
						target="_blank"
						rel="noopener noreferrer"
						className={iconStyles}
					>
						{item.icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Social;
