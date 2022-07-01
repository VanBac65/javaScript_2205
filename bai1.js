const data = require('./data.json')
const arr = []
data.forEach((item) => {
    arr.push({ firstName: item.first_name, lastName: item.last_name })
});
console.log(arr)