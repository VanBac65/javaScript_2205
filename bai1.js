const arr = [2, 5, 6, 9, 8, 5, 22, 5, 6, 33, 51]
function sort(arr){
    arr.sort((a, b) => {
    if (a > b) {
        return 1
    }
    else if (a == b) {
        return 0
    }
    else {
        return -1
    }
})}
sort(arr)
const newArr = arr.slice(-3)
console.log(newArr)