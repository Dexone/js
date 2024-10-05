function toUnderscore(string) {
    let start = string.split('')
    let itog = []



    start.forEach((element, index) => {
        if(element.toUpperCase() === element && index > 1 && element != Number){
            itog.push("_")
            itog.push(element.toLowerCase())
        }
        else{
            itog.push(element.toLowerCase())
        }
    });
    itog.join('')
    return itog
  }
  console.log(toUnderscore('TestController'))




  function toUnderscore(string) {
    let start = string.split('')
    let itog = []

    for(let i = 0; i<start.length; i++){
        if(start[i].toUpperCase() === start[i] && i > 1 && start[i] != Number){
            itog.push("_")
            itog.push(start[i].toLowerCase())
        }
        else{
            itog.push(start[i].toLowerCase())
        }
    }

    return itog.join('')
  }
  console.log(toUnderscore('TestController'))

//test
//   https://www.codewars.com/kata/529b418d533b76924600085d/train/javascript