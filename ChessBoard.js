let board = ''
let size = 8;

for(i = 0; i < size;i++){
    for(j = 0; j < size;j++){
        if((i+j)%2 == 0){
            board+=" ";
        }else{
            board+="#";
        }
    }
    board += "\n"
}

console.log(board)

