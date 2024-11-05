function solution(words) {

    let start = []

    words.forEach(element => {
        start.push(element[0] + element[element.length - 1])
    });
console.log(start)



    let itog = []


    function prohod() {

        itog = []
        itog.push(start[0])
        start.splice(0, 1)

        for(let i = 0; i<start.length; i++){
            if(start[i][start[i].length -1] === itog[0][0]){ //добавление в начало
                itog.unshift(start[i])
                start.splice(i,1)
                i--
            }
            else if(start[i][0] === itog[itog.length - 1][itog[itog.length - 1].length -1]){
                itog.push(start[i])
                start.splice(i,1)
                i--
            }
        }


    }
    prohod()
console.log(start)
console.log(itog)
    return 
}

console.log(solution(["screen", "desire", "theater", "excess", "night"]))