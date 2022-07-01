const data = require('./data.json')
// const sortFirstName = data
// const sortSalary = data

let data1 = [1, 8, 6]

data1.sort((a, b) => {
    if (a > b) return 1
    else if (a == b) return 0
    return -1
})

console.log(data1)

// sortFirstName.sort((a, b) => {
//     if (a.first_name > b.first_name) return 1
//     else if (a.first_name === b.first_name){
//         if (a.salary > b.salary)
//          return 1
//     }
//     return -1
// })

// console.log(sortFirstName)

// sortSalary.sort((a, b) => {
//     if (a.salary > b.salary) return 1
//     else if (a.salary === b.salary)
//         return 0
//     return -1
// })

// console.log(sortSalary)