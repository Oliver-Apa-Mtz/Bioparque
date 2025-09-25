"use client";

import { useState } from "react";

const Accordion = ({ items }: any) => {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	const toggle = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className="w-full max-w-[1320px] px-[20px] mx-auto divide-y divide-grayLight">
			{items.map((item: any, index: any) => (
				<div key={index} className="py-4">
					<button
						onClick={() => toggle(index)}
						className="w-full flex justify-between items-center text-left focus:outline-none"
					>
						<span className="montserrat-300 text-[33px] leading-[42px] text-principal">
							{item.title}
						</span>
						{openIndex === index ? (
							<div className="line"></div>
						) : (
							<div className="more"></div>
						)}
					</button>

					{openIndex === index && (
						<div className="mt-2 montserrat-300 text-[18px] text-principal py-8">
							{item.content}
						</div>
					)}
				</div>
			))}
		</div>
	);
}

export default Accordion;
