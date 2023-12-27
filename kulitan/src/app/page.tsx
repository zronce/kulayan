"use client";
import Image from "next/image";
import Card from "@/components/templates/Card"; 
import KapampanganFont from "@/shared/images/kapampangan-font.png";
import KapampanganReading from "@/shared/images/reading.png";
import KapampanganWriting from "@/shared/images/writing.png";
import DetectLogo from "@/shared/images/camera.jpg";
import useSound from 'use-sound';

export default function Home() {
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
	return (
		<main className="min-h-screen min-w-screen flex flex-col items-start justify-start p-9 max-miniPhone:p-5 gap-12">
			<div className="w-full">
					<p className="pagetitle">KULAYAN</p>
					<span className="subtitle">laragamap</span>
					
			</div>
			<div className=" w-full flex flex-col gap-5">
				<div onClick={play135} className="card1">
				<Card 
					link="detect"
					buttonTitle={
						<>
							<span className="font-kafeine">Glyphs Detection</span> 
						</>
					}
					
				>
					<Image
						src={DetectLogo}
						alt="camera"
						width={120}
						height={200}
					/>
				</Card>
				</div>

				<div onClick={play135} className="card1">
				<Card
					link="transcribe"
					buttonTitle={
						<>
							<span className="font-kafeine">Transcribe</span> 
						</>
					}
				>
					<Image
						src={KapampanganFont}
						alt="kapamapangan font"
						width={60}
						height={100}
					/>
				</Card>
				</div>

				<div onClick={play135} className="card1">
				<Card 
					link="reading"
					buttonTitle={
						<>
							<span className="font-kafeine">Reading</span> 
						</>
					}
				>
					<Image
						src={KapampanganReading}
						alt="reading" 
						className="py-5"
						width={300}
						height={300}
					/>
				</Card>
				</div>

				<div onClick={play135} className="card1">
				<Card
					link="writing"
					buttonTitle={
						<>
							<span className="font-kafeine">Writing</span> 
						</>
					}
				>
					<Image
						src={KapampanganWriting}
						alt="writing"
						className="py-2"
						width={120}
						height={120}
					/>
				</Card>
				</div>
			</div>
			<footer className="w-full flex items-center justify-center">
				<span className="font-kulitan text-dark opacity-100 font-bold text-[18px]">
					ka pang pang an
				</span>
			</footer>
		</main>
	);
}
