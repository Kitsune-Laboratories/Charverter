const Charset = require("./Charset.json");

/**
 * @param {String} String
 * @returns {String} Converted string
 */
exports.charvert = (String) => {
	if (typeof String !== "string") new Error(`Charverter input must be a string, got ${typeof String}`);

	return [...String].map(char => Charset[char] || char).join("");
};