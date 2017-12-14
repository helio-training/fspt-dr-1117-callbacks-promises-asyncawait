let computeSalary = (person, callback) => {
   if(person.isGood){
     callback(65000)
   }
   else {
    callback(25000)
  }
}

let theCallback = (myValue) => {
  if(myValue > 25000){
    console.log('yay!!!!')
  }
  else {
    console.log('awwwwwww, at least I am a cat and do not hold any monetary standards. :3')
  }
}

const a = theCallback        //no parens = pass function
a(2344353454)
const b = theCallback(435)   //parens    = pass result of funciton

computeSalary({
  name: 'Cat',
  isGood: false
}, theCallback)

console.log(1)
console.log(2)
//...3
//Result of callback
//...99
console.log(100)


let mySynchronousCode = () => {
    let number = 1;
    while(number < 1000) {
      number++;
      console.log(number++)
    }
}

let i = 0
const myTimerCallback = () => {
    i++
    console.log(i)
    const span = document.querySelector("span")
    span.innerHTML = i
    span.style.opacity = i / 100
    if (i !== 100){
        setTimeout(myTimerCallback, 50)
    } else {
        span.innerHTML = "Loading done"
    }
}

const startTimer = () => {
    setTimeout(myTimerCallback, 50)
}

