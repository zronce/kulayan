"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import History from "@/shared/images/history_kulitan.png";
import History2 from "@/shared/images/japanese_map.jpeg";
import History3 from "@/shared/images/map_of_pampanga.jpeg";
import History4 from "@/shared/images/luzon_jar.jpeg";
import History5 from "@/shared/images/tokiko.jpeg";


export default function Learn() {
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
    return (
        <main className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
        >
             <div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      				LEARN MORE
    				</div>	
			</div>
			

<div className="btnbg">
		<Link onClick={play135} className="btn-guide" href="guide">Writing Guide</Link>
</div>



	<div className="learn-content">
		<h1 className="titlehistory">History</h1>
	</div>
	
		<div className="contentsbg">
			<Image className="historypng" src={History} alt="history"></Image>
			<p className="htrcontents">Long before the idea of a Filipino nation was even conceived, the Kapampangan, Butuanon, Tausug. Magindanau, Hiligaynon, Sugbuanon, Waray, Iloko, Sambal and many other ethnolinguistic groups within the archipelago, already existed as bangså or nations in their own right. Many of these nations formed their own states and principalities centuries before the Spaniards created the Philippines in the late 16th century. The oldest of these states include Butuan (蒲 端) which existed on Chinese records as early as 1001 C.E., Sulu (蘇祿) in 1368 C.E. and the Kingdom of Luzon (呂宋国) in 1373 C.E. These three sovereign states were ruled by kings (國王) and not by chieftains according to Chinese historical records (Zhang, 1617; Scott 1989; Wang 1989; Wade, 2005 and Wang, 2008).</p>
			<br></br>
			<Image className="historypng" src={History2} alt="history2"></Image>
			<br></br>
			<p className="htrcontents">Figure 1. The Kingdom of Luzon (呂宋國) as it appears on a Japanese map during the Ming dynasty (1368 to 1644). From &#34;A look at history based on Ming dynasty maps&#34; (從大明坤輿萬國 圖看歷史) posted by zhaijia1987 in Baidu Tieba (百度贴吧) on 2010 November 11.</p>
			<br></br>
			<Image className="historypng" src={History3} alt="history3"></Image>
			<br></br>
			<p className="htrcontents">Figure 2. Map of Pampanga from Pedro Murillo Velarde&#39;s 1744 Mapa de las Islas Filipinas. The Pampanga Delta Region had been inaccurately assigned to Bulacan.</p>
			<br></br>
			<p className="htrcontents">The Kapampangan nation was once a part of the Kingdom of Luzon [Fig. 1]. They were one of the Luçoes, &#39;people of Luzon, encountered by Portuguese explorers during their initial ventures into Southeast Asia in the early 16th century (Scott, 1994). The Kapampangan homeland, Indüng Kapampangan (Pampanga), became the first province carved out of the Kingdom of Luzon when the Spaniards conquered it in 1571 C.E. (Cavada, 1876 and Henson, 1965). Indũng Kapampangan&#39;s political boundaries once encompassed a large portion of the central plains of Luzon, stretching from the eastern coastline of the Bataan Peninsula in the Southwest, all the way to Casiguran Bay in the Northeast (Murillo Velarde, 1744: San Antonio, 1744; Beyer, 1918; Henson, 1965; Larkin, 1972 and Tayag, 1985) [Fig 2.]. It was said to be the most populated region in Luzon at that time, with an established agricultural base that can support a huge population (Loarca, 1583; San Agustin, 1699; Mallat, 1846; B&R, 1905; Henson, 1965 and Larkin, 1972). It also has a highly advanced material culture where Chinese porcelain is used extensively and where firearms and bronze cannons were manufactured (Morga, 1609: Mas, 1843; B&R, 1905; Beyer, 1947; Larkin, 1972; Santiago, 1990b and Dizon, 1999). The old capital of the Kingdom of Luzon, Tondo(東都: &#34;Eastern Capital&#34;), once spoke one language with the rest of Indüng Kapampangan that is different from the language spoken in Manila (Loarca, 1583; B&R, 1905 and Tayag, 1985). Jose Villa Panganiban, the former commissioner of the Institute of National Language, once thought the Pasig River that divides Tondo and Manila to be the same dividing line between Kapampangan and Tagalog (Tayag, 1985). The descendants of the old rulers of the Kingdom of Luzon, namely those of Salalilä, Lakandúla and Suliman, can still be found all over Indüng Kapampangan (Beyer, 1918: Beyer, 1943; Henson 1965 and Santiago, 1990a).</p>
			<br></br>
			<Image className="historypng" src={History4} alt="history4"></Image>
			<br></br>
			<p className="htrcontents">Figure 3. A typical brown-glazed four-eared Luzon jar (呂宋壺【褐釉四耳壺】) exported to Japan by the Kingdom of Luzon in the mid-16th century. Photo courtesy of Hikone Castle Museum(彦根城博物館) Newsletter, Vol. 13, 1991 May 1. Figure 3. A typical brown-glazed four-eared Luzon jar (呂宋壷[褐釉 四耳壺]) exported to Japan by the Kingdom of Luzon in the mid-16th century. Photo courtesy of Hikone Castle Museum (彦根城博物館) Newsletter, Vol. 13, 1991 May 1.</p>
			<br></br>
			<Image className="historypng" src={History5} alt="history5"></Image>
			<br></br>
			<p className="htrcontents">Figure 4. A page in Faye-Cooper Cole&#39;s English translation of Tauchi Yonesaburo&#39;s Tokiko (陶器考) showing the &#39;national writing of Luzon (呂宋 國字) in comparison to Philippine scripts.</p>
			<br></br>
			<p className="htrcontents">If the Kapampangan nation made up the bulk of the population of the Kingdom of Luzon, then perhaps the oldest evidence of Kapampangan writing can be found in the jars (呂宋壺) exported to Japan prior to the arrival of the Spaniards in the 16th century C.E. [Fig. 3]. In his book Tokiko (陶器考) or &#34;Investigations of Pottery&#34; published in 1853 C.E., Tauchi Yonesaburo (田内米三郎) presents several jars marked with the ruson koku ji (呂宋國字) or the &#34;writing of the Kingdom of Luzon&#34; (Tauchi [田内], 1853 and Cole, 1912). The marks that looked like the Chinese character ting (丁) found in several Luzon jars might have been the indigenous Kapampangan script la (Y), the first syllable in the name &#34;Luzon&#34; [Fig. 4].</p>
			<br></br>
			<p className="htrcontents">Writing has always been a testament to civilization among the great nations. The Chinese write &#39;civilization&#39; as wenming (文明) or enlightenment through writing&#39;, combining the characters wén (文) &#39;writing&#39; and ming (明) brightness&#39;. Sadly, the Kapampangan nation, a once proud civilization with a long established literature has now become a tribe of confused barbarians. Although many Kapampangans can read and write fluently in foreign languages, namely Filipino and English, they are strangely illiterate in their own native Kapampangan language.</p>
			<br></br>
			<p className="htrcontents">The Kapampangan language currently does not possess a standard written orthography. The dispute on which orthography to use when writing the Kapampangan language in the Latin Script - whether to retain the old Spanish style orthography a.k.a. Súlat Bacúlud or implement the indigenized Súlat Wawa which replaced the Q and C with the letter K, remains unsettled. This unending battle on orthography has taken its toll on the development of Kapampangan literature and the literacy of the Kapampangan speaking majority (Pangilinan, 2006 and 2009b). No written masterpiece that could rival the works of the Kapampangan literary giants of the late 19th and early 20th centuries has yet been written. The few poems that earned a number of contemporary poets the title of Poet Laureate no longer have the same impact that would immortalize them in the people&#39;s collective memory. Worse, the Kapampangan language is now even showing signs of decay and endangerment (Del Corro, 2000 and Pangilinan, 2009b).</p>
			<br></br>
			<p className="htrcontents">While the old literary elite continue to bicker endlessly which Latinized attitudinal procedure to follow, a small yet growing number of Kapampangan youth have become frustrated and disillusioned with the current state of Kapampangan language and culture. They see the old Spanish style orthography that still uses the letters C & Q as a perpetuation of Spain&#39;s hold into the intellectual expressions of the Kapampangan people. The new orthography that has replaced the letters C and Q with K is also viewed to be foreign since they identify it with the Tagalog w. Instead of being forced to choose which orthography to use in writing Kapampangan, they chose to forego the use of the Latin script altogether. They decided instead to go back to writing in the indigenous Súlat Kapampangan or Kulitan.</p>
			<br></br>
			<div className="learn-content">
			<h1 className="titlehistory">References</h1>
			</div>
		
		</div>
        </div>

        </main>
    );
    
}