function countBs(name){
    let count = 0;
    for(let i = 0; i< name.length; i++){
        if(name[i] == "B"){
            count++
        }
    }
    return count;
}

function countChar(name, letter){
    let count = 0;
    for(let i = 0; i< name.length; i++){
        if(name[i] == letter){
            count++
        }
    }
    return count;
}

function countDs(string) {
    return countChar(string, "d");
  }


console.log(countBs("BBC"));
// → 2
console.log(countChar("kakkerlak", "k"));
// → 4


console.log(countDs("doldrums"));