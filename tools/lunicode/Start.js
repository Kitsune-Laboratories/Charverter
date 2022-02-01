const l = new require('lunicode'), c = 'A a B b C c D d E e F f G g H h I i J j K k L l M m N n O o P p Q q R r S s T t U u V v W w X x Y y Z z 0 1 2 3 4 5 6 7 8 9 ` ~ ! @ # $ % ^ & * ( ) _ + - = { } [ ] : ; " \' , . < > / ?', o = [];
const g = require('fs');

for (f in l.tools) {
    const e = c.split(' ');
    for (let n = 0; n < e.length; n++) o[n] = l.tools[f].encode(e[n])
    g.writeFileSync(`./tools/scraper/output-${Date.now()}.json`, JSON.stringify(o).slice(1, -1));
}