let array = [5, 6, 8, 9, 8, 15, 23, -5]

function sumArrayFor(arr){
    let sum = 0
    for(let i = 0; i < arr.length; i++){
        sum += arr[i]
    }
    return console.log(`Tổng của mảng : ${sum}`)
}

function sumArrayForIn(arr){
    let sum = 0
    for(let i in arr){
        sum += arr[i]
    }
    return console.log(`Tổng của mảng : ${sum}`)
}

function sumArrayForOf(arr){
    let sum = 0
    for(let i of arr){
        sum += i
    }
    return console.log(`Tổng của mảng : ${sum}`)
}

function sumArrayForEach(arr){
    let sum = 0
    arr.forEach(function(arr){
        sum += arr
    });
    return console.log(`Tổng của mảng : ${sum}`)
}

function sumArrayWhile(arr){
    let sum = 0
    let i = 0
    while( i < arr.length){
        sum += arr[i]
        i++
    }
    return console.log(`Tổng của mảng : ${sum}`)
}

sumArrayWhile(array)
sumArrayFor(array)
sumArrayForIn(array)
sumArrayForOf(array)
sumArrayForEach(array)