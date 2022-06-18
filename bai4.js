function checkMax(a, b){
    if(a > b){
        console.log(`${a} là số lớn nhất!`)
    }
    else if(a < b){
        console.log(`${b} là số lớn nhất!`)
    }
    else {
        console.log(`Hai số bằng nhau!`)
    }
}

console.log(`Data 1 : `)
checkMax(12, -9)
console.log(`Data 2 : `)
checkMax(6, 6)
console.log(`Data 3 : `)
checkMax(-189, -987)
console.log(`Data 4 : `)
checkMax(-78, 56)
console.log(`Data 5 : `)
checkMax(9.5, 7.9)