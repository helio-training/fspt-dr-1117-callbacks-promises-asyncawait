
//      setTimeoutSample   (50,           sayHello)

const doWork = () => {
    setTimeoutSample(5000, sayHello)
}
  
const setTimeoutSample = (milliseconds, callback) => {
    setTimeout(callback, milliseconds)
}

const sayHello = () => {
    console.log("Saying Hello")
}
