/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import useSound from 'use-sound';

export default function Writing() {
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
	return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link onClick={play135} href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      PAMANIULAT
    </div>
				</div>
			</div>
		</main>
	);
}

