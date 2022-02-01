const array = require("../src/Charset.json");
const fs = require('fs');

function spliceArray(Array, item) {
    let index = Array.indexOf(item);
    if (index > -1) Array.splice(index, 1);
}

for (let i = 0; i < array.length; i++) {
    const current = array[i];

    if (array.includes(current)) {
        spliceArray(array, current);

        console.log("Removed");
    }
}

fs.writeFileSync('./tools/output.json', JSON.stringify(array).slice(1, -1) + ",");