// Bài 6: Tìm xếp loại điểm của học sinh

// - Input: Cho vào tên học sinh, và điểm số của học sinh đó

// - Output: Tìm xếp loại hạnh kiểm và in ra dưới dạng Tên_học_sinh xếp loại loại_điểm_của_học_sinh

// Xếp loại điểm như sau:

// + 90 <= điểm <= 100: Loại S

// + 80 <= điểm < 90: Loại A

// + 70 <= điểm < 80: Loại B

// + 60 <= điểm < 70: Loại C

// + 50 <= điểm < 60: Loại D

// + 40 <= điểm < 50: Loại E

// + 0 <= điểm < 40: Bạn không được lên lớp

function check(name, point){
    if(point > 100 || point < 0){
        return  console.log(`Điểm nhập sai!`)
    }
    else if(point >= 90){
       return console.log(`${name} xếp loại S!`)
    }
    else if(point >= 80){
        return console.log(`${name} xếp loại A!`)
    }
    else if(point >= 70){
        return console.log(`${name} xếp loại B!`)
    }
    else if(point >= 60){
        return console.log(`${name} xếp loại C!`)
    }
    else if(point >= 50){
        return console.log(`${name} xếp loại D!`)
    }
    else if(point >= 40){
        return console.log(`${name} xếp loại E!`)
    }
    else {
        return console.log(`${name} không được lên lớp!`)
    }
}
check('Bắc', 555)
check('Bắc', -5)
check('Bắc', 66)
check('Bắc', 30)