const executor = (resolve, reject) => {
    console.log("Doing some work....")
    if (false)
        resolve("All done!")
    else
        reject("Big failure...")
}

const promise = new Promise(executor)

promise.then((result) => {
    console.log(result)
}).catch((reason) => {
    console.log(reason)
})

/////////////////////////////////////

const doSomeWork = (callback) => {
    console.log("Doing some work...")
    callback(false ? "All Done" : null, false ? null : "Big Failure")
}

const doSomeWorkCallback = (result, err) => {
    if (result)
        success(result)
    if (err)
        handleError(err)
}

const success = (result) => {
    console.log(result)
}

const handleError = (err) => {
    console.log(err)
}



//promise()


// let myAsynchronousCode = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('We did it'), 50);
//   });
  
//   mySynchronousCode();
  
//   myAsynchronousCode.then(msg => console.log(msg));
  