"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import useSound from 'use-sound';
import History6 from "@/shared/images/kulitan_direction_poem.png";
import History7 from "@/shared/images/pamagkulit.png";
import History8 from "@/shared/images/indu_at_anak.png";
import History9 from "@/shared/images/kulitan_table.jpeg";
import History10 from "@/shared/images/kulit_a_magkas.png";
import History11 from "@/shared/images/kulit_a_magkas_table.png";
import History12 from "@/shared/images/kulit_a_sisiuala.png";
import History13 from "@/shared/images/kulit_a_sisiuala_table.png";
import History14 from "@/shared/images/anak_sulat.png";
import History15 from "@/shared/images/anak_sulat_table.png";
import History16 from "@/shared/images/indu_anak_table.jpeg";
import History17 from "@/shared/images/pamanganak.png";
import History18 from "@/shared/images/anak_sulat_diagram_1.png";
import History19 from "@/shared/images/pamanganak.png";
import History20 from "@/shared/images/anak_sulat_diagram_2.png";
import History21 from "@/shared/images/anak_a_i_u.png";
import History22 from "@/shared/images/anak_sulat_i_a_table.png";
import History23 from "@/shared/images/anak_a_i_u.png";
import History24 from "@/shared/images/anak_sulat_u_a_table.png";
import History25 from "@/shared/images/pamanganak.png";
import History26 from "@/shared/images/anak_sulat_diagram_3.png";
import History27 from "@/shared/images/pamanganak.png";
import History28 from "@/shared/images/anak_sulat_diagram_4.png";
import History29 from "@/shared/images/kambal_siuala.png";
import History30 from "@/shared/images/kambal_siuala_examples.png";
import History31 from "@/shared/images/kambal_siuala.png";
import History32 from "@/shared/images/kambal_siuala_diagram_1.png";
import History33 from "@/shared/images/kambal_siuala.png";
import History34 from "@/shared/images/kambal_siuala_diagram_2.png";
import History35 from "@/shared/images/kambal_siuala_diagram_3.png";
import History36 from "@/shared/images/pamakamate_siuala.png";
import History37 from "@/shared/images/terminating_vowel_table.png";


export default function Guide() {
	const soundFile135 = '/audio/click2.mp3';
	const [play135] = useSound(soundFile135);
    return (
        <main className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
        >
            <div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="./learn" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div id="top" className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      				WRITING GUIDE
    				</div>
			</div>

			<div className="learn-contents">
			<span className="spantxt4">Written by Siuálâ Ding Meángûbié. <Link className="linked" href="https://siuala.com/" target="_blank">More info.</Link></span>
			</div>

<div className="gridbtn" onClick={play135}>
<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 512 512" className="icon">
        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
      </svg>

  <div className="dropdown-content" onClick={play135}>
    <a onClick={play135} href="#wh1">Writing Direction</a>
    <a onClick={play135} href="#wh2">Mother and Child</a>
    <a onClick={play135} href="#wh3">The Consonantal Characters</a>
	<a onClick={play135} href="#wh4">The Vowel Characters</a>
	<a onClick={play135} href="#wh5">The Offspring Characters</a>
	<a onClick={play135}href="#wh6">Changing the Default Vowel sound of &#39;A&#39; to &#39;I&#39;</a>
	<a onClick={play135}href="#wh7">Changing the Default Vowel sound of &#39;A&#39; to &#39;U&#39;</a>
	<a onClick={play135}href="#wh8">Altering the Vowel Glyph I as the consonant Y</a>
	<a onClick={play135}href="#wh9">Altering the Vowel Glyph U as the consonant W</a>
	<a onClick={play135}href="#wh10">Changing the Default Vowel sound &#39;A&#39; to &#39;E&#39;</a>
	<a onClick={play135}href="#wh11">Changing the Default Vowel sound &#39;A&#39; to &#39;O&#39;</a>
	<a onClick={play135}href="#wh12">Stress and Accents in Kulitan</a>
	<a onClick={play135}href="#wh13">Lengthening the inherent vowel &#39;A&#39;</a>
	<a onClick={play135}href="#wh14">Lengthening the offspring vowel sound &#39;I&#39;</a>
	<a onClick={play135}href="#wh15">Lengthening the offspring vowel sound &#39;U&#39;</a>
	<a onClick={play135}href="#wh16">Terminating the default vowel sound</a>
  </div>
</div>


			

		<div className="contentsbg">
		<div className="learn-content">
			<h1 className="titlehistory" id="wh1">Writing Direction</h1>
		</div>
		<br></br>
			<Image className="historypng" src={History6} alt="history6"></Image>
			<br></br>
			<p className="htrcontents">Figure 1. The Kapampangan verse that explains why Kulitan is written top to bottom, right to left.</p>
			<br></br>
				<span className="spantxt">Anting Aldó síslag banua, Kéti súlip áslagan na. Sisilang ya king Alaya, King Pinatubû lulbug ya.</span>
				<br></br>
				<span className="spantxt">Like the Sun that shines from heaven, Its radiance reaches down on earth. Rising from Bunduk Aláya, It descends on Mount Pinatubo.</span>
			<br></br>
			<p className="htrcontents">The first two lines refer to Kulitan being written vertically top to bottom. The rays of the sun spreads down to earth from the heavens, hence top to bottom. The last two lines refer to Kulitan being written left to right. When facing the North Star or Tálâng Úgut, Bunduk Aláya on the East sits on your right hand while Bunduk Pinatubû on the West sits on your left, thus explaining the writing direction from right to left.</p>
			<br></br>
			<Image className="historypng" src={History7} alt="history7"></Image>
			<br></br>
			<span className="spantxt2">Pámagkulit</span>
			<span className="spantxt3">Writing Rules</span>
			</div>

	

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh2">Mother and Child</h1>
			</div>
			<br></br>
					<Image className="historypng" src={History8} alt="history8"></Image>
					<span className="spantxt2">Indû at Anak</span>
					<span className="spantxt3">Mother and Child</span>
				<br></br>
					<p className="htrcontents">Kulitan is basically made up of Indûng Súlat or the &#34;mother&#34; characters and the Anak Súlat or the &#34;offspring&#34; characters. The Indûng Súlat are the base characters with the unaltered inherent vowel sounds. They are the building blocks of Súlat Kapampangan. Indúng Súlat gives birth to Anak Súlat or &#34;offspring&#34; characters whenever their inherent vowel sound has been altered by a ligature or a diacritical mark.</p>
					<br></br>
					<p className="htrcontents">The Siuála or vowels in Súlat Kapampangan are usually written as garlit or diacritical marks placed above or below an individual Indûng Súlat or &#34;mother&#34; character. Ligatures are also sometimes used to further lengthen these vowel sounds. A glyph with a diacritical mark or ligature attached to it is an Anak Súlat or offspring character.</p>
					<br></br>
					<p className="htrcontents">The Indung Súlat characters are divided into two groups: the consonantal glyphs or Kulit a Mágkas or Kulit a Makikatni (Hilario, 1962) and the independent vowel glyphs or Kulit a Siuála. The Kulit a Siuála or vowel glyphs are not the same as the garlit or diacritical marks.</p>
					<br></br>
					<p className="htrcontents">The recital order of the indung Súlat or basic mother characters are A, I, U, E, O, GA, KA, NGA, TA, DA, NA, LA, SA, MA, PA, BA.</p>
					<br></br>
					<Image className="historypng" src={History9} alt="history9"></Image>
				</div>

		
			
			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh3">The Consonantal Characters</h1>
			</div>
			<br></br>
			<Image className="historypng" src={History10} alt="history10"></Image>
			<span className="spantxt2">Indúng Súlat: Kulit a Mágkas</span>
					<span className="spantxt3">The Consonantal Characters</span>
			<br></br>
			<p className="htrcontents">There are eleven Kulit a Mágkas or consonantal glyphs in Kulitan, the recital order of which are GA, KA, NGA, TA, DA, NA, LA, SA, MA, PA, BA. They are however arranged and usually grouped together as follows [Table 1]:</p>
			<br></br>
			<Image className="historypng" src={History11} alt="history11"></Image>
			<br></br>
			<p className="htrcontents">Table 1. The kulit a mágkas or Kulitan consonantal characters in their natural arrangement, read from the right column going to the left.</p>
			<br></br>
			<span className="spantxt3">a. Kulit ngágkas king akmúlan (velar): GA (<span className="font-kulitan">ga</span>) and KA (<span className="font-kulitan">ka</span>).</span>
			<span className="spantxt3">b. Kulit ngágkas king árung (nasal): NGA (<span className="font-kulitan">nga</span>).</span>
			<span className="spantxt3">c. Kulit ngágkas king ipan (dental): NTAGA (<span className="font-kulitan">ta</span>) and NA (<span className="font-kulitan">na</span>).</span>
			<span className="spantxt3">d. Kulit ngágkas king ipan a déla king díla (alveolar): DA/RA (<span className="font-kulitan">da</span>) and LA (<span className="font-kulitan">la</span>).</span>
			<span className="spantxt3">e. Kulit ngágkas pasalitsit king ipan (fricative): SA (<span className="font-kulitan">sa</span>).</span>
			<span className="spantxt3">f. Kulit ngágkas king läbi (bilabial): MA (<span className="font-kulitan">ma</span>) and PA (<span className="font-kulitan">pa</span>).</span>
			<span className="spantxt3">g. Kulit ngágkas patiúp king labi (aspirated bilabial): BA (<span className="font-kulitan">ba</span>).</span>
			<br></br>
			<p className="htrcontents">The consonantal syllables WA and YA are represented by the Kulit a Siuálâ or vowel glyphs U (<span className="font-kulitan">u</span>) and I (<span className="font-kulitan">i</span>) respectively (Benavente, 1699 and Hilario, 1962). Like their consonant counterparts in the other scripts of the archipelago, these Kulit a Siuála can be altered by placing a garlit or diacritical mark above or below the glyph to form &#34;offspring&#34; characters or Anak Súlat. This will be explained further in the following sections of this chapter.</p>
			<br></br>
			<p className="htrcontents">While all other glyphs in the other indigenous scripts within the archipelago resemble one another, Kulitan has also developed unique and distinct character shapes that are different from Baybayin, particularly the Kulit Magkas or consonantal characters Ga (<span className="font-kulitan">ga</span>), Ta (<span className="font-kulitan">ta</span>). Sa (<span className="font-kulitan">sa</span>) that are consistent in appearance in the various cuadernos and abecedarios that have appeared during the Spanish era (Benavente, 1699; Mas, 1842 and Marcilla, 1895) and the modern era (Hilario, 1962, Henson, 1965 and Pangilinan, 1995) and the plain vertical line for LA found in seve century Kapampangan signatures (Miller, 2 2012b).</p>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh4">The Vowel Characters</h1>
			</div><br></br>
			<Image className="historypng" src={History12} alt="history12"></Image>
			<span className="spantxt2">Indúng Súlat: Kulit a Sisiuálâ</span>
					<span className="spantxt3">The Vowel Characters</span>
			<br></br>
			<p className="htrcontents">For vowels as Indúng Súlat or independent syllable glyphs, Kulitan has three basic Kulit a Siuálâ or vowel characters. These are A (<span className="font-kulitan">a</span>), I(<span className="font-kulitan">i</span>), and U (<span className="font-kulitan">u</span>).bábo (above), sabó (soup or justice) and ulimó (tiger) all used to be pronounced as bábau, sabáu and ulimou. Thus the vowel O is still written as AU (oo) in Kulitan.</p>
			<br></br>
			<Image className="historypng" src={History13} alt="history13"></Image>
			<br></br>
			<p className="htrcontents">Table 2. The kulit a siuálâ or Kulitan vowel glyphs. </p>
			<span className="spantxt3">The Vowel Characters</span>
			<br></br>
			<p className="htrcontents">However, the Kapampangan language has two monophthongized diphthongs (Gonzales, 1972). These became the vowels E and O and are represented by the &#34;aduang kulit a máging metung mũ&#34; (Hilario, 1962) or Miyasáuang Kulit or &#34;married&#34; or &#34;coupled&#34; vowels E (<span className="font-kulitan">ae</span>) and 0 (<span className="font-kulitan">au</span>) [Table 2]. Unlike other Philippine languages, the Kapampangan language does not interchange the vowels I and E since Eisa monophthongized diphthong. Kapampangan words ending in the vowel E like bale (house), pale (unhusked rice) and sále (nest) used to be pronounced as balai, pálai and sálai. Thus the vowel E is still written as Al (<span className="font-kulitan">ai</span>) in Kulitan. Likewise, the Kapampangan language does not interchange the vowels U with O since 0 is also a monophthongized diphthong. The Kapampangan words that end in O like (bábo) in Kulitan. Likewise, the Kapampangan language does not interchange the vowels U with O since 0 is also a monophthongized diphthong. The Kapampangan words that end in O like</p>
			<br></br>
			<p className="htrcontents">The Kambal Siuala or &#34;twin&#34; vowels seen on Table 2 represent the lengthening of the vowel sounds and the glottal stops in the Kapampangan language. These are usually represented by the diacritical marks sokúrut (&#39;) and télaturung (^) when writing the Kapampangan language in the Latin script. W stand alone, the kambal siuálá or &#34;twin&#34; vowels are as follows:-A-/-A (<span className="font-kulitan">aa</span>)-I-/-I (<span className="font-kulitan">ii</span>) and -Ú-/-Ú (<span className="font-kulitan">uu</span>).</p>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh5">The Offspring Characters</h1>
			</div><br></br>
			<Image className="historypng" src={History14} alt="history14"></Image>
			<span className="spantxt2">Anak Súlat</span>
					<span className="spantxt3">The Offspring Character</span>
			<br></br>
			<p className="htrcontents">As mentioned earlier, all of the consonantal characters in Kulitan possess the inherent vowel sound &#39;A&#39;. On their own they are known as Indúng Súlat or mother characters. To alter their default vowel sounds and produce Anak Súlat or offspring characters, one simply places the garlit or diacritical marks above or below or place a ligature character next to the mother character. Again, the Anak Súlat or offspring characters are those characters with their inherent vowel sounds altered by the diacritical marks or ligatures [Table 3a & 3b].</p>
			<br></br>
			<Image className="historypng" src={History15} alt="history15"></Image>
			<br></br>
			<p className="htrcontents">Table 3a. The anak súlat or offspring characters of the indung súlat SA (<span className="font-kulitan">sa</span>).</p>
			<br></br>
			<Image className="historypng" src={History16} alt="history16"></Image>
			<br></br>
			<p className="htrcontents">Table 3b. Table of Indung Súlat and their Anak Súlat</p>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh6">Changing the Default Vowel sound of &#39;A&#39; to &#39;I&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History17} alt="history17"></Image>
			<span className="spantxt2">Pámanganak Ning Indûng Súlat King Siuâlang &#39;I&#39;</span>
					<span className="spantxt3">Changing the Default Vowel sound of &#39;A&#39; to &#39;I&#39;</span>
			<br></br>
			<p className="htrcontents">To change the default &#39;A&#39; sound of any of the consonantal characters to &#39;I&#39;, simply place a gorlit or diacritical mark above it. For example, Indûng Súlat KA (<span className="font-kulitan">ka</span>) becomes Anak Súlat KI (<span className="font-kulitan">ki</span>) by placing the garlit (&#39;) above it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History18} alt="history18"></Image>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh7">Changing the Default Vowel sound of &#39;A&#39; to &#39;U&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History19} alt="history19"></Image>
			<span className="spantxt2">Pámanganak Ning Indûng Sulat King Siuâlang &#39;U&#39;</span>
					<span className="spantxt3">Changing the Default Vowel sound of &#39;A&#39; to &#39;U&#39;</span>
			<br></br>
			<p className="htrcontents">To change the default &#39;A&#39; sound of any of the consonantal characters to &#39;U&#39;, simply place a gorlit or diacritical mark above it. For example, Indûng Súlat KA (<span className="font-kulitan">ka</span>) becomes Anak Súlat KU (<span className="font-kulitan">ku</span>) by placing the garlit (&#39;) above it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History20} alt="history20"></Image>
			</div>

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh8">Altering the Vowel Glyph I as the consonant Y</h1>
			</div><br></br>
			<Image className="historypng" src={History21} alt="history21"></Image>
			<span className="spantxt2">Ding Ának Ning Indûng Súlat A &#39;I&#39;(<span className="font-kulitan">i</span>)</span>
					<span className="spantxt3">Altering the Vowel Glyph I as the consonant Y</span>
			<br></br>
			<p className="htrcontents">One of the features that make Súlat Kapampangan different from the other indigenous scripts of these islands is the way the vowel glyph I (<span className="font-kulitan">i</span>) can alter it in the same manner as the consonant glyph YA found in Baybayin and other scripts of the archipelago. Although personally I think the Kapampangan vowel glyph I (<span className="font-kulitan">i</span>) is really the consonant glyph YA acting as a vowel glyph. They actually look very similar especially when the Kapampangan character is written in cursive form. As explained by Fray Alvaro de Benavente (1699) in his Arte de Lengua Pampanga and by Zoilo Hilario (1962) in his Bayung Súnis, the Indũng Súlat or &#34;mother character&#34; vowel I (<span className="font-kulitan">i</span>) can be altered with the use of a garlit or diacritical mark placed above or below it as well as adding vowel ligatures next to it to produce Anak Súlat or offspring characters of the consonant sound Y. For instance the Indúng Súlat I (<span className="font-kulitan">i</span>) can produce the Anak Súlat YI (<span className="font-kulitan">Yi</span>) by placing a garlit above it and the Anak Súlat YU (<span className="font-kulitan">yu</span>) by placing the garlit below it [Table 4].</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History22} alt="history22"></Image>
			<br></br>
			<p className="htrcontents">Table 4: The anak kulit or offspring characters of the indung kulit I (<span className="font-kulitan">i</span>).</p>
			</div>


			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh9">Altering the Vowel Glyph U as the consonant W</h1>
			</div><br></br>
			<Image className="historypng" src={History23} alt="history23"></Image>
			<span className="spantxt2">Ding Ának Ning Indûng Súlat A &#39;U&#39;(<span className="font-kulitan">u</span>)</span>
					<span className="spantxt3">Altering the Vowel Glyph U as the consonant W</span>
			<br></br>
			<p className="htrcontents">Again, one of the unique features of Súlat Kapampangan is the way the vowel glyph U (<span className="font-kulitan">u</span>) can be altered in the same manner as the consonant glyph WA found in Baybayin and the other scripts of the archipelago. I personally think that the Kapampangan vowel glyph U (<span className="font-kulitan">u</span>) may actually be the consonant glyph WA acting as a vowel glyph. Christopher Miller (2011b) also noted the similarity in shape of the Baybayin WA with Kapampangan U (<span className="font-kulitan">u</span>). In Kulitan, WA is usually written by combining the vowels characters U (<span className="font-kulitan">u</span>) and A (<span className="font-kulitan">a</span>) [Table 5] but surprisingly the vowel character U (<span className="font-kulitan">u</span>) stood alone without the vowel A (<span className="font-kulitan">a</span>) in the 1621 signature of Doña Isabel Pangisnauan of Mexico (Masiku). Could this be proof that Kapampangan vowel character U may actually be the consonantal character WA?</p>
			<br></br>
			<p className="htrcontents">As explained by Fray Alvaro de Benavente (1699) in his Arte de Lengua Pampanga and by Zoilo Hilario (1962) in his Bayung Sunis, the Indûng Súlat or &#34;mother character vowel U (V) can be altered with the use of a garlit or diacritical mark placed above or below it as well as adding vowel ligatures next to it to produce Anak Súlat or offspring characters of the consonant sound W. For instance the Indúng Súlat U (V) can produce the Anak Súlat WI (0) by placing a garlit above it and the Anak Súlat WU (V) by placing the garlit below it [Table 5].</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History24} alt="history24"></Image>
			<br></br>
			<p className="htrcontents">Table 5: The anak kulit or offspring characters of the indung kulit U (<span className="font-kulitan">u</span>).</p>
			</div>


			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh10">Changing the Default Vowel sound &#39;A&#39; to &#39;E&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History25} alt="history25"></Image>
			<span className="spantxt2">Pámanganak Ning Indûng Súlat King Siuálâng &#39;E&#39;</span>
					<span className="spantxt3">Changing the Default Vowel sound &#39;A&#39; to &#39;E&#39;</span>
			<br></br>
			<p className="htrcontents">Since the Kapampangan vowel sound &#39;E&#39; was developed from the monophthongisation of the diphthong &#39;Al&#39;, simply place the whole vowel glyph I (<span className="font-kulitan">i</span>) right next to the target consonantal glyph to change its inherent vowel sound &#39;A&#39; to &#39;E&#39;. For example, Indûng Súlat KA (<span className="font-kulitan">ka</span>) becomes Anak Súlat KE (<span className="font-kulitan">ke</span>) by placing the vowel character I (<span className="font-kulitan">i</span>) right after it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History26} alt="history26"></Image>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh11">Changing the Default Vowel sound &#39;A&#39; to &#39;O&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History27} alt="history27"></Image>
			<span className="spantxt2">Pámanganak Ning Indûng Súlat King Siuálâng &#39;O&#39;</span>
					<span className="spantxt3">Changing the Default Vowel sound &#39;A&#39; to &#39;O&#39;</span>
			<br></br>
			<p className="htrcontents">Since the Kapampangan vowel sound &#39;O&#39; was developed from the monophthongisation of the diphthong &#39;AU&#39;, simply place the whole vowel glyph U (<span className="font-kulitan">u</span>) right next to the target consonantal glyph to change its inherent vowel sound &#39;A&#39; to &#39;O&#39;. For example, Indûng Súlat KA (<span className="font-kulitan">ka</span>) becomes Anak Súlat KO (<span className="font-kulitan">ko</span>) by placing the vowel character U (<span className="font-kulitan">u</span>) right after it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History28} alt="history28"></Image>
			</div>


			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh12">Stress and Accents in Kulitan</h1>
			</div><br></br>
			<Image className="historypng" src={History29} alt="history29"></Image>
			<span className="spantxt2">Ding Kambal Siuálâ</span>
			<span className="spantxt3">Stress and Accents in Kulitan</span>
			<br></br>
			<p className="htrcontents">The Kambal Siuálâ or the lengthening of the vowel sounds in the Kapampangan language indicate the stress emphasis given to one or more syllables in a word. The accents or stress in the Kapampangan language or often lexical in nature. In Kapampangan, there are usually two or more words that are spelled similarly when written in the Latin script. Their meanings are different however depending on which syllable the emphasis falls. Strictly speaking, words having different accents, even if they are spelled the same way, are not the same word (Bachuber, 1952). In the Kapampangan language, a shift in stress may indicate a change in numbers among nouns, a change in tense among verbs, or even a change in the parts of speech (Hilario, 1962, Henson, 1965 and Pangilinan, 2006).</p>
			<br></br>
			<p className="htrcontents">The following classic example comes from Mariano Henson (1965):</p>
			<br></br>
			<span className="spantxt2">masákit &#39;difficult&#39; (ADJ.)</span>
			<span className="spantxt2">másakit &#39;infirm (N.)</span>
			<span className="spantxt2">masakit &#39;painful (ADJ.)</span>
			<br></br>
			<p className="htrcontents">In the Latin script, stress is indicated by the indispensable use of the diacritical marks. A misplacement of these marks could result in a fallacy of accent, or the confusion of one word with another due to similarity in spelling but with a different reading.</p>
			<br></br>
			<Image className="historypng" src={History30} alt="history30"></Image>
			<br></br>
			<p className="htrcontents">In Kulitan however, the placement of stress in a syllable is quite evident because of the Kambal Siuála. Unlike the Latin script, no two words are spelled the same way in Kulitan. Notice Mariano Henson&#39;s examples again written in Kulitan above. Unlike in the Latin script, none of the three words in the examples are spelled the same way in Kulitan. The placement extra glyph &#39;A&#39; (<span className="font-kulitan">a</span>) to form the Kambal Síuála -Á-/-Â (<span className="font-kulitan">aa</span>) can be readily seen.</p>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh13">Lengthening the inherent vowel &#39;A&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History31} alt="history31"></Image>
			<span className="spantxt2">Kambal Siuálâ &#39;A&#39;</span>
					<span className="spantxt3">Lengthening the inherent vowel &#39;A&#39;</span>
			<br></br>
			<p className="htrcontents">Since all Indung Súlat vowel character A (<span className="font-kulitan">a</span>) right after the target glyph. For example, KA (<span className="font-kulitan">ka</span>) becomes medial KÁ (<span className="font-kulitan">kaa</span>) or final KÂ (<span className="font-kulitan">kaa</span>) by placing the vowel character A (a) right after it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History32} alt="history32"></Image>
			<br></br>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh14">Lengthening the offspring vowel sound &#39;I&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History33} alt="history33"></Image>
			<span className="spantxt2">Kambal Siuálâ &#39;I&#39;</span>
					<span className="spantxt3">Lengthening the offspring vowel sound &#39;I&#39;</span>
			<br></br>
			<p className="htrcontents">The vowel sound &#39;I&#39; of an Anak Súlat or offspring character can further be lengthened simply by adding the Indüng Súlat vowel character I (<span className="font-kulitan">i</span>) right after the target Anak Súlat or offspring character. For example, Anak Súlat KI (<span className="font-kulitan">ki</span>) gives birth to another Anak Súlat - the medial KÍ (<span className="font-kulitan">kii</span>) or final KÎ (<span className="font-kulitan">kii</span>), by placing Indúng Súlat vowel character I (<span className="font-kulitan">i</span>) right after it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History34} alt="history34"></Image>
			<br></br>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh15">Lengthening the offspring vowel sound &#39;U&#39;</h1>
			</div><br></br>
			<Image className="historypng" src={History33} alt="history33"></Image>
			<span className="spantxt2">Kambal Siuálâ &#39;U&#39;</span>
					<span className="spantxt3">Lengthening the offspring vowel sound &#39;U&#39;</span>
			<br></br>
			<p className="htrcontents">The vowel sound &#39;U&#39; of an Anak Súlat or offspring character can further be lengthened simply by adding the Indüng Súlat vowel character U (<span className="font-kulitan">u</span>) right after the target Anak Súlat or offspring character. For example, Anak Súlat KU (<span className="font-kulitan">ku</span>) becomes another Anak Súlat - the medial KÚ (<span className="font-kulitan">kuu</span>), by placing Indúng Súlat vowel character U (<span className="font-kulitan">u</span>) right after it.</p>
			<br></br>
			<span className="spantxt2">Example Diagram</span>
			<br></br>
			<Image className="historypng" src={History35} alt="history35"></Image>
			<br></br>
			</div>

			

			<div className="contentsbg">
			<div className="learn-content">
				<h1 className="titlehistory" id="wh16">Terminating the default vowel sound</h1>
			</div><br></br>
			<Image className="historypng" src={History36} alt="history36"></Image>
			<span className="spantxt2">Pákamate Siuálâ</span>
					<span className="spantxt3">Terminating the default vowel sound</span>
			<br></br>
			<p className="htrcontents">There are two things that actually make Súlat Kapampangan different from all other scripts within the archipelago: First, it is the only script in the archipelago that is traditionally and preferably written vertically top to bottom, left to right, similar to other East Asian scripts. Second, Súlat Kapampangan is also the only script in the archipelago that has managed to create a spelling convention where the final consonant glyph is retained minus its inherent vowel sound &#39;A&#39; without using a virama (vowel killer). This spelling convention has been observed as early as the 170 century based on several Kapampangan signatures from that era (Miller, 2010 and 2011a). While the other indigenous scripts in the archipelago either dropped the coda consonant in the same manner as the Bugis-Makasarese scripts of Indonesia (Miller, 2011a and 2012) or use the virama or &#34;vowel killer&#34; in the form of a &#34;cross kudlit&#34; introduced by the Spanish friar Francisco Lopez in 1620 (Marcilla, 1895), the final consonant glyph is written out in full in Súlat Kapampangan but is read without the default vowel sound &#39;A&#39;.</p>
			<br></br>
			<p className="htrcontents">The only way to appreciate how this is done is by writing Súlat Kapampangan vertically instead of horizontally. To terminate the inherent vowel sound &#39;A&#39; of any of the consonantal glyphs, simply write the target character next to the one preceding it instead of below it. This will terminate its default vowel sound.</p>
			<br></br>
			<p className="htrcontents">For instance on [Table 6], to terminate the inherent &#39;A&#39; sound of NA (<span className="font-kulitan">na</span>) in &#39;NGANA simply write NA (<span className="font-kulitan">na</span>) right next to NGA (<span className="font-kulitan">nga</span>) instead of below it. This will terminate the default &#39;A&#39; sound of NA (<span className="font-kulitan">na</span>), creating the syllable &#39;NGAN&#39;.</p>
			<br></br>
			<p className="htrcontents">To terminate the inherent &#39;A&#39; sound of NGA (<span className="font-kulitan">nga</span>) in the word &#39;SANGA&#39;, simply write NGA (<span className="font-kulitan">nga</span>) right next to SA (3) instead of below it. This will terminate the default &#39;A&#39; sound of NGA (<span className="font-kulitan">nga</span>), creating the syllable &#39;SANG&#39;.</p>
			<br></br>
			<p className="htrcontents">To terminate the inherent &#39;A&#39; sound of SA (<span className="font-kulitan">sa</span>) in the &#39;BUSA&#39;, simply write SA (3) right next to the anak súlat BU (<span className="font-kulitan">bu</span>) instead of below it. This will terminate the default &#39;A&#39; sound of SA (<span className="font-kulitan">sa</span>), creating the syllable &#39;BUS&#39;.</p>
			<br></br>
			<Image className="historypng" src={History37} alt="history37"></Image>
			<p className="htrcontents">Table 6: Terminating the inherent vowel sound &#39;A&#39;</p>
			</div>
			<div className="bttcont">
				<a onClick={play135} className="btt" href="#top">BACK TO TOP</a>
			</div>
			<br></br>

	</div>
</main>
);   
}