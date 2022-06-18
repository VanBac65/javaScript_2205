function check(name, point){
    if(point > 100 || point < 0){
        console.log(`Điểm nhập sai!`)
    }
    else if(point >= 90){
        console.log(`${name} xếp loại S!`)
    }
    else if(point >= 80){
        console.log(`${name} xếp loại A!`)
    }
    else if(point >= 70){
        console.log(`${name} xếp loại B!`)
    }
    else if(point >= 60){
        console.log(`${name} xếp loại C!`)
    }
    else if(point >= 50){
        console.log(`${name} xếp loại D!`)
    }
    else if(point >= 40){
        console.log(`${name} xếp loại E!`)
    }
    else {
        console.log(`${name} không được lên lớp!`)
    }
}

check('Bắc', 90)
check('Bắc1', -10)
check('Bắc2', 101)
check('Bắc3', 76)