/* eslint-disable react-hooks/exhaustive-deps */
"use client";

import { BackArrow } from "@/shared/icons/BackArrow";
import Maintenance from "@/shared/images/maintenance.png";
import Background from "@/shared/images/laptop.jpg";
import Link from "next/link";
import Image from "next/image";
import useSound from 'use-sound';

export default function Reading() {
	const soundFile1 = '/audio/syllable_sound_ga.mp3';
	const [play1] = useSound(soundFile1);
	const soundFile2 = '/audio/syllable_sound_ka.mp3';
	const [play2] = useSound(soundFile2);
	const soundFile3 = '/audio/syllable_sound_nga.mp3';
	const [play3] = useSound(soundFile3);
	const soundFile4 = '/audio/syllable_sound_ta.mp3';
	const [play4] = useSound(soundFile4);
	const soundFile5 = '/audio/syllable_sound_da.mp3';
	const [play5] = useSound(soundFile5);
	const soundFile6 = '/audio/syllable_sound_na.mp3';
	const [play6] = useSound(soundFile6);
	const soundFile7 = '/audio/syllable_sound_la.mp3';
	const [play7] = useSound(soundFile7);
	const soundFile8 = '/audio/syllable_sound_sa.mp3';
	const [play8] = useSound(soundFile8);
	const soundFile9 = '/audio/syllable_sound_ma.mp3';
	const [play9] = useSound(soundFile9);
	const soundFile10 = '/audio/syllable_sound_pa.mp3';
	const [play10] = useSound(soundFile10);
	const soundFile11 = '/audio/syllable_sound_ba.mp3';
	const [play11] = useSound(soundFile11);
	const soundFile12 = '/audio/syllable_sound_a.mp3';
	const [play12] = useSound(soundFile12);
	const soundFile13 = '/audio/syllable_sound_i.mp3';
	const [play13] = useSound(soundFile13);
	const soundFile14 = '/audio/syllable_sound_u.mp3';
	const [play14] = useSound(soundFile14);
	const soundFile15 = '/audio/syllable_sound_ee.mp3';
	const [play15] = useSound(soundFile15);
	const soundFile16 = '/audio/syllable_sound_oo.mp3';
	const [play16] = useSound(soundFile16);
	const soundFile17 = '/audio/syllable_sound_aa.mp3';
	const [play17] = useSound(soundFile17);
	const soundFile18 = '/audio/syllable_sound_ii.mp3';
	const [play18] = useSound(soundFile18);
	const soundFile19 = '/audio/syllable_sound_uu.mp3';
	const [play19] = useSound(soundFile19);
	const soundFile20 = '/audio/syllable_sound_gaa.mp3';
	const [play20] = useSound(soundFile20);
	const soundFile21 = '/audio/syllable_sound_gi.mp3';
	const [play21] = useSound(soundFile21);
	const soundFile22 = '/audio/syllable_sound_gii.mp3';
	const [play22] = useSound(soundFile22);
	const soundFile23 = '/audio/syllable_sound_gu.mp3';
	const [play23] = useSound(soundFile23);
	const soundFile24 = '/audio/syllable_sound_guu.mp3';
	const [play24] = useSound(soundFile24);
	const soundFile25 = '/audio/syllable_sound_ge.mp3';
	const [play25] = useSound(soundFile25);
	const soundFile26 = '/audio/syllable_sound_go.mp3';
	const [play26] = useSound(soundFile26);
	const soundFile27 = '/audio/syllable_sound_gang.mp3';
	const [play27] = useSound(soundFile27);
	const soundFile28 = '/audio/syllable_sound_kaa.mp3';
	const [play28] = useSound(soundFile28);
	const soundFile29 = '/audio/syllable_sound_ki.mp3';
	const [play29] = useSound(soundFile29);
	const soundFile30 = '/audio/syllable_sound_kii.mp3';
	const [play30] = useSound(soundFile30);
	const soundFile31 = '/audio/syllable_sound_ku.mp3';
	const [play31] = useSound(soundFile31);
	const soundFile32 = '/audio/syllable_sound_kuu.mp3';
	const [play32] = useSound(soundFile32);
	const soundFile33 = '/audio/syllable_sound_ke.mp3';
	const [play33] = useSound(soundFile33);
	const soundFile34 = '/audio/syllable_sound_ko.mp3';
	const [play34] = useSound(soundFile34);
	const soundFile35 = '/audio/syllable_sound_kang.mp3';
	const [play35] = useSound(soundFile35);
	const soundFile36 = '/audio/syllable_sound_ngaa.mp3';
	const [play36] = useSound(soundFile36);
	const soundFile37 = '/audio/syllable_sound_ngi.mp3';
	const [play37] = useSound(soundFile37);
	const soundFile38 = '/audio/syllable_sound_ngii.mp3';
	const [play38] = useSound(soundFile38);
	const soundFile39 = '/audio/syllable_sound_ngu.mp3';
	const [play39] = useSound(soundFile39);
	const soundFile40 = '/audio/syllable_sound_nguu.mp3';
	const [play40] = useSound(soundFile40);
	const soundFile41 = '/audio/syllable_sound_nge.mp3';
	const [play41] = useSound(soundFile41);
	const soundFile42 = '/audio/syllable_sound_ngo.mp3';
	const [play42] = useSound(soundFile42);
	const soundFile43 = '/audio/syllable_sound_ngang.mp3';
	const [play43] = useSound(soundFile43);
	const soundFile44 = '/audio/syllable_sound_taa.mp3';
	const [play44] = useSound(soundFile44);
	const soundFile45 = '/audio/syllable_sound_ti.mp3';
	const [play45] = useSound(soundFile45);
	const soundFile46 = '/audio/syllable_sound_tii.mp3';
	const [play46] = useSound(soundFile46);
	const soundFile47 = '/audio/syllable_sound_tu.mp3';
	const [play47] = useSound(soundFile47);
	const soundFile48 = '/audio/syllable_sound_tuu.mp3';
	const [play48] = useSound(soundFile48);
	const soundFile49 = '/audio/syllable_sound_te.mp3';
	const [play49] = useSound(soundFile49);
	const soundFile50 = '/audio/syllable_sound_to.mp3';
	const [play50] = useSound(soundFile50);
	const soundFile51 = '/audio/syllable_sound_tang.mp3';
	const [play51] = useSound(soundFile51);
	const soundFile52 = '/audio/syllable_sound_daa.mp3';
	const [play52] = useSound(soundFile52);
	const soundFile53 = '/audio/syllable_sound_di.mp3';
	const [play53] = useSound(soundFile53);
	const soundFile54 = '/audio/syllable_sound_dii.mp3';
	const [play54] = useSound(soundFile54);
	const soundFile55 = '/audio/syllable_sound_du.mp3';
	const [play55] = useSound(soundFile55);
	const soundFile56 = '/audio/syllable_sound_duu.mp3';
	const [play56] = useSound(soundFile56);
	const soundFile57 = '/audio/syllable_sound_de.mp3';
	const [play57] = useSound(soundFile57);
	const soundFile58 = '/audio/syllable_sound_do.mp3';
	const [play58] = useSound(soundFile58);
	const soundFile59 = '/audio/syllable_sound_dang.mp3';
	const [play59] = useSound(soundFile59);
	const soundFile60 = '/audio/syllable_sound_naa.mp3';
	const [play60] = useSound(soundFile60);
	const soundFile61 = '/audio/syllable_sound_ni.mp3';
	const [play61] = useSound(soundFile61);
	const soundFile62 = '/audio/syllable_sound_nii.mp3';
	const [play62] = useSound(soundFile62);
	const soundFile63 = '/audio/syllable_sound_nu.mp3';
	const [play63] = useSound(soundFile63);
	const soundFile64 = '/audio/syllable_sound_nuu.mp3';
	const [play64] = useSound(soundFile64);
	const soundFile65 = '/audio/syllable_sound_ne.mp3';
	const [play65] = useSound(soundFile65);
	const soundFile66 = '/audio/syllable_sound_no.mp3';
	const [play66] = useSound(soundFile66);
	const soundFile67 = '/audio/syllable_sound_nang.mp3';
	const [play67] = useSound(soundFile67);
	const soundFile68 = '/audio/syllable_sound_laa.mp3';
	const [play68] = useSound(soundFile68);
	const soundFile69 = '/audio/syllable_sound_li.mp3';
	const [play69] = useSound(soundFile69);
	const soundFile70 = '/audio/syllable_sound_lii.mp3';
	const [play70] = useSound(soundFile70);
	const soundFile71 = '/audio/syllable_sound_lu.mp3';
	const [play71] = useSound(soundFile71);
	const soundFile72 = '/audio/syllable_sound_luu.mp3';
	const [play72] = useSound(soundFile72);
	const soundFile73 = '/audio/syllable_sound_le.mp3';
	const [play73] = useSound(soundFile73);
	const soundFile74 = '/audio/syllable_sound_lo.mp3';
	const [play74] = useSound(soundFile74);
	const soundFile75 = '/audio/syllable_sound_lang.mp3';
	const [play75] = useSound(soundFile75);
	const soundFile76 = '/audio/syllable_sound_saa.mp3';
	const [play76] = useSound(soundFile76);
	const soundFile77 = '/audio/syllable_sound_si.mp3';
	const [play77] = useSound(soundFile77);
	const soundFile78 = '/audio/syllable_sound_sii.mp3';
	const [play78] = useSound(soundFile78);
	const soundFile79 = '/audio/syllable_sound_su.mp3';
	const [play79] = useSound(soundFile79);
	const soundFile80 = '/audio/syllable_sound_suu.mp3';
	const [play80] = useSound(soundFile80);
	const soundFile81 = '/audio/syllable_sound_se.mp3';
	const [play81] = useSound(soundFile81);
	const soundFile82 = '/audio/syllable_sound_so.mp3';
	const [play82] = useSound(soundFile82);
	const soundFile83 = '/audio/syllable_sound_sang.mp3';
	const [play83] = useSound(soundFile83);
	const soundFile84 = '/audio/syllable_sound_maa.mp3';
	const [play84] = useSound(soundFile84);
	const soundFile85 = '/audio/syllable_sound_mi.mp3';
	const [play85] = useSound(soundFile85);
	const soundFile86 = '/audio/syllable_sound_mii.mp3';
	const [play86] = useSound(soundFile86);
	const soundFile87 = '/audio/syllable_sound_mu.mp3';
	const [play87] = useSound(soundFile87);
	const soundFile88 = '/audio/syllable_sound_muu.mp3';
	const [play88] = useSound(soundFile88);
	const soundFile89 = '/audio/syllable_sound_me.mp3';
	const [play89] = useSound(soundFile89);
	const soundFile90 = '/audio/syllable_sound_mo.mp3';
	const [play90] = useSound(soundFile90);
	const soundFile91 = '/audio/syllable_sound_mang.mp3';
	const [play91] = useSound(soundFile91);
	const soundFile92 = '/audio/syllable_sound_paa.mp3';
	const [play92] = useSound(soundFile92);
	const soundFile93 = '/audio/syllable_sound_pi.mp3';
	const [play93] = useSound(soundFile93);
	const soundFile94 = '/audio/syllable_sound_pii.mp3';
	const [play94] = useSound(soundFile94);
	const soundFile95 = '/audio/syllable_sound_pu.mp3';
	const [play95] = useSound(soundFile95);
	const soundFile96 = '/audio/syllable_sound_puu.mp3';
	const [play96] = useSound(soundFile96);
	const soundFile97 = '/audio/syllable_sound_pe.mp3';
	const [play97] = useSound(soundFile97);
	const soundFile98 = '/audio/syllable_sound_po.mp3';
	const [play98] = useSound(soundFile98);
	const soundFile99 = '/audio/syllable_sound_pang.mp3';
	const [play99] = useSound(soundFile99);
	const soundFile100 = '/audio/syllable_sound_baa.mp3';
	const [play100] = useSound(soundFile100);
	const soundFile101 = '/audio/syllable_sound_bi.mp3';
	const [play101] = useSound(soundFile101);
	const soundFile102 = '/audio/syllable_sound_bii.mp3';
	const [play102] = useSound(soundFile102);
	const soundFile103 = '/audio/syllable_sound_bu.mp3';
	const [play103] = useSound(soundFile103);
	const soundFile104 = '/audio/syllable_sound_buu.mp3';
	const [play104] = useSound(soundFile104);
	const soundFile105 = '/audio/syllable_sound_be.mp3';
	const [play105] = useSound(soundFile105);
	const soundFile106 = '/audio/syllable_sound_bo.mp3';
	const [play106] = useSound(soundFile106);
	const soundFile107 = '/audio/syllable_sound_bang.mp3';
	const [play107] = useSound(soundFile107);
	const soundFile108 = '/audio/syllable_sound_yaa.mp3';
	const [play108] = useSound(soundFile108);
	const soundFile109 = '/audio/syllable_sound_yi.mp3';
	const [play109] = useSound(soundFile109);
	const soundFile110 = '/audio/syllable_sound_yii.mp3';
	const [play110] = useSound(soundFile110);
	const soundFile111 = '/audio/syllable_sound_yu.mp3';
	const [play111] = useSound(soundFile111);
	const soundFile112 = '/audio/syllable_sound_yuu.mp3';
	const [play112] = useSound(soundFile112);
	const soundFile113 = '/audio/syllable_sound_ye.mp3';
	const [play113] = useSound(soundFile113);
	const soundFile114 = '/audio/syllable_sound_yo.mp3';
	const [play114] = useSound(soundFile114);
	const soundFile115 = '/audio/syllable_sound_yang.mp3';
	const [play115] = useSound(soundFile115);
	const soundFile116 = '/audio/syllable_sound_waa.mp3';
	const [play116] = useSound(soundFile116);
	const soundFile117 = '/audio/syllable_sound_wi.mp3';
	const [play117] = useSound(soundFile117);
	const soundFile118 = '/audio/syllable_sound_wii.mp3';
	const [play118] = useSound(soundFile118);
	const soundFile119 = '/audio/syllable_sound_wu.mp3';
	const [play119] = useSound(soundFile119);
	const soundFile120 = '/audio/syllable_sound_wuu.mp3';
	const [play120] = useSound(soundFile120);
	const soundFile121 = '/audio/syllable_sound_we.mp3';
	const [play121] = useSound(soundFile121);
	const soundFile122 = '/audio/syllable_sound_wo.mp3';
	const [play122] = useSound(soundFile122);
	const soundFile123 = '/audio/syllable_sound_wang.mp3';
	const [play123] = useSound(soundFile123);
	const soundFile124 = '/audio/syllable_sound_ya.mp3';
	const [play124] = useSound(soundFile124);
	const soundFile125 = '/audio/syllable_sound_wa.mp3';
	const [play125] = useSound(soundFile125);
	const soundFile126 = '/audio/syllable_sound_kan.mp3';
	const [play126] = useSound(soundFile126);
	const soundFile127 = '/audio/syllable_sound_kin.mp3';
	const [play127] = useSound(soundFile127);
	const soundFile128 = '/audio/syllable_sound_kun.mp3';
	const [play128] = useSound(soundFile128);
	const soundFile129 = '/audio/syllable_sound_kaan.mp3';
	const [play129] = useSound(soundFile129);
	const soundFile130 = '/audio/syllable_sound_kiin.mp3';
	const [play130] = useSound(soundFile130);
	const soundFile131 = '/audio/syllable_sound_kuun.mp3';
	const [play131] = useSound(soundFile131);
	const soundFile132 = '/audio/syllable_sound_ken.mp3';
	const [play132] = useSound(soundFile132);
	const soundFile133 = '/audio/syllable_sound_kon.mp3';
	const [play133] = useSound(soundFile133);
	const soundFile134 = '/audio/click2.mp3';
	const [play134] = useSound(soundFile134);

	
	return (
		<main
			className={`min-h-screen flex min-w-screen flex-col items-center justify-between gap-5 bg-gradient-container relative`}
		>

			<div className="w-full flex flex-col gap-6">
				<div className="w-full flex justify-center items-center relative h-[49px]">
					<div className="bg-black w-full absolute h-full z-0 opacity-30"></div>
					<Link href="/" className="absolute left-5 z-10">
						<BackArrow />
					</Link>
					<div id="top2" className="navbar bg-[#212A3E] w-full absolute h-full z-0 opacity-100 flex items-center justify-center">
      PAMAMASA
    </div>
					
				</div>
				<br></br>
				<div className="quiz">
  				<Link href="levels">
    			<button onClick={play134} className="font-kafeine qzbtn">
      					Start Test
    			</button>
  				</Link>
				</div>

			<br></br>

			<h1 className="title" id="indu">INDUNG SULAT</h1>
			<div className="container"> 
				<button onClick={play1} id="btn1" className="styled-button"><div className="font-kulitan">Ga</div>Ga</button>
				<button onClick={play2} id="btn2" className="styled-button"><div className="font-kulitan">Ka</div>Ka</button>
				<button onClick={play3} id="btn3" className="styled-button"><div className="font-kulitan">Nga</div>Nga</button>
				<button onClick={play4} id="btn4" className="styled-button"><div className="font-kulitan">Ta</div>Ta</button>
				<button onClick={play5} id="btn5" className="styled-button"><div className="font-kulitan">Da</div>Da</button>
				<button onClick={play6} id="btn6" className="styled-button"><div className="font-kulitan">Na</div>Na</button>
				<button onClick={play7} id="btn7" className="styled-button"><div className="font-kulitan">La</div>La</button>
				<button onClick={play8} id="btn8" className="styled-button"><div className="font-kulitan">Sa</div>Sa</button>
				<button onClick={play9} id="btn9" className="styled-button"><div className="font-kulitan">Ma</div>Ma</button>
				<button onClick={play10} id="btn10" className="styled-button"><div className="font-kulitan">Pa</div>Pa</button>
				<button onClick={play11} id="btn11" className="styled-button"><div className="font-kulitan">Ba</div>Ba</button>

				<br></br>

				<button onClick={play12} id="btn12" className="styled-button"><div className="font-kulitan">a</div>a</button>
				<button onClick={play13} id="btn13" className="styled-button"><div className="font-kulitan">i</div>i</button>
				<button onClick={play14} id="btn14" className="styled-button"><div className="font-kulitan">u</div>u</button>
				<button onClick={play15} id="btn15" className="styled-button"><div className="font-kulitan">ae</div>e</button>
				<button onClick={play16} id="btn16" className="styled-button"><div className="font-kulitan">ao</div>o</button>
				<button onClick={play17} id="btn17" className="styled-button"><div className="font-kulitan">aa</div>á/â</button>
				<button onClick={play18} id="btn18" className="styled-button"><div className="font-kulitan">ii</div>í/î</button>
				<button onClick={play19} id="btn19" className="styled-button"><div className="font-kulitan">uu</div>ú/û</button>
				</div>

			<h1 className="title">ANAK SULAT</h1>
			<div className="container">
				
				<button onClick={play20} id="btn20" className="styled-button"><div className="font-kulitan">gaa</div>gá/gâ</button>
				<button onClick={play21} id="btn21" className="styled-button"><div className="font-kulitan">gi</div>gi</button>
				<button onClick={play22} id="btn22" className="styled-button"><div className="font-kulitan">gii</div>gí/gî</button>
				<button onClick={play23} id="btn23" className="styled-button"><div className="font-kulitan">gu</div>gu</button>
				<button onClick={play24} id="btn24" className="styled-button"><div className="font-kulitan">guu</div>gú/gû</button>
				<button onClick={play25} id="btn25" className="styled-button"><div className="font-kulitan">ge</div>ge</button>
				<button onClick={play26} id="btn26" className="styled-button"><div className="font-kulitan">go</div>go</button>
				<button onClick={play27} id="btn27" className="styled-button"><div className="font-kulitan">gang</div>gang</button>
				<button onClick={play28} id="btn28" className="styled-button"><div className="font-kulitan">kaa</div>ká/kâ</button>
				<button onClick={play29} id="btn29" className="styled-button"><div className="font-kulitan">ki</div>ki</button>
				<button onClick={play30} id="btn30" className="styled-button"><div className="font-kulitan">kii</div>kí/kî</button>
				<button onClick={play31} id="btn31" className="styled-button"><div className="font-kulitan">ku</div>ku</button>
				<button onClick={play32} id="btn32" className="styled-button"><div className="font-kulitan">kuu</div>kú/kû</button>
				<button onClick={play33} id="btn33" className="styled-button"><div className="font-kulitan">ke</div>ke</button>
				<button onClick={play34} id="btn34" className="styled-button"><div className="font-kulitan">ko</div>ko</button>
				<button onClick={play35} id="btn35" className="styled-button"><div className="font-kulitan">kang</div>kang</button>
				<button onClick={play36} id="btn36" className="styled-button"><div className="font-kulitan">ngaa</div>ngá/ngâ</button>
				<button onClick={play37} id="btn37" className="styled-button"><div className="font-kulitan">ngi</div>ngi</button>
				<button onClick={play38} id="btn38" className="styled-button"><div className="font-kulitan">ngii</div>ngí/ngî</button>
				<button onClick={play39} id="btn39" className="styled-button"><div className="font-kulitan">ngu</div>ngu</button>
				<button onClick={play40} id="btn40" className="styled-button"><div className="font-kulitan">nguu</div>ngú/ngû</button>
				<button onClick={play41} id="btn41" className="styled-button"><div className="font-kulitan">nge</div>nge</button>
				<button onClick={play42} id="btn42" className="styled-button"><div className="font-kulitan">ngo</div>ngo</button>
				<button onClick={play43} id="btn43" className="styled-button"><div className="font-kulitan">ngang</div>ngang</button>
				<button onClick={play44} id="btn44" className="styled-button"><div className="font-kulitan">taa</div>tá/tâ</button>
				<button onClick={play45} id="btn45" className="styled-button"><div className="font-kulitan">ti</div>ti</button>
				<button onClick={play46} id="btn46" className="styled-button"><div className="font-kulitan">tii</div>tí/tî</button>
				<button onClick={play47} id="btn47" className="styled-button"><div className="font-kulitan">tu</div>tu</button>
				<button onClick={play48} id="btn48" className="styled-button"><div className="font-kulitan">tuu</div>tú/tû</button>
				<button onClick={play49} id="btn49" className="styled-button"><div className="font-kulitan">te</div>te</button>
				<button onClick={play50} id="btn50" className="styled-button"><div className="font-kulitan">to</div>to</button>
				<button onClick={play51} id="btn51" className="styled-button"><div className="font-kulitan">tang</div>tang</button>
				<button onClick={play52} id="btn52" className="styled-button"><div className="font-kulitan">daa</div>dá/dâ</button>
				<button onClick={play53} id="btn53" className="styled-button"><div className="font-kulitan">di</div>di</button>
				<button onClick={play54} id="btn54" className="styled-button"><div className="font-kulitan">dii</div>dí/dî</button>
				<button onClick={play55} id="btn55" className="styled-button"><div className="font-kulitan">du</div>du</button>
				<button onClick={play56} id="btn56" className="styled-button"><div className="font-kulitan">duu</div>dú/dû</button>
				<button onClick={play57} id="btn57" className="styled-button"><div className="font-kulitan">de</div>de</button>
				<button onClick={play58} id="btn58" className="styled-button"><div className="font-kulitan">do</div>do</button>
				<button onClick={play59} id="btn59" className="styled-button"><div className="font-kulitan">dang</div>dang</button>
				<button onClick={play60} id="btn60" className="styled-button"><div className="font-kulitan">naa</div>ná/gâ</button>
				<button onClick={play61} id="btn61" className="styled-button"><div className="font-kulitan">ni</div>ni</button>
				<button onClick={play62} id="btn62" className="styled-button"><div className="font-kulitan">nii</div>ní/nî</button>
				<button onClick={play63} id="btn63" className="styled-button"><div className="font-kulitan">nu</div>nu</button>
				<button onClick={play64} id="btn64" className="styled-button"><div className="font-kulitan">nuu</div>nú/nû</button>
				<button onClick={play65} id="btn65" className="styled-button"><div className="font-kulitan">ne</div>ne</button>
				<button onClick={play66} id="btn66" className="styled-button"><div className="font-kulitan">no</div>no</button>
				<button onClick={play67} id="btn67" className="styled-button"><div className="font-kulitan">nang</div>nang</button>
				<button onClick={play68} id="btn68" className="styled-button"><div className="font-kulitan">laa</div>lá/lâ</button>
				<button onClick={play69} id="btn69" className="styled-button"><div className="font-kulitan">li</div>li</button>
				<button onClick={play70} id="btn70" className="styled-button"><div className="font-kulitan">lii</div>lí/lî</button>
				<button onClick={play71} id="btn71" className="styled-button"><div className="font-kulitan">lu</div>lu</button>
				<button onClick={play72} id="btn72" className="styled-button"><div className="font-kulitan">luu</div>lú/lû</button>
				<button onClick={play73} id="btn73" className="styled-button"><div className="font-kulitan">le</div>le</button>
				<button onClick={play74} id="btn74" className="styled-button"><div className="font-kulitan">lo</div>lo</button>
				<button onClick={play75} id="btn75" className="styled-button"><div className="font-kulitan">lang</div>lang</button>
				<button onClick={play76} id="btn76" className="styled-button"><div className="font-kulitan">saa</div>sá/sâ</button>
				<button onClick={play77} id="btn77" className="styled-button"><div className="font-kulitan">si</div>si</button>
				<button onClick={play78} id="btn78" className="styled-button"><div className="font-kulitan">sii</div>sí/sî</button>
				<button onClick={play79} id="btn79" className="styled-button"><div className="font-kulitan">su</div>su</button>
				<button onClick={play80} id="btn80" className="styled-button"><div className="font-kulitan">suu</div>sú/sû</button>
				<button onClick={play81} id="btn81" className="styled-button"><div className="font-kulitan">se</div>se</button>
				<button onClick={play82} id="btn82" className="styled-button"><div className="font-kulitan">so</div>so</button>
				<button onClick={play83} id="btn83" className="styled-button"><div className="font-kulitan">sang</div>sang</button>
				<button onClick={play84} id="btn84" className="styled-button"><div className="font-kulitan">maa</div>má/mâ</button>
				<button onClick={play85} id="btn85" className="styled-button"><div className="font-kulitan">mi</div>mi</button>
				<button onClick={play86} id="btn86" className="styled-button"><div className="font-kulitan">mii</div>mí/mî</button>
				<button onClick={play87} id="btn87" className="styled-button"><div className="font-kulitan">mu</div>mu</button>
				<button onClick={play88} id="btn88" className="styled-button"><div className="font-kulitan">muu</div>mú/mû</button>
				<button onClick={play89} id="btn89" className="styled-button"><div className="font-kulitan">me</div>me</button>
				<button onClick={play90} id="btn90" className="styled-button"><div className="font-kulitan">mo</div>mo</button>
				<button onClick={play91}id="btn91" className="styled-button"><div className="font-kulitan">mang</div>mang</button>
				<button onClick={play92}id="btn92" className="styled-button"><div className="font-kulitan">paa</div>pá/pâ</button>
				<button onClick={play93}id="btn93" className="styled-button"><div className="font-kulitan">pi</div>pi</button>
				<button onClick={play94}id="btn94" className="styled-button"><div className="font-kulitan">pii</div>pí/pî</button>
				<button onClick={play95}id="btn95" className="styled-button"><div className="font-kulitan">pu</div>pu</button>
				<button onClick={play96}id="btn96" className="styled-button"><div className="font-kulitan">puu</div>pú/pû</button>
				<button onClick={play97}id="btn97" className="styled-button"><div className="font-kulitan">pe</div>pe</button>
				<button onClick={play98}id="btn98" className="styled-button"><div className="font-kulitan">po</div>po</button>
				<button onClick={play99}id="btn99" className="styled-button"><div className="font-kulitan">pang</div>pang</button>
				<button onClick={play100}id="btn100" className="styled-button"><div className="font-kulitan">baa</div>bá/bâ</button>
				<button onClick={play101}id="btn101" className="styled-button"><div className="font-kulitan">bi</div>bi</button>
				<button onClick={play102}id="btn102" className="styled-button"><div className="font-kulitan">bii</div>bí/bî</button>
				<button onClick={play103}id="btn103" className="styled-button"><div className="font-kulitan">bu</div>bu</button>
				<button onClick={play104}id="btn104" className="styled-button"><div className="font-kulitan">buu</div>bú/bû</button>
				<button onClick={play105}id="btn105" className="styled-button"><div className="font-kulitan">be</div>be</button>
				<button onClick={play106}id="btn106" className="styled-button"><div className="font-kulitan">bo</div>bo</button>
				<button onClick={play107}id="btn107" className="styled-button"><div className="font-kulitan">bang</div>bang</button>
				<button onClick={play108}id="btn108" className="styled-button"><div className="font-kulitan">yaa</div>yá/yâ</button>
				<button onClick={play109}id="btn109" className="styled-button"><div className="font-kulitan">yi</div>yi</button>
				<button onClick={play110}id="btn110" className="styled-button"><div className="font-kulitan">yii</div>yí/yî</button>
				<button onClick={play111}id="btn111" className="styled-button"><div className="font-kulitan">yu</div>yu</button>
				<button onClick={play112}id="btn112" className="styled-button"><div className="font-kulitan">yuu</div>yú/yû</button>
				<button onClick={play113}id="btn113" className="styled-button"><div className="font-kulitan">ye</div>ye</button>
				<button onClick={play114}id="btn114" className="styled-button"><div className="font-kulitan">yo</div>yo</button>
				<button onClick={play115}id="btn115" className="styled-button"><div className="font-kulitan">yang</div>yang</button>
				<button onClick={play116}id="btn116" className="styled-button"><div className="font-kulitan">waa</div>wá/wâ</button>
				<button onClick={play117}id="btn117" className="styled-button"><div className="font-kulitan">wi</div>wi</button>
				<button onClick={play118}id="btn118" className="styled-button"><div className="font-kulitan">wii</div>wí/wî</button>
				<button onClick={play119}id="btn119" className="styled-button"><div className="font-kulitan">wu</div>wu</button>
				<button onClick={play120}id="btn120" className="styled-button"><div className="font-kulitan">wuu</div>wú/wû</button>
				<button onClick={play121}id="btn121" className="styled-button"><div className="font-kulitan">we</div>we</button>
				<button onClick={play122}id="btn122" className="styled-button"><div className="font-kulitan">wo</div>wo</button>
				<button onClick={play123}id="btn123" className="styled-button"><div className="font-kulitan">wang</div>wang</button>
				<br></br>
				<button onClick={play124}id="btn124" className="styled-button"><div className="font-kulitan">ya</div>ya</button>
				<button onClick={play125}id="btn125" className="styled-button"><div className="font-kulitan">wa</div>wa</button>
				
				</div>
				<h1 className="title">PAKAMATE SIUALA</h1>
				<div className="container">
				<button onClick={play126}id="btn126" className="styled-button"><div className="font-kulitan">kan</div>kan</button>
				<button onClick={play127}id="btn127" className="styled-button"><div className="font-kulitan">kin</div>kin</button>
				<button onClick={play128}id="btn128" className="styled-button"><div className="font-kulitan">kun</div>kun</button>
				<button onClick={play129}id="btn129" className="styled-button"><div className="font-kulitan">kaan</div>kán</button>
				<button onClick={play130}id="btn130" className="styled-button"><div className="font-kulitan">kiin</div>kín</button>
				<button onClick={play131}id="btn131" className="styled-button"><div className="font-kulitan">kuun</div>kún</button>
				<button onClick={play132}id="btn132" className="styled-button"><div className="font-kulitan">ken</div>ken</button>
				<button onClick={play133}id="btn133" className="styled-button"><div className="font-kulitan">kon</div>kon</button>
				</div>
				<div className="bttcont">
				<a onClick={play134} className="btt" href="#top2">BACK TO TOP</a>
			
			</div>
			<br></br>
			</div>
			
		</main>
		
	);
}
