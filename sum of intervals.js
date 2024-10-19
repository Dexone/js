
//     function sumIntervals(intervals) {
//         let start = intervals





// function prohod(){
//         for (let a = 0; a < start.length; a++) { //работа с выбранным интервалом
//             for (let b = 0; b < start.length; b++) { //проход по интервалам
//                 if (start[b][0] >= start[a][0] && start[b][0] < start[a][1] && start[b][1] > start[a][1]) { //если 1 число входит в выбранный интервал, а 2 больше второго

//                     start[a][1] = start[b][1]
//                     start.splice(b, 1)
//                     prohod()
//                     break

//                 }
//                 if (start[b][0] < start[a][0] && start[b][1] <= start[a][1] && start[b][1] > start[a][0]) { //если 1 число меньше первого, а второе входит в интервал
//                     start[a][0] = start[b][0]
//                     start.splice(b, 1)
//                     prohod()
//                     break

//                 }
//                 if (start[b][0] > start[a][0] && start[b][0] < start[a][1] && start[b][1] < start[a][1] && start[b][1] > start[a][0]) { //если 1 число входит в выбранный интервал, и второе входит
//                     start.splice(b, 1)
//                     prohod()
//                     break
//                 }
//                 if (a!==b && start[a][0] === start[b][0] && start[a][1] === start[b][1]) { //если два одинаковых интервала
//                     start.splice(b, 1)
//                     prohod()
//                     break
//                 }
//             }
//         }
//     }
// prohod()

// let sum = 0
// for(let i = 0; i<start.length; i++){
//     sum = sum + (start[i][1] - start[i][0])
// }


//         return sum
//     }

//     console.log(sumIntervals([
//         [1, 5],
//         [1, 5]
//     ]))





// function sumIntervals(intervals) {
//     let start = intervals




//     let sum = 0

//     function prohod() {
//         for (let a = 0; a < start.length; a++) { //работа с выбранным интервалом
//             for (let b = 0; b < start.length; b++) { //проход по интервалам

//                 console.log(start)
//                 if (start[b][0] >= start[a][0] && start[b][0] < start[a][1] && start[b][1] > start[a][1]) { //если 1 число входит в выбранный интервал, а 2 больше второго
//                     start[a][1] = start[b][1]
//                     start.splice(b, 1)
//                     b--
//                 }

//                 if (start[b][0] < start[a][0] && start[b][1] <= start[a][1] && start[b][1] > start[a][0]) { //если 1 число меньше первого, а второе входит в интервал
//                     start[a][0] = start[b][0]
//                     start.splice(b, 1)
//                     b--
//                 }

//                 if (start[b][0] > start[a][0] && start[b][0] < start[a][1] && start[b][1] < start[a][1] && start[b][1] > start[a][0]) { //если 1 число входит в выбранный интервал, и второе входит
//                     start.splice(b, 1)
//                     b--
//                 }

//                 if (a !== b && start[a][0] === start[b][0] && start[a][1] === start[b][1]) { //если два одинаковых интервала
//                     start.splice(b, 1)
//                     b--
//                 }
//             }
//         }
//         for (let i = 0; i < start.length; i++) {
//             sum = sum + (start[i][1] - start[i][0])
//         }
//     }
//     prohod()




//     return sum
// }

// console.log(sumIntervals([

//    [10, 20],
//    [1, 6],
//    [5, 11]
// ]))


//пуш первого значения, удаление его из старта, дальше берем следующее значение из старта и сравниваем его с имеющимися в итоге (цикл по итогу), если попадает в интервал пушим значение и через else if переходим к следующему числу

//a - старт - с ним работаем
//b - итог - по нему проходим и сравниваем


// function sumIntervals(intervals) {
//     console.log(intervals)
//     let iz = intervals

//     let vvprohod = []

//     let sum = 0
//     function prohod() {
//         vvprohod.push(iz[0]) // пуш первого значения в итог
//         iz.splice(0, 1) // удаление первого значения из старта


//         for (let a = 0; a < iz.length; a++) { //работа с начальным выбранным интервалом
//             let push = false

//             for (let b = 0; b < vvprohod.length; b++) { //проход по запушенным интервалам



//                 if (iz[a][0] < vvprohod[b][0] && iz[a][1] >= vvprohod[b][0] && iz[a][1] <= vvprohod[b][1]) {
//                     vvprohod[b][0] = iz[a][0]
//                     push = true
//                     break
//                 }

//                 else if (iz[a][0] >= vvprohod[b][0] && iz[a][0] <= vvprohod[b][1] && iz[a][1] > vvprohod[b][1]) {
//                     vvprohod[b][1] = iz[a][1]
//                     push = true
//                     break
//                 }
//                 else if (iz[a][0] <= vvprohod[b][0] && iz[a][1] >= vvprohod[b][1]) {
//                     vvprohod[b][0] = iz[a][0]
//                     vvprohod[b][1] = iz[a][1]
//                     push = true
//                     break
//                 }


//             }
//             if (push === false) {

//                 vvprohod.push(iz[a])


//             }

//         }
//         for (let i = 0; i < vvprohod.length; i++) {
//             sum = sum + (vvprohod[i][1] - vvprohod[i][0])
//         }
//     }
//     prohod()


//     // iz = vvprohod
//     // vvprohod = []
//     // sum = 0
//     // prohod()
// console.log(vvprohod)
//     return sum
// }

// console.log(sumIntervals([
//     [0, 20],
//     [-100000000, 10],
//     [30, 40]
// ]))








// function sumIntervals(intervals) {

// let 
//     function prohod() {
//         intervals.forEach((element, index) => {
//             for (let i = 0; i < intervals.length; i++) {
//                 if (index != i) {
//                     if (intervals[i][0] < element[0] && intervals[i][1] >= element[0] && intervals[i][1] <= element[1]) {
//                         element[0] = intervals[i][0]
//                         intervals.splice(i, 1)
//                         prohod()
//                         break
//                     }
//                     else if (intervals[i][0] >= element[0] && intervals[i][0] <= element[1] && intervals[i][1] > element[1]) {
//                         element[1] = intervals[i][1]
//                         intervals.splice(i, 1)
//                         prohod()
//                         break
//                     }
//                     else if (intervals[i][0] >= element[0] && intervals[i][1] <= element[1]) {
//                         intervals.splice(i, 1)
//                         prohod()
//                         break
//                     }
//                 }
//             }
//         });
//     }
//     prohod()

//     console.log(intervals)

//     let sum = intervals.reduce(function (accumulator, item) {
//         accumulator = accumulator + (item[1] - item[0])
//         return accumulator
//     }, 0)
//     console.log(sum)
//     return sum


// }
// console.log(sumIntervals([
//     [ -18, -13 ], [ -10, -5 ], [ 20, 24 ]

// ]))











function sumIntervals(intervals) {
    //
    let keys = []
    let values = []




    function prohodNew() { //проход по новому числу
        //
        keys.unshift(intervals[0]) //добавление первого значения интервала в диапазон
        values.unshift([intervals[0]]) // добавление первого значения интервала в список интервалов
        intervals.splice(0,1) //удаление первого значения инетрвала

        function prohodThis(){ //проход по этому числу
            let length = values[0].length
        intervals.forEach(element => {
            if (element[0] < keys[0][0] && element[1] >= keys[0][0] && element[1] <= keys[0][1] && values[0].includes(element) === false) {
                values[0].push(element)
                //
                keys.unshift([element[0], keys[0][1]])
                keys.splice(1, 1)
                //обманка, присвоение keys[0][0] = element[0]
            }


            else if (element[0] >= keys[0][0] && element[0] <= keys[0][1] && element[1] > keys[0][1] && values[0].includes(element) === false) {

                values[0].push(element)
                //
                keys.unshift([keys[0][0], element[1]])
                keys.splice(1, 1)
                //обманка, присвоение keys[0][1] = element[1]


            }

            else if (element[0] >= keys[0][0] && element[1] <= keys[0][1] && values[0].includes(element) === false) {
                values[0].push(element)
            }

            else if (element[0] < keys[0][0] && element[1] > keys[0][1] && values[0].includes(element) === false) {
                values[0].push(element)
                //
                keys.unshift([element[0], element[1]])
                keys.splice(1, 1)
                //обманка, присвоение     keys[0][0] = element[0]   keys[0][1] = element[1]
            }
        });

        if(length < values[0].length){ //если прибавился интервал после очередного прохода  - сделать еще проход
            prohodThis()
        }
        if(length = values[0].length){ //если ничего не прибавилось после очередного прохода чистим интервалс и есть к чему переходить переходим к следующему числу
            for(let i = 0; i<intervals.length; i++){
                if(values[0].includes(intervals[i])){ //чистка интервалс
                    intervals.splice(i, 1)
                    i--
                }
            }

            if(intervals.length > 0){
            prohodNew()}
        }
    }
prohodThis()
    }
    prohodNew()

console.log(keys)
console.log(values)

let sum = 0
keys.forEach(element => {
  sum = sum + (  element[1] - element[0])
});
    return sum
}

console.log(sumIntervals([   [0, 20],
    [-100000000, 10],
    [30, 40]]))

    //12ms error
    //берется первый интервал и добавляется в keys и values, дальше сравниваем добавленный интервал с остальными интервалами и если назодится тот, который подходит, пушим его и меняем общий инетрвал в keys, проходим до конца интервала и если что-то прибавилось, приходим еще раз. потом если ничего не прибавилось пушим следующее число и проходим для него

    // https://www.codewars.com/kata/52b7ed099cdc285c300001cd




















