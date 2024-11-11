function findUniq(arr) {
    console.log(arr)
    let start = []
    arr.forEach(element => {
        start.push([])
        for (let a = 0; a < element.length; a++) {
            if (start[start.length - 1].includes(element[a].toLowerCase()) === false) {
                start[start.length - 1].push(element[a].toLowerCase())
            }
            start[start.length - 1].sort()
        }
    });

    let itog = []

    start.forEach(element => {
        itog.push(element)
    });

    itog.sort()
    // console.log(itog)
    // let index
    // if (itog[0] === itog[1]) {
    //     index = start.indexOf(itog[itog.length - 1])
    // }
    // console.log(itog[0])
    // console.log(itog[1])
    // if (itog[itog.length - 1] === itog[itog.length - 2]) {
    //     index = start.indexOf(itog[0])

    // }



    // return arr[index]
    let obj = {}

    itog.forEach(element => {
        if (obj[element] === undefined) {
            obj[element] = 0
        }
        obj[element] = obj[element] + 1
    });

    console.log(obj[itog[0]])


    return obj



}




console.log(findUniq([
    ['a'], ['a'],
    ['a'], ['a'],
    ['a'], ['a'],
    ['b']
]))