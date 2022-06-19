// Bài 1:

// Cho công thức tính BMI = mass / height ** 2 = mass / (height * height) với mass là khối lượng, height là cân nặng

// - Input: Cho cân nặng, chiều cao của 2 người

// - Output:

// + Tính BMI của từng người

// + Ai BMI cao hơn sẽ in ra câu: “A BMI (số BMI của A) is higher than B (số BMI của B)!” với A, B là tên của 2 người bất kì

// Data test:

// + Data 1: Marks nặng 78 kg và cao 1.69 m. John nặng 92 kg và cao 1.95 m

// + Data 2: Marry nặng 95 kg và cao 1.88 m. Harry nặng 85 kg và cao 1.76 m

function bmi(name, mass, height) {
    const result = (mass / (height ** 2)).toFixed(2);
    console.log(`BMI của ${name} = ${result}`);
    return result;
}
let bmiMarks1 = bmi('Mark', 78, 1.69);
let bmiMarks2 = bmi('Mark', 85, 1.76);
let bmiJohn = bmi('John', 92, 1.95);
let bmiHarry = bmi('Harry', 85, 1.76);

function compareData(bmiMarks, bmiJohn) {
    if(bmiMarks > bmiJohn){
        console.log(`Marks ${bmiMarks} BMI is higher than John ${bmiJohn} BMI!`)
    }
    else if(bmiMarks < bmiJohn){
        console.log(`John ${bmiJohn} BMI is higher than Marks ${bmiMarks} BMI!`)
    }
    else {
        console.log(`John ${bmiJohn} BMI as tall as than Marks ${bmiMarks} BMI!`)
    }
}

compareData(bmiMarks1, bmiJohn);
compareData(bmiMarks2, bmiHarry);