export default function latinizeVowels(text: any) {
	return text?.replace(
		/(aa|oo|uu|ii|ai|au|nganga|\b[bcdfghjklmnpqrstvwxyz]*a[^aeiou\s]a\b)/g,
		function (match: any) {
			const replacements: any = {
				aa: "á ",
				oo: "ó ",
				uu: "ú ",
				ii: "í ",
				ai: "e ",
				au: "o ",
				nganga: "ngang ",
			};
			const replaced = match.replace(/a\b/, " ");
			
			return replacements[match]
				? replacements[match] || match
				: replaced || match;
		},
	);
}
