const arr1 = [2, 6, 5, 8, 6, 9, 8,'a', 2, 3, 7]
const arr2 = [6, 6, 9, 8, 5, 2, 2,'a']

const setArr = new Set(arr1)
const setArr1 = new Set(arr2)

function check(setArr, setArr1) {
    let index = []
    for (let i of setArr1) {
        if (setArr.has(i) == true)
            index.push(i)
    }
    return index
}

console.log(check(setArr, setArr1))