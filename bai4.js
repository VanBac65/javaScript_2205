// Bài 4: Tìm số lớn nhất trong hai số

// - Input: Cho hai số

// - Tìm số lớn nhất trong hai số và in ra thông báo hợp lý dưới dạng ‘N là số lớn nhất’ với N là số lớn nhất

// Data test:

// + Data 1: a = 12, b = -9

// + Data 2: a = 6, b = 6

// + Data 3: a = -189, b = -987

// + Data 4: a = -78, b = 56

// + Data 5: a = 9.5, b = 7.9

function checkMax(a, b){
    if(a > b){
       return console.log(`${a} là số lớn nhất!`)
    }
    else if(a < b){
        return console.log(`${b} là số lớn nhất!`)
    }
    else {
        return console.log(`Hai số bằng nhau!`)
    }
}

checkMax(12, -9)
checkMax(6, 6)
checkMax(-189, -987)
checkMax(-78, 56)
checkMax(9.5, 7.9)
