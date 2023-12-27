"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';

export default function Level(){
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);

    return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>
			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="reading" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      				LEVELS
    				</div>
			</div>
		
		<div className="levelcont">
			<div className="levelbtn">
                <Link href="quiz" >
				<button onClick={play135} className="font-kafeine">EASY</button>
				</Link>
            </div>	

            <div className="levelbtn2">
                <Link href="normalquiz">
				<button onClick={play135} className="font-kafeine">ALL OUT</button>
				</Link>
            </div>

			<div className="levelbtn3">
                <Link href="hardquiz">
				<button onClick={play135} className="font-kafeine ">HARD</button>
				</Link>
            </div>
			</div>
			<div className="sidenote">
				<p className="note">NOTE: The ALL OUT level has 2 extra stages, it is up to you if you want to answer it. </p>
				</div>
		</div>
	</main>
);
}
