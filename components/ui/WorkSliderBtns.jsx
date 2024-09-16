"use client";

import React from "react";
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

const WorkSliderBtns = ({ containerStyles, btnStyles, swiperRef }) => {
	return (
		<div className={`${containerStyles}`}>
			<button
				className={`${btnStyles}`}
				onClick={() => swiperRef.current?.slidePrev()}
			>
				<PiCaretLeftBold />
			</button>
			<button
				className={`${btnStyles}`}
				onClick={() => swiperRef.current?.slideNext()}
			>
				<PiCaretRightBold />
			</button>
		</div>
	);
};

export default WorkSliderBtns;
