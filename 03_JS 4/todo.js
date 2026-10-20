let task = [];
let user = prompt("Enter what you want to do:");

while(true){
    if(user=="quit"){
        console.log("Quitting the app");
        break;
    }
    if(user =="list"){
        console.log("_________________________");
        for(let i = 0; i<task.length; i++){
            console.log(i+1, task[i]);
        }
        console.log("_________________________");
    }
    else if(user == "add"){
        let ad=prompt("Enter Task:");
        task.push(ad);
        console.log("Task added");
    }
    else if(user =="delete"){
        let delt =prompt("Enter the index of task u want to delete:");
        task.splice(delt, 1);
        console.log("Task deleted successfully");
    }
    user = prompt("Enter what you want to do:");
}

