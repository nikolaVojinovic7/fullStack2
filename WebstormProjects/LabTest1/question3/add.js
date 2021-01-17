let fs = require('fs');

let dir = './log';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

let fileName = "";
for(let x=0; x < 10; x++){
    fileName = `log${x}.txt`
    fs.writeFile('./log/'+fileName, ' This is my text.', function (err) {
        if (err) throw err;
    });
    console.log(fileName);
}




