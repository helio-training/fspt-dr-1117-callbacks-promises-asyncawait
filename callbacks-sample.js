const computeSalary = (person, callback) => {
  try{
    if(person.isGood){
      callback(65000, undefined)
    } else {
      callback(25000, undefined)
    }
  } catch (e) {
    callback(null, "error")  
  }
}

const reportSalary = (myValue, err) => {
  if (err) {
    //log the error, do something about the error
  } else {
    if(myValue > 25000){
      console.log('yay!!!!')
    }
    else {
      console.log('awwwwwww, at least I am a cat and do not hold any monetary standards. :3')
    }
  }
}
const somePerson = { name: 'Cat', isGood: false }
computeSalary(somePerson, reportSalary)



const a = reportSalary        //no parens = pass function
a(2344353454)
const b = reportSalary(435)   //parens    = pass result of funciton


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

