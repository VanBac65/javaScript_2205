function bmi(mass, height) {
    return mass / (height ** 2)
}
let bmiMarks1 = bmi(78, 1.69).toFixed(2);
let bmiMarks2 = bmi(85, 1.76).toFixed(2);
let bmiJohn = bmi(92, 1.95).toFixed(2);
let bmiHarry = bmi(85, 1.76).toFixed(2);
console.log(`BMI của Marks data1 = ${bmiMarks1}`);
console.log(`BMI của John data1 = ${bmiJohn}`);
console.log(`BMI của Marks data2 = ${bmiMarks2}`);
console.log(`BMI của Harry data2 = ${bmiHarry}`);

function compareData1(bmiMarks1, bmiJohn, bmiMark2, bmiHarry) {
    if(bmiMarks1 > bmiJohn){
        console.log(`Marks ${bmiMarks1} BMI is higher than John ${bmiJohn} BMI!`)
    }
    else if(bmiMarks1 < bmiJohn){
        console.log(`John ${bmiJohn} BMI is higher than Marks ${bmiMarks1} BMI!`)
    }
    else {
        console.log(`John ${bmiJohn} BMI as tall as than Marks ${bmiMarks1} BMI!`)
    }

    if(bmiMarks2 > bmiHarry){
        console.log(`Mark ${bmiMarks2} BMI is higher than Harry ${bmiHarry} BMI!`)
    }
    else if(bmiMarks2 < bmiHarry){
        console.log(`Harry ${bmiHarry} BMI is higher than Marks ${bmiMarks2} BMI!`)
    }
    else {
        console.log(`Marks ${bmiMarks2} BMI as tall as than Harry ${bmiHarry} BMI!`)
    }
}

compareData1(bmiMarks1, bmiJohn, bmiMarks1, bmiHarry);