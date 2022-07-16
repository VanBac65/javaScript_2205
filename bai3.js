const arr = [5, 2, [7, -1], 3, [6, [-13, 8], 4]]
let total = 0
let nested = 1;
let dq = 1
function totalArr(arr) {

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i]) == false) {
            total += nested * arr[i]
        }
        else {
            dq++
            nested *= dq
            totalArr(arr[i])
            nested /= dq
            dq--
        }
    }
    return total
}

console.log(totalArr(arr))