let asyncCount = 1
const asyncExecutor = (resolve, reject) => {
    console.log("Doing some work....")
    if (asyncCount % 2)
        resolve("All done!" + asyncCount)
    else
        reject("Big failure..." + asyncCount)
        asyncCount++
}

console.log("Running Promises.......")

const runAsync = async () => {
    const result1 = await new Promise(asyncExecutor)
    console.log("awaited1", result1)
    try {
        const result2 = await new Promise(asyncExecutor)
        console.log("awaited2", result2)
        const result3 = await new Promise(asyncExecutor)
        console.log("awaited3", result3)    
    } catch (e) {
        console.log("awaited2 error", e)
        const result4 = await new Promise(asyncExecutor)
        console.log("awaited4", result4 + "this was follow-up from the error")    
    }
}

let syncCount = 0
const doCounting = () => {
    console.log("Doing some work....")
    syncCount++
    
    if (syncCount % 2)
        return "All done!" + syncCount
    else
        throw new Error("Big failure..." + syncCount)
}

// const runSync = () => {
//     const result1 = doCounting()
//     console.log("ran1", result1)
//     try {
//         const result2 = doCounting()
//         console.log("ran2", result2)
//         const result3 = doCounting()
//         console.log("ran3", result3)    
//     } catch (e) {
//         console.log("ran2 error", e)
//         const result4 = doCounting()
//         console.log("ran4", result4 + "this was follow-up from the error")    
//     }
// }

// console.log("runSync.....")
// runSync()

const runSyncAsAsync = async () => {
    const result1 = await doCounting()
    console.log("ranAsAsync1", result1)
    try {
        const result2 = await doCounting()
        console.log("ranAsAsync2", result2)
        const result3 = await doCounting()
        console.log("ranAsAsync3", result3)    
    } catch (e) {
        console.log("ranAsAsync2 error", e)
        const result4 = await doCounting()
        console.log("ranAsAsync4", result4 + "this was follow-up from the error")    
    }
}

console.log("runSyncAsAsync.....")
runSyncAsAsync()