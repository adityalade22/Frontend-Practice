let ans = "iron man";
let start = prompt("type 's' to start or 'q' to quit:")
if(start=="s"){
    let guess = prompt("Guess the Movie:");
    
    if(guess==ans){
            console.log("Congrats you did it!!");
        }
    while (guess != ans) {
        guess = prompt("Wrong Answer try again:");
        if(guess=="q"){
            console.log("You Exit the game!!");
            break;
        }
        if(guess==ans){
            console.log("Congrats you did it!!");
        }
    }
}
else {
    console.log("You Exit the game!!");
}


