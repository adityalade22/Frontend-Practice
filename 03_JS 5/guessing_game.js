let max = prompt("Enter the max number for game:");

const answer = Math.floor(Math.random() * max) + 1;

let guess = prompt("Enter the Number:");
let count = 1;
while(true){
    if (guess == "quit") {
        console.log("Successfully quit the game");
        break
    }

    if(guess == answer){
        console.log("Congratulations you guess the number i.e", answer);
        prompt("Congratulations you guess the number i.e", answer);
        console.log("you take total ", count)
        break;
    }
    else if(guess>answer){
        guess = prompt("lower number please");
    }
    else{
        guess = prompt("higher number please");
    }
    count++;
}