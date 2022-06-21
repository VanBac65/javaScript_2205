let object = {}
let object1 = {
    name : 'Bắc',
    age : '22',
}

function checkObj(obj){
    if(Object.entries(obj).length == 0){
        return console.log(`object rỗng!`)
    }
    else return console.log(obj)
}

checkObj(object)
checkObj(object1)