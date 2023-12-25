"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';

export default function Level(){
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
					<p className="font-kulitan text-[20px] z-10">pa g su la t</p>
				</div>
		
		<div className="levelcont">
			<div className="levelbtn">
                <Link href="quiz" >
				<button className="font-kafeine">EASY</button>
				</Link>
            </div>	

            <div className="levelbtn2">
                <Link href="normalquiz">
				<button className="font-kafeine">MID</button>
				</Link>
            </div>

			<div className="levelbtn3">
                <Link href="hardquiz">
				<button className="font-kafeine ">HARD</button>
				</Link>
            </div>
			</div>
		</div>
	</main>
);
}
