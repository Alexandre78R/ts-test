"use strict";
const prettyPrintWilder = (users) => {
    users.map((user) => {
        if (user.age !== undefined) {
            console.log(`${user.name} is ${user.age} years old`);
        }
    });
};
const wilders = [];
const user1 = { name: "Pierre", age: 23 };
const user2 = { name: "Paul", birthday: "10/02/1990" };
const user3 = { name: "Jacques", age: 25 };
wilders.push(user1);
wilders.push(user2);
wilders.push(user3);
prettyPrintWilder(wilders);
