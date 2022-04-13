const Charset = require('./Charset.json');

/**
 * @param {String} String
 * @returns {String} Converted string
 */
exports.charvert = (String) => {
    if (!String) new Error(`Charverter input null`);

    return [...String].map(char => Charset[char] || char).join('');
};