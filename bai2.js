// Bài 2: Giải phương trình bậc 1:

// - Input: Cho phương trình bậc 1 dạng ax + b = c (a, b, c là tham số đầu vào)

// - Output: Tìm x

// Data test:

// + Data 1: -2x – 9 = -3

// + Data 2: 5x + 7 = 9

function checkEquation(a, b, c){
    const x = (c - b) / a;
    return x.toFixed(2);
}

function checkData(a, b, c) {
    if(a == 0 && b == 0 && c == 0 ) {
        console.log(`Phương trình vô số nghiệm`);
    }
    else if(a == 0 && b != 0 && c == 0) {
        console.log(`Phương trình vô nghiệm`);
    }
    else {
        console.log(`Nghiệm của phương trình : x = ${checkEquation(a, b, c)}`)
    } 
}

checkData(-2, -9, -3);
checkData(5, 7, 9);