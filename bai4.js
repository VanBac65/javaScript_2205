let array = [5, 6, 8, 7, 5 ,6, 8, 5, 1, 2, 7, 9]

function countArray(arr){
    for( let i = 0; i < arr.length; i++){
        let check = 0;
        let count = 1;
        for( let j = 0; j < i; j++){
            if(arr[i] == arr[j]){
                check = 1
                break
            } 
        }
        if(check == 0){
            for(let k = i + 1; k < arr.length; k++){
                if(arr[i] == arr[k])
                    count++;
            }
            console.log(`Số lần xuất hiện của ${arr[i]} : ${count}`)
        }
    }
}

countArray(array)