let val = ``;

for(let counter = 1; counter <= 100; counter++){
    if(counter%3 == 0){
        val = val + 'Fizz';
    }

    if( counter%5 == 0){
        val = val + 'Buzz';
    }

    if(val == ``)
    {
        console.log(counter);
        continue;
    }
    
    console.log(val);
    val = ``;
}