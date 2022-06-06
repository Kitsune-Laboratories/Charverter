const fs = require("fs");
const contents = fs.readFileSync("./tools/formatter/Input.json", "utf8");
const Data = JSON.parse(contents);
const Alphabet = {};
var Character = 1;

//? A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 0 1 2 3 4 5 6 7 8 9 ` ~ ! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; " ' , . < > / ?
//? AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz0123456789`~!@#$%^&*()_+-={}[]:;\"',.<>/?
//? A|a|B|b|C|c|D|d|E|e|F|f|G|g|H|h|I|i|J|j|K|k|L|l|M|m|N|n|O|o|P|p|Q|q|R|r|S|s|T|t|U|u|V|v|W|w|X|x|Y|y|Z|z|0|1|2|3|4|5|6|7|8|9|`|~|!|@|#|$|%|^|&|*|(|)|_|+|-|=|{|}|[|]|:|;|"|'|,|.|<|>|/|?

//! no good
for (var Letter of Data) {
	try {
		switch (Character) {
		case 1:
			Alphabet[Letter] = "A";
			break;
		case 2:
			Alphabet[Letter] = "a";
			break;
		case 3:
			Alphabet[Letter] = "B";
			break;
		case 4:
			Alphabet[Letter] = "b";
			break;
		case 5:
			Alphabet[Letter] = "C";
			break;
		case 6:
			Alphabet[Letter] = "c";
			break;
		case 7:
			Alphabet[Letter] = "D";
			break;
		case 8:
			Alphabet[Letter] = "d";
			break;
		case 9:
			Alphabet[Letter] = "E";
			break;
		case 10:
			Alphabet[Letter] = "e";
			break;
		case 11:
			Alphabet[Letter] = "F";
			break;
		case 12:
			Alphabet[Letter] = "f";
			break;
		case 13:
			Alphabet[Letter] = "G";
			break;
		case 14:
			Alphabet[Letter] = "g";
			break;
		case 15:
			Alphabet[Letter] = "H";
			break;
		case 16:
			Alphabet[Letter] = "h";
			break;
		case 17:
			Alphabet[Letter] = "I";
			break;
		case 18:
			Alphabet[Letter] = "i";
			break;
		case 19:
			Alphabet[Letter] = "J";
			break;
		case 20:
			Alphabet[Letter] = "j";
			break;
		case 21:
			Alphabet[Letter] = "K";
			break;
		case 22:
			Alphabet[Letter] = "k";
			break;
		case 23:
			Alphabet[Letter] = "L";
			break;
		case 24:
			Alphabet[Letter] = "l";
			break;
		case 25:
			Alphabet[Letter] = "M";
			break;
		case 26:
			Alphabet[Letter] = "m";
			break;
		case 27:
			Alphabet[Letter] = "N";
			break;
		case 28:
			Alphabet[Letter] = "n";
			break;
		case 29:
			Alphabet[Letter] = "O";
			break;
		case 30:
			Alphabet[Letter] = "o";
			break;
		case 31:
			Alphabet[Letter] = "P";
			break;
		case 32:
			Alphabet[Letter] = "p";
			break;
		case 33:
			Alphabet[Letter] = "Q";
			break;
		case 34:
			Alphabet[Letter] = "q";
			break;
		case 35:
			Alphabet[Letter] = "R";
			break;
		case 36:
			Alphabet[Letter] = "r";
			break;
		case 37:
			Alphabet[Letter] = "S";
			break;
		case 38:
			Alphabet[Letter] = "s";
			break;
		case 39:
			Alphabet[Letter] = "T";
			break;
		case 40:
			Alphabet[Letter] = "t";
			break;
		case 41:
			Alphabet[Letter] = "U";
			break;
		case 42:
			Alphabet[Letter] = "u";
			break;
		case 43:
			Alphabet[Letter] = "V";
			break;
		case 44:
			Alphabet[Letter] = "v";
			break;
		case 45:
			Alphabet[Letter] = "W";
			break;
		case 46:
			Alphabet[Letter] = "w";
			break;
		case 47:
			Alphabet[Letter] = "X";
			break;
		case 48:
			Alphabet[Letter] = "x";
			break;
		case 49:
			Alphabet[Letter] = "Y";
			break;
		case 50:
			Alphabet[Letter] = "y";
			break;
		case 51:
			Alphabet[Letter] = "Z";
			break;
		case 52:
			Alphabet[Letter] = "z";
			break;
		case 53:
			Alphabet[Letter] = "0";
			break;
		case 54:
			Alphabet[Letter] = "1";
			break;
		case 55:
			Alphabet[Letter] = "2";
			break;
		case 56:
			Alphabet[Letter] = "3";
			break;
		case 57:
			Alphabet[Letter] = "4";
			break;
		case 58:
			Alphabet[Letter] = "5";
			break;
		case 59:
			Alphabet[Letter] = "6";
			break;
		case 60:
			Alphabet[Letter] = "7";
			break;
		case 61:
			Alphabet[Letter] = "8";
			break;
		case 62:
			Alphabet[Letter] = "9";
			break;
		case 63:
			Alphabet[Letter] = "`";
			break;
		case 64:
			Alphabet[Letter] = "~";
			break;
		case 65:
			Alphabet[Letter] = "!";
			break;
		case 66:
			Alphabet[Letter] = "@";
			break;
		case 67:
			Alphabet[Letter] = "#";
			break;
		case 68:
			Alphabet[Letter] = "$";
			break;
		case 69:
			Alphabet[Letter] = "%";
			break;
		case 70:
			Alphabet[Letter] = "^";
			break;
		case 71:
			Alphabet[Letter] = "&";
			break;
		case 72:
			Alphabet[Letter] = "*";
			break;
		case 73:
			Alphabet[Letter] = "(";
			break;
		case 74:
			Alphabet[Letter] = ";";
			break;
		case 75:
			Alphabet[Letter] = "_";
			break;
		case 76:
			Alphabet[Letter] = "+";
			break;
		case 77:
			Alphabet[Letter] = "-";
			break;
		case 78:
			Alphabet[Letter] = "=";
			break;
		case 79:
			Alphabet[Letter] = "{";
			break;
		case 80:
			Alphabet[Letter] = "}";
			break;
		case 81:
			Alphabet[Letter] = "[";
			break;
		case 82:
			Alphabet[Letter] = "]";
			break;
		case 83:
			Alphabet[Letter] = ":";
			break;
		case 84:
			Alphabet[Letter] = ";";
			break;
		case 85:
			Alphabet[Letter] = "\"";
			break;
		case 86:
			Alphabet[Letter] = "'";
			break;
		case 87:
			Alphabet[Letter] = ",";
			break;
		case 88:
			Alphabet[Letter] = ".";
			break;
		case 89:
			Alphabet[Letter] = "<";
			break;
		case 90:
			Alphabet[Letter] = ">";
			break;
		case 91:
			Alphabet[Letter] = "/";
			break;
		case 92:
			Alphabet[Letter] = "?";
			break;

		default:
			console.log(`ERROR: Number ${Character}`);
		}
	} finally {
		Character++;
	}
}

fs.writeFileSync("./tools/formatter/output.json", JSON.stringify(Alphabet).slice(1, -1) + ",");

const date = new Date();
console.log(`\n\n\nWritten\n - ${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}\n\n\n`);