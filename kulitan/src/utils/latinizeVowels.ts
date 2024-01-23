export default function latinizeVowels(text: any) {
	return text?.replace(
		/(aa|oo|uu|ii|ai|au|nganga|ia|ya i|o a|oa|wa i|ngaa|inga|\b[bcdfghjklmnpqrstvwxyz]*u[^aeiou\s]a\b|\b[bcdfghjklmnpqrstvwxyz]*o[^aeiou\s]a\b|\b[bcdfghjklmnpqrstvwxyz]*i[^aeiou\s]a\b|\b[bcdfghjklmnpqrstvwxyz]*a[^aeiou\s]a\b|\b[a-z]*á(?:ng)?a\b|\b[a-z]*ó(?:ng)?a\b|\b[a-z]*ú(?:ng)?a\b|\b[a-z]*í(?:ng)?a\b|\b[a-z]*a(?:ng)?a\b|\b[bcdfghjklmnpqrstvwxyz]*aa\b)/g,
		function (match: any) {
			const replacements: any = {
				aa: "á ",
				oo: "ó ",
				uu: "ú ",
				ii: "í ",
				ai: "e ",
				au: "o ",
				ia: "ya ",
				"ya i": "ye ",
				oa: "wa ",
				"o a": "wa ",
				"wa i": "we ",
				nganga: "ngang ",
				ngaa: "ngá ",
				inga: "ing ",
				onga: "ong ",
				unga: "ung ",
			};

			const replaced =
				match.at(-1) === match.at(-2) && match.at(-1) === "a"
					? match.replace(/aa\b/, "á ")
					: match.replace(/a\b/, " ");

			return replacements[match]
				? replacements[match] || match
				: replaced || match;
		},
	);
}

// \b[bcdfghjklmnpqrstvwxyz]*a[^aeiou\s]a\b|
// \b[a-z]*á(?:ng)?a\b|
// \b[a-z]*ó(?:ng)?a\b|
// \b[a-z]*ú(?:ng)?a\b|
// \b[a-z]*í(?:ng)?a\b

// \b[bcdfghjklmnpqrstvwxyz]*i[^aeiou\s]a\b|
