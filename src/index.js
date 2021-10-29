const CharacterMap = require('./Charset.json');

/**
 * @param {String} String to convert
 * @returns {String} Converted string
 */
function charvert(String) {
    if (!String) new Error(`Charverter: Input is null`);

    return [...String].map(char => CharacterMap[char] || char).join('');
}

exports.charvert = charvert;