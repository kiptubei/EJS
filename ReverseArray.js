function reverseArray(arr){
    let arr2 = [];

    for(let val of arr){
        arr2.unshift(val);
    }

    return arr2;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(reverseArray(arr));

function reverseArrayInPlace(arr){

    for(let i = 0;i <Math.floor(arr.length/2);i++){
        let val1 = arr[i];
        let val2 = arr[arr.length-1-i]

        arr[i]=val2;
        arr[arr.length-1-i]= val1;
    }

    return arr;
}

console.log("--------------------------");
console.log(reverseArrayInPlace(arr));

