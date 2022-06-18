function average(a, b, c){
    return ((a + b + c) / 3).toFixed(2);
}

let dolphins1 = average(96, 108, 89);
let dolphins2 = average(97, 112, 101);
let dolphins3 = average(97, 112, 101);
let koalas1 = average(88, 91, 110);
let koalas2 = average(109, 95, 123);
let koalas3 = average(109, 95, 106);

console.log(`Data 1 :`);
console.log(`   Điểm trung bình đội Dolphins : ${dolphins1}`);
console.log(`   Điểm trung bình đội Koalas : ${koalas1}`);

console.log(`Data 2 :`);
console.log(`   Điểm trung bình đội Dolphins : ${dolphins2}`);
console.log(`   Điểm trung bình đội Koalas : ${koalas2}`);

console.log(`Data 3 :`);
console.log(`   Điểm trung bình đội Dolphins : ${dolphins3}`);
console.log(`   Điểm trung bình đội Koalas : ${koalas3}`);

function checkPoint(dolphins, koalas) {
    if(dolphins < 100 && koalas < 100) {
        console.log(`   Hai đội không hợp lệ!`);
    }
    else if(dolphins > koalas){
        console.log(`   Dolphins chiến thắng!`);
    }
    else if(dolphins < koalas){
        console.log(`   Koalas chiến thắng!`);
    }
    else {
        console.log(`   Hai đội hòa!`);
    }
}
console.log(`================================================`)
console.log(`Data 1 :`);
checkPoint(dolphins1, koalas1);
console.log(`Data 2 :`);
checkPoint(dolphins2, koalas2);
console.log(`Data 3 :`);
checkPoint(dolphins3, koalas3);