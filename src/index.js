const CharacterMap = require('./Characters.json');

/**
 * Changes weird characters to English characters
 * @param {String} String to convert
 * @returns {String}
 */
function charvert(String) {
    if (!String) new Error(`Charverter: Input is null`);

    return [...String].map(char => CharacterMap[char] || char).join('');
}

exports.charvert = charvert;