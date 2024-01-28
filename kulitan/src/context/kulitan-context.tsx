/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import React, {
	createContext,
	useContext,
	useEffect,
	useRef,
	useState,
} from "react";
import normalizeWords from "@/utils/normalizeWords";
import denormalizeWords from "@/utils/denormalizeWords";
import latinizeVowels from "@/utils/latinizeVowels";
import localKulitanLibrary from "@/shared/lib/kulitanLibrary.json";

const KulitanContext = createContext<any>(null);

const KulitanContextProvider = ({ children }: any) => {
	const [isAutoCorrect, setIsAutoCorrect] = useState(false);
	const [isMobilePhone, setIsMobilePhone] = useState(true);
	const [isAddActionClicked, setIsAddActionClicked] = useState(false);
	const [cursorPosition, setCursorPosition] = useState(null);
	const [textAreaRef, setTextAreaRef] = useState<any>(null);
	const [kulitanWords, setKulitanWords] = useTransformedState(
		"a tin ku pung sing sing <div>la wii wiing pam bang saa </div>",
	);
	const textareaRef: any = useRef(null);
	const [kulitanLibrary, setKulitanLibrary] =
		useState<any>(localKulitanLibrary);
	const [disableScroll, setDisableScroll] = useState(false);
	const [isKeyboardActive, setIsKeyboardActive] = useState(true);
	const [isReadOnly, setIsReadOnly] = useState(true);
	const [scrollY, setScrollY] = useState(0);

	function useTransformedState(initialValue: any) {
		const [transformedValue, setTransformedValue] = useState(initialValue);
		const normalizedWords = normalizeWords(transformedValue);

		useEffect(() => {
			setIsMobilePhone(
				"ontouchstart" in window || "onmsgesturechange" in window,
			);

			const path = process.env.NEXT_PUBLIC_BACKEND_URL;
			const options = {
				method: "GET",
				headers: { "Access-Control-Allow-Origin": "*" },
			};

			fetch(path + "/kulitanLibrary.json", options)
				.then((response) => response.json())
				.then((response) => setKulitanLibrary(response))
				.catch((err) => setKulitanLibrary(localKulitanLibrary));

			setKulitanWords(
				denormalizeWords(latinizeVowels(normalizedWords)).toLowerCase(),
			);
		}, []);

		useEffect(() => {
			setKulitanWords(normalizedWords);

			const timeInSeconds = 2
			const timeoutId = setTimeout(() => {
				setKulitanWords(
					denormalizeWords(latinizeVowels(normalizedWords)).toLowerCase(),
				);
				
				if (cursorPosition !== null) {
					textAreaRef.current.setSelectionRange(cursorPosition, cursorPosition);
				}
			}, timeInSeconds * 1000);
		
			return () => clearTimeout(timeoutId);
		}, [normalizedWords, cursorPosition]);

		return [transformedValue, setTransformedValue];
	}

	return (
		<KulitanContext.Provider
			value={{
				kulitanWords,
				setKulitanWords,
				isAddActionClicked,
				setIsAddActionClicked,
				isAutoCorrect,
				cursorPosition,
				setCursorPosition,
				setIsAutoCorrect,
				textareaRef,
				textAreaRef,
				setTextAreaRef,
				kulitanLibrary,
				isMobilePhone,
				disableScroll,
				setDisableScroll,
				isKeyboardActive,
				setIsKeyboardActive,
				isReadOnly,
				setIsReadOnly,
				scrollY, 
				setIsMobilePhone,
			}}
		>
			{children}
		</KulitanContext.Provider>
	);
};

export function useKulitanContext() {
	const context = useContext(KulitanContext);
	if (!context) {
		throw new Error(
			"useKulitanContext must be used within a KulitanContextProvider",
		);
	}
	return context;
}

export default KulitanContextProvider;
