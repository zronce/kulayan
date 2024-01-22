import React from "react";

export interface IconName {
	className?: string;
	height?: string;
	width?: string;
	color?: string;
	isHovered: boolean;
}

export const DeleteAll: React.FC<IconName> = ({
	className = "",
	height = "33",
	width = "33",
	isHovered,
	color = isHovered ? "#FFFFFF" : "#111827",
}): JSX.Element => {
	return (
		<svg
			className={className}
			width={width}
			height={height}
			viewBox="0 0 33 33"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M4.125 8.25H6.875H28.875"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M26.125 8.25V27.5C26.125 28.2293 25.8353 28.9288 25.3195 29.4445C24.8038 29.9603 24.1043 30.25 23.375 30.25H9.625C8.89565 30.25 8.19618 29.9603 7.68046 29.4445C7.16473 28.9288 6.875 28.2293 6.875 27.5V8.25M11 8.25V5.5C11 4.77065 11.2897 4.07118 11.8055 3.55546C12.3212 3.03973 13.0207 2.75 13.75 2.75H19.25C19.9793 2.75 20.6788 3.03973 21.1945 3.55546C21.7103 4.07118 22 4.77065 22 5.5V8.25"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M13.75 15.125V23.375"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
			<path
				d="M19.25 15.125V23.375"
				stroke={color}
				strokeWidth="2"
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
};
