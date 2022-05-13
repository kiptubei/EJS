let arr = [];

for(let counter = 1;counter < 100; counter++){
    if(counter%7 == 0){
        arr.push(counter);
        continue;
    }
}
console.log(arr.join(`,`));