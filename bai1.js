let str = 'abcsdnfdsnvwenoaklam'
let count = 0

function countText(str){
    for(let i of str){
        if(i == 'a' || i == 'e' || i == 'l' || i == 'o' || i == 'u'){
            count++;
        }
    }
    return console.log(`Số nguyên âm trong chuỗi : ${count}`)
}

countText(str)