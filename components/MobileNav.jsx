"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

const links = [
	{ name: "home", path: "/" },
	{ name: "resume", path: "/resume" },
	{ name: "project", path: "/project" },
	{ name: "services", path: "/services" },
	{ name: "contact", path: "/contact" },
];

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<Sheet>
			<SheetTrigger className="flex justify-center items-center">
				<CiMenuFries className="text-[32px] text-accent" />
			</SheetTrigger>
			<SheetContent className="flex flex-col">
				{/* logo */}
				<div className="mt-32 mb-40 text-center text-2xl">
					<Link href="/">
						<h1 className="text-4xl font-semibold">
							Wiriya<span className="text-accent">.</span>
						</h1>
					</Link>
				</div>
				{/* nav links */}
				<nav className="flex flex-col justify-center items-center gap-6">
					{links.map((link, index) => (
						<Link
							key={index}
							href={link.path}
							className={`${
								pathname === link.path ? "text-accent" : "text-white"
							} text-2xl capitalize`}
						>
							{link.name}
						</Link>
					))}
				</nav>
			</SheetContent>
		</Sheet>
	);
};

export default MobileNav;
