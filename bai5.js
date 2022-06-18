function operation(a, b, op){
    if(op == 'add'){
        return a + b;
    }
    else if(op == 'subtract'){
        return a - b;
    }
    else if(op == 'multiply'){
        return a * b;
    }
    else if(op == 'divide'){
        return a / b;
    }
    else if(op == 'modulus'){
        return a % b;
    }
}

console.log(`Data 1 : `)
console.log(`Kết quả phép tính : ${operation(78, 97, 'add')}`)

console.log(`Data 2 : `)
console.log(`Kết quả phép tính : ${operation(87, -99, 'subtract')}`)

console.log(`Data 3 : `)
console.log(`Kết quả phép tính : ${operation(679, 5, 'multiply')}`)

console.log(`Data 4 : `)
console.log(`Kết quả phép tính : ${operation(54, 3, 'divide')}`)

console.log(`Data 5 : `)
console.log(`Kết quả phép tính : ${operation(223, 78, 'modulus')}`)