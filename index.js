const csv = require('csv-parser');
const fs = require('fs');
const fastcsv = require('fast-csv');


let writerStreamCanada = fs.createWriteStream('canada.txt')
let writerStreamSerbia = fs.createWriteStream('serbia.txt')

let readerStream = fs.createReadStream('input_countries.csv')
    .pipe(csv())
    .on('data', (row) => {
        if(row.country === "Canada"){
            console.log(row)
        }
        if(row.country === "Serbia"){
            console.log(row)
        }
        return row;
    })
    .on('end', () => {
        console.log('CSV file successfully processed');
    })
    .end(writerStreamCanada.write("eee"));
