function findEvenIndex(arr) {



    for(let a = 0; a<arr.length; a++){ //смена порядков

        for(let b = 0; b<a; b++){ //проход слева на право, каждый раз проходит на 1 больше
            // console.log(b)
        }

        for(let c = arr.length -1 ; c>a+1; c--){ //проход справа налево, каждый раз на 1 меньше
            console.log(c)
        }

    }


}



console.log(findEvenIndex([1, 2, 3, 4, 5, 6]))
// console.log(findEvenIndex([1, 2, 3, 4, 3, 2, 1]))
