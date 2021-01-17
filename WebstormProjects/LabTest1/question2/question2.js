function resolvedPromise(){
    return new Promise(function(resolve){
        setTimeout(() =>{
                let success = {'message': 'delayed success!'}

                resolve(success)
        }, 500);
    })
}

//Calling resolved Promise
resolvedPromise()
    .then(result => console.log(result))



function rejectedPromise(){
    return new Promise(function(reject){
        setTimeout(() =>{
            let error = {'error': 'delayed exception!'}
            reject(error)
        }, 500);
    })
}


//Calling rejected Promise
rejectedPromise()
    .then(result => console.log(result))

