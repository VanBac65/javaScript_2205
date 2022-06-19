// Bài 5: Thực hiện các phép tính số học trên hai số

// - Input (đầu vào): Cho 2 số và phép tính cần thực hiện

// + add: cộng ( + )

// + subtract: trừ ( - )

// + multiply: nhân ( * )

// + divide: chia hết ( / )

// + modulus: Chia lấy dư ( % )

// - Output (đầu ra): Thực hiện phép tính với hai số

// Data test:

// + Data 1: a = 78, b = 97, op (phép tính): add => thì sẽ phải thực hiện cộng 2 số lại với nhau

// + Data 2: a = 87, b = -99, op: subtract

// + Data 3: a = 679, b = 5, op: multiply

// + Data 4: a = 54, b = 3, op: divide

// + Data 5: a = 223, b = 78, op: modulus

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

console.log(`Data 1 : \n\tKết quả phép tính : ${operation(78, 97, 'add')}`)
console.log(`Data 2 : \n\tKết quả phép tính : ${operation(87, -99, 'subtract')}`)
console.log(`Data 3 : \n\tKết quả phép tính : ${operation(679, 5, 'multiply')}`)
console.log(`Data 4 : \n\tKết quả phép tính : ${operation(54, 3, 'divide')}`)
console.log(`Data 5 : \n\tKết quả phép tính : ${operation(223, 78, 'modulus')}`)