export default function delatinizeVowels(text: any) {
	return text.replace(/[áóúío]/g, function (match: any) {
		const replacements: any = {
			á: "aa",
			ó: "oo",
			ú: "uu",
			í: "ii",
			o: "au",
		};
		return replacements[match];
	});
}
