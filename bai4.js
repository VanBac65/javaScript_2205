const data = require('./data.json')


// const filterData = data.map((item) => {
//     return { id: item.id, firstName: item.first_name, lastName: item.last_name, email: item.email, gender: item.gender, age: item.age, salary: item.salary }
// })
// console.log(filterData)

const obj = [
    {
        id: 1,
        first_name: "Eamon",
        last_name: "Harhoff",
        email: "eharhoff0@imageshack.us",
        gender: "Male",
        age: 76,
        salary: 18888,
    },
];

const jsonData = require("./data.json");

const toCamel = (s) => {
    return s.replace(/([_-][a-z])/gi, ($1) => {
        return $1.toUpperCase().replace("-", "").replace("_", "");
    });
};

const isArray = function (a) {
    return Array.isArray(a);
};

const isObject = function (o) {
    return o === Object(o) && !isArray(o) && typeof o !== "function";
};

const keysToCamel = function (o) {
    if (isObject(o)) {
        const n = {};

        Object.keys(o).forEach((k) => {
            n[toCamel(k)] = keysToCamel(o[k]);
        });

        return n;
    } else if (isArray(o)) {
        return o.map((i) => {
            return keysToCamel(i);
        });
    }

    return o;
};

console.log(keysToCamel(jsonData));
