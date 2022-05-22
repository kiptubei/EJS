let arr = [];

for(let counter = 1;counter < 100; counter++){
    if(counter%7 == 0){
        arr.push(counter);
        continue;
    }
}
console.log(arr.join(`,`));

let letter = "JB";

console.log(Object.keys(letter));

console.log(letter["0"]);

console.log(Object.keys({x: 0, y: 0, z: 2}));