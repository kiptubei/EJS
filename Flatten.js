let arrays = [[1, 2, 3], [4, 5], [6]];

let ans  = arrays.reduce((flat,current)=>flat.concat(current),[]);

console.log(ans);

