// Bài 3:

// Có hai đội thể dục là Dolphins và Koalas. Họ cạnh tranh với từng 3 lần khác. Người chiến thắng với điểm số trung bình cao nhất sẽ giành được cúp!

// Yêu cầu:

// - Tính điểm trung bình của mỗi đội

// - So sánh điểm trung bình của đội để xác định đội chiến thắng trong cuộc thi và in ra đội chiến thắng. Đừng quên rằng có thể có một trận hòa, vì vậy hãy kiểm tra điều đó (hòa có nghĩa là họ có cùng điểm trung bình)

// - Yêu cầu về số điểm tối thiểu là 100. Với quy tắc này, một đội chỉ thắng nếu có số điểm cao hơn đội còn lại, đồng thời phải đạt ít nhất 100 điểm. Với yêu cầu này hãy tìm đội thắng. Nếu không có đội thắng hãy in ra thông báo hợp lệ (Không có đội thắng cuộc)

// - Điểm số tối thiểu cũng áp dụng cho một trận hòa! Vì vậy kết quả hòa chỉ xảy ra khi cả hai đội có số điểm bằng nhau và cả hai đều có số điểm lớn hơn hoặc bằng 100 điểm. Nếu không, không đội nào giành được cúp

// Data test:

// + Data 1: Dolphins có điểm là 96, 108 và89. Koalas có điểm là 88, 91 và 110

// + Data Bonus 1: Dolphins có điểm là 97, 112 và 101. Koalas có điểm là 109, 95 và123

// + Data Bonus 2: Dolphins có điểm là 97, 112 và 101. Koalas có điểm là 109, 95 và 106

function average(name, a, b, c){
    const avg = ((a + b + c) / 3).toFixed(2);
    console.log(`\tĐiểm trung bình đội ${name} : ${avg}`);
    return avg;
}

function checkPoint(dolphins, koalas) {
    if(dolphins < 100 && koalas < 100) {
       return 'Hai đội không hợp lệ!';
    }
    else if(dolphins > koalas){
        return 'Dolphins chiến thắng!';
    }
    else if(dolphins < koalas){
        return 'Koalas chiến thắng!';
    }
    else {
        return 'Hai đội hòa!';
    }
}
let dolphins1 = average('dolphins', 96, 108, 89);
let dolphins2 = average('dolphins', 97, 112, 101);
let dolphins3 = average('dolphins', 97, 112, 101);
let koalas1 = average('koalas', 88, 91, 110);
let koalas2 = average('koalas', 109, 95, 123);
let koalas3 = average('koalas', 109, 95, 106);
console.log(`Data 1 : ${checkPoint(dolphins1, koalas1)}`);
console.log(`Data 2 : ${checkPoint(dolphins2, koalas2)}`);
console.log(`Data 3 : ${checkPoint(dolphins3, koalas3)}`);