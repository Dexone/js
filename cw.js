// function nextBigger(n) {


//   let deystviya = n.length - 2 //кол-во стрелок
//   let prohods = n.length - 1 //кол-во в одном проходе


// let itog = []
//   for (let a = 0; a < n.length; a++) {
//     let first = n[a]
//     let ost = n.replace(first, "")

//     for (let b = 0; b < prohods; b++) {
//       let index = ost.length - 1
//       for (let c = 0; c < deystviya; c++) {

//         itog.push(ost)

//         let promezh1 = ost[index]
//         let promezh2 = ost[index-1]
//         ost = ost.replace(promezh1, "")
//         ost = ost.replace(promezh2, "")

//        ost = ost + promezh1 + promezh2

//         index = index - 1

//       }

//     }
//   }

//   return itog
// }
// console.log(nextBigger('12345'))

function nextBigger(n) {
  console.log(n)


  for(let i = 0; i<n.length; i++){
    console.log(i)
  }


  return 
}

console.log(nextBigger('12345'))