const glob = require("glob");
const fs = require("fs");

var getDirectories = function (src, callback) {
    return glob.sync(src + '/**/*').map(file => callback(file))
};
const all = getDirectories('src/img', function (res) {
    if (res.endsWith('_Medium.jpg') || !res.endsWith('.jpg')) return
    res = res.replace('src/', '/')
    console.log();
    const detail = res.split('/')
    const gallery = detail[2]
    console.log(JSON.stringify(detail))
    if (detail.length < 4) return null
    const description = detail[3].match(/[0-9]*\- ?(.*) \(/)
    const date = detail[3].match(/\((.*) \- /)
    const format = detail[3].match(/ \- ([0-9x]*)\)/)
    return {
        "file": res,
        "gallerie": gallery,
        "description": description.length > 1 ? description[1] : description[0],
        "format": format ? format[1] : "",
        "date": date ? date[1] : "Inconnue",
        "en_premiere_page" : false
    }

})
    .filter(obj => obj != null);
let galleries = all.map(obj => obj.gallerie)
galleries = galleries.filter((e, i) => galleries.indexOf(e) === i).map(g => ({name: g}));
fs.writeFileSync("src/_data/paintings2.json", JSON.stringify(all, null, 2), {encoding: 'utf8'})
//fs.writeFileSync("src/_data/galleries.json", JSON.stringify(galleries, null, 2), {encoding: 'utf8'})