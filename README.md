<div align="center">
<img height="120" src="./charverter.png">

# Converting weird characters in a string back to normal
</div>

# Installation

yarn
```sh
$ yarn add charverter
```

npm
```sh
$ npm install charverter
```

# Example

```js
const { charvert } = require('charverter');

console.log(charvert("𝔚𝔯𝔦𝔱𝔱𝔢𝔫 𝔴𝔞𝔯𝔫𝔦𝔫𝔤𝔰 𝔦𝔫 𝔦𝔫𝔰𝔱𝔯𝔲𝔠𝔱𝔦𝔬𝔫 𝔪𝔞𝔫𝔲𝔞𝔩𝔰 𝔞𝔯𝔢 𝔴𝔬𝔯𝔱𝔥𝔩𝔢𝔰𝔰 𝔰𝔦𝔫𝔠𝔢 𝔯𝔞𝔟𝔟𝔦𝔱𝔰 𝔠𝔞𝔫'𝔱 𝔯𝔢𝔞𝔡."));
// > Written warnings in instruction manuals are worthless since rabbits can't read.
```