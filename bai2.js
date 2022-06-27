const data =require('./data.json')
const arr = []
    data.forEach((item) => {
        if (item.gender === 'Male' && item.age < 40)
            arr.push(item)
    });
 console.log(arr)
