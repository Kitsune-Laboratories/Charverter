<!-- [![npm](https://img.shields.io/npm/v/charverter)](https://www.npmjs.com/package/charverter) ![Fonts](https://img.shields.io/badge/Fonts%20Added-73-orange) -16M -->

Converts characters in a string back to the original letter, credit to [weird-to-normal-chars](https://github.com/DavideViolante/weird-to-normal-chars).


# Installation

npm: `npm install charverter`

yarn: `yarn add charverter`

# Examples

```js
const { charvert } = require('charverter');

console.log(charvert("𝔚𝔯𝔦𝔱𝔱𝔢𝔫 𝔴𝔞𝔯𝔫𝔦𝔫𝔤𝔰 𝔦𝔫 𝔦𝔫𝔰𝔱𝔯𝔲𝔠𝔱𝔦𝔬𝔫 𝔪𝔞𝔫𝔲𝔞𝔩𝔰 𝔞𝔯𝔢 𝔴𝔬𝔯𝔱𝔥𝔩𝔢𝔰𝔰 𝔰𝔦𝔫𝔠𝔢 𝔯𝔞𝔟𝔟𝔦𝔱𝔰 𝔠𝔞𝔫'𝔱 𝔯𝔢𝔞𝔡."));
// > Written warnings in instruction manuals are worthless since rabbits can't read.
```

```js
const String = "𝕊𝕙𝕖 𝕠𝕟𝕝𝕪 𝕡𝕒𝕚𝕟𝕥𝕤 𝕨𝕚𝕥𝕙 𝕓𝕠𝕝𝕕 𝕔𝕠𝕝𝕠𝕣𝕤; 𝕤𝕙𝕖 𝕕𝕠𝕖𝕤 𝕟𝕠𝕥 𝕝𝕚𝕜𝕖 𝕡𝕒𝕤𝕥𝕖𝕝𝕤.";
const result = charvert(String);

console.log(result);
// > She only paints with bold colors; she does not like pastels.
```

```js
const Charverter = require('charverter');

console.log(Charverter.charvert("Ｔｈｅ ｅｆｆｉｃｉｅｎｃｙ ｗｉｔｈ ｗｈｉｃｈ ｈｅ ｐａｉｒｅｄ ｔｈｅ ｓｏｃｋｓ ｉｎ ｔｈｅ ｄｒａｗｅｒ ｗａｓ ｑｕｉｔｅ ａｄｍｉｒａｂｌｅ．！"));
// > The efficiency with which he paired the socks in the drawer was quite admirable.!
```
