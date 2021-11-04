for (let i = 0; i <= 0; i++) {
    console.log(i);
}

let i = 0;
while (i <= 10) {
    console.log(i);
    i++;
}

const secret = "secret";
let guess = "";
while (secret !== guess) {
    guess = prompt("Enter the secret:");
}

console.log("You success");


const color = ["red", "blue", "green"];

for (let clo of color) {
    console.log(`The color is ${clo}`);
}

const scores = {
    'Tom': 12,
    'Jack': 18
};

//can not use for of to loop through objects
//but can use for in to loop through key
for (let person in scores) {
    console.log(`${person} scored ${scores[person]}`);
}

// turn object into array
let keys = Object.keys(scores);
let values = Object.keys(scores);

