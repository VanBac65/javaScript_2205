let str = 'abcsdnfdsnvwenoaklam'
let newStr = ''
function invertStr(str){
    for(let i = str.length -1; i>=0; i--){
        newStr += str[i]
    }
    return console.log(`Chuỗi sau khi đảo ngược : ${newStr}`)
}

invertStr(str)