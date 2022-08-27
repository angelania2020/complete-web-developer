// Create an object and an array which we will use in our facebook exercise. 

// 1. Create an object that has properties "username" and "password". Fill those values in with strings.
var user0 = {
    username: "angelania",
    password: "secret",
}

// 2. Create an array which contains the object you have made above and name the array "database".
var database = [
    {
        username: "angelania",
        password: "secret",
    },
    {
        username: "sally",
        password: "123",
    },
    {
        username: "ingrid",
        password: "456",
    },
]

// 3. Create an array called "newsfeed" which contains 3 objects with properties "username" and "timeline".
var newsFeed = [
    {
        username: "john",
        timeline: "I'm sick!"
    },
    {
        username: "anna",
        timeline: "JS is cool!"
    },
    {
        username: "bob",
        timeline: "I'm in London right now."
    }
];

var userNamePrompt = prompt("What's your username?");
var passwordPrompt = prompt("What's your password?");


function isUserValid(user, pass) {
    for (let i = 0; i < database.length; i++) {
        if (database[i].username === user && pass === database[i].password) {
            return true;
        }
    }
    return false;
}


function signIn(user, pass) {
    if (isUserValid(user, pass)) {
        console.log(newsFeed);
    } else {
        alert("Sorry, wrong username and password!")
    }

    // if (user === database[0].username && pass === database[0].password) {
    //     console.log(newsFeed);
    // } else {
    //     alert("Sorry, wrong username and password!")
    // }
}

signIn(userNamePrompt, passwordPrompt);