const student = {
    Name: "Aditya Lade",
    Section: "A",
    Branch: "AIML",
    Id_No: 25147
};

const item = {
    Price: 2999,
    discount: 999,
    final_price: 2000,
    color: ["red", "black", "grey", "snow", "navy blue", "white"]
};

//question:
const post = {
    username: "@aditya_lade22",
    content: "The post about becoming the first gdg lead of campus",
    likes: 150,
    reposts: 5,
    tags: ["@aditya_lade8", "@avinashlade22", "@tech_helper12", "@scoutop"]
};

// console.log(post["tags"]);
// console.log(post.username);
// console.log(post.likes);

//Add update method in objects
const aditya = {
    full_name: "Aditya Lade",
    year: 1,
    branch: "AIML",
    college: "TGPCET",
    marks: 8.9
}

console.log(aditya.year = 2);    //update year to 2
console.log(aditya.marks = 94.4);    

aditya.gender = "male";   //add gender key and its value as male
delete aditya.college;    //to delete college key and its value
delete aditya.year;    //to delete year key and its value

console.log(aditya);


//nested objects:
// let classInfo = {
//     aditya: {
//         grade:"A",
//         id: 69
//     },
//     himanshu: {
//         grade: "A+",
//         id: 79
//     },
//     dipanshu: {
//         grade: "O",
//         id: 49
//     }
// };

// let a = classInfo.aditya.id;
// console.log(a)

const class_info = [
    {
        name: Aditya,
        grade:"A",
        id: 69
    },
    {
        name: Dipanshu,
        grade: "A+",
        id: 79
    },
    {
        name: himanshu,
        grade: "O",
        id: 49
    }
];