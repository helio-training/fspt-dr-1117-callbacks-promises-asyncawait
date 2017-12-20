let count = 1
const executor = (resolve, reject) => {
    console.log("Doing some work....")
    if (count % 2)
        resolve("All done!" + count)
    else
        reject("Big failure..." + count)
    count++
}

console.log("Running Promises.......")
const promise1 = new Promise(executor)

promise1.then((value) => {
    console.log("then", value)
    return new Promise(executor)
}).then((value) => {
    console.log("then", value)
    return new Promise(executor)
}).then((value) => {
    console.log("then", value)
}).catch((reason) => {
    console.log("catch", reason)
    return new Promise(executor)
}).then((value) =>{
    console.log("then", value + "this was follow-up from the catch")
}).catch((reason) => {
    console.log("catch", reason)
})

/////////////////////////////////////

let countCallback = 0
const doSomeWork = (callback) => {
    console.log("Doing some work...")
    countCallback++
    if (countCallback % 2){
        callback("All Done" + countCallback)
    } else {
        callback(null, "Big Failure" + countCallback)
    }
}

const doSomeWorkCallback = (result, err) => {
    if (err)
        handleError(err)
    if (result)
        success(result)
}

const success = (result) => {
    console.log("success", result)
}

const handleError = (err) => {
    console.log("error", err)
}

console.log("Running Callbacks......")
doSomeWork((result, err) => {
    doSomeWorkCallback(result, err)
    if (result)
        doSomeWork((result, err) => {
            doSomeWorkCallback(result, err)
            if (result)
                doSomeWork(doSomeWorkCallback)
            else
                doSomeWork((result, err) => {
                    doSomeWorkCallback(result + "this was follow-up from the error", err)
                })
        
        })
})

//promise()


// let myAsynchronousCode = new Promise((resolve, reject) => {
//     setTimeout(() => resolve('We did it'), 50);
//   });
  
//   mySynchronousCode();
  
//   myAsynchronousCode.then(msg => console.log(msg));
  