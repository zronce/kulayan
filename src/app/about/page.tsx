"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import Prof1 from "@/shared/images/prof1.jpg";
import Prof2 from "@/shared/images/prof2.jpg";
import Prof3 from "@/shared/images/prof3.jpg";
import Prof5 from "@/shared/images/prof5.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

export default function About() {
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
    return (
        <main className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
        >
            <div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link onClick={play135} href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      				ABOUT THE TEAM
    				</div>
			</div>

	
			<section className="team">
		<div className="center">
			<h1 className="teamtxt">Our Team</h1>
		</div>

		<div className="team-content">
			<div className="box">
			<Image alt="images" src={Prof1}></Image>
				<h3>Adrian Kyle Batac</h3>
				<h5>Developer</h5>
				<div className="icons">
					<a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', margin: '10px 10px 0px 0px' }}/></a>
					<a href="mailto:batac.ak.bscs@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px',margin: '10px 10px 0px 10px' }}/></a>
				</div>
			</div>

			<div className="box">
			<Image alt="images" src={Prof2}></Image>
				<h3>Kurt Cobain Ruiz</h3>
				<h5>Documenter</h5>
				<div className="icons">
					
					<a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', margin: '10px 10px 0px 0px' }}/></a>
					<a href="mailto:ruizkc.bscs@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px',margin: '10px 10px 0px 10px' }}/></a>
				</div>
			</div>

			<div className="box">
			<Image alt="images" src={Prof3}></Image>
				<h3>Francis King Buac</h3>
				<h5>Documenter</h5>
				<div className="icons">
					
					<a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', margin: '10px 10px 0px 0px' }}/></a>
					<a href="mailto:buac.fk.bscs@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px',margin: '10px 10px 0px 10px' }}/></a>
				</div>
			</div>

			<div className="box">
			<Image alt="images" src={Prof5}></Image>
				<h3>John Lloyd Magpulong</h3>
				<h5>Documenter</h5>
				<div className="icons">
					<a href="" target="_blank"><FontAwesomeIcon icon={faFacebook} style={{ fontSize: '30px', margin: '10px 10px 0px 0px' }}/></a>
					<a href="mailto:magpulong.jl.bscs@gmail.com"><FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '30px',margin: '10px 10px 0px 10px' }}/></a>
				</div>
			</div>

		</div>
	</section>
			<br></br>

        </div>
    </main>
	);   
}