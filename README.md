<div align=center>

# Charverter

#### (Still InDev, don't expect all the fonts to be existent yet.)

## Changes weird characters to English characters

[![Maintainability](https://api.codeclimate.com/v1/badges/b334b49a02542d226929/maintainability)](https://codeclimate.com/github/Kitsune-Softworks/Charverter/maintainability)
[![npm](https://img.shields.io/npm/v/charverter)](https://www.npmjs.com/package/charverter)
![Fonts](https://img.shields.io/badge/Fonts%20Added-55-orange)

---
<div align=left>

Converts characters in a string back to the original letter, remade from [weird-to-normal-chars](https://github.com/DavideViolante/weird-to-normal-chars).

# Installation

npm: `npm install charverter -s`

yarn: `yarn add charverter`

# Example

```js
const { charvert } = require('charverter');

console.log(charvert("Wʜᴀᴛ ɪғ ᴛʜᴇʀᴇ ᴡᴀs ᴍᴏʀᴇ?"));
// > What if there was more?

const String = "Oʀ ᴡʜᴀᴛ ɪғ ᴛʜᴇʀᴇ ᴡᴀs ɴᴏᴛʜɪɴɢ...";

const result = charvert(String);

console.log(result);
```

```js
const Charverter = require('charverter');

console.log(Charverter.charvert("A ᴛʜɪʀᴅ sᴛʀɪɴɢ!"));
// > A third string!
```