const data = require('./data.json')

const filterData = data.map((item) => {
    return { firstName: item.first_name, lastName: item.last_name }
})

console.log(filterData)