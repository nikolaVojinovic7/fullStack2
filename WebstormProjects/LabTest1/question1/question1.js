const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];

function lowerCase(item){
    return item.toLowerCase();
}

function makeUpperCase(input){
    return new Promise(function (resolve) {
        let arrayResult = [];
        let count = 0;

        for(let x=0 ; x < input.length; x++){
            if(typeof input[x] === "string") {
                arrayResult[count] = input[x];
                count++;
            }
        }
        resolve(arrayResult.map(lowerCase));
    });
}


makeUpperCase(mixedArray)
    .then((result) => console.log(result))

