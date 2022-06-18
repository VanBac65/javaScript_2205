function equation(a, b, c){
    let x = (c - b) / a;
    return x.toFixed(2);
}

function data(a, b, c) {
    if(a == 0 && b == 0 && c == 0 ) {
        console.log(`Phương trình vô số nghiệm`);
    }
    else if(a == 0 && b != 0 && c == 0) {
        console.log(`Phương trình vô nghiệm`);
    }
    else {
        console.log(`Nghiệm của phương trình : x = ${equation(a, b, c)}`)
    } 
}

data(-2, -9, -3);
data(5, 7, 9);