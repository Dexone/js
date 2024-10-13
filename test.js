function sumIntervals(intervals) {
    // let itog = []
    // for(let a = 0; a<intervals.length; a++){
    //     for(let b = 0; b<itog.length; b++){
    //         if(itog[b][0] < intervals[a][0] && itog[b][1] > intervals[a][0])
    //     }
    // }
    let start = intervals

    // for(let a = 0; a<start.length; a++){

    //     for(let b = 0; b<start.length; b++){

    //     }

    // }


    let obj = {}


    start.forEach(element => {
        for(let i = element[0]; i<element[1]; i++){
            obj[i] = 1
        }
    });

    return obj
}

console.log(sumIntervals([
[0, 20],
[-100000000, 10],
[30, 40]
]))