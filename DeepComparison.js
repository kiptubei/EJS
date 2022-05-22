function deepEqual(a,b){
    if(a === b) return true;

    if((a == null && typeof(a)!=object) || (b == null && typeof(b)!=object)) return false

    let keysA = Object.keys(a);
    console.log("Keys A - "+keysA);


    let keysB = Object.keys(b);
    console.log("Keys B - "+keysB);

    if (keysA.length != keysB.length) return false;

    for(let key of keysA){
        if(!keysB.includes(key) || !deepEqual(a[key],b[key])){
            return false;
        }
    }

    return true;
}

let obj = {here: {is: "an"}, object: 2};
//console.log(deepEqual(obj, obj));

console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));

let sample = {val: 0, val2: 1};
