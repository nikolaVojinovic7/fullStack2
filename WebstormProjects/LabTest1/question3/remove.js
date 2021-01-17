let fs = require('fs');
let rimraf = require("rimraf");


let fileName = "";
for(let x=0; x < 10; x++){
    fileName = `log${x}.txt`
    fs.unlink('./log/'+fileName, function (err) {
    });
    console.log(fileName);
}

let dir = './log';
if (fs.existsSync(dir)){
    rimraf("./log", function () { console.log("done"); });
}