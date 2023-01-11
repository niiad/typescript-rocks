"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const todoItem_1 = require("./todoItem");
const todoCollection_1 = require("./todoCollection");
let todos = [
    new todoItem_1.TodoItem(1, "Buy Flowers"),
    new todoItem_1.TodoItem(2, "Get Shoes"),
    new todoItem_1.TodoItem(3, "Collect Tickets"),
    new todoItem_1.TodoItem(4, "Call Joe", true),
];
let collection = new todoCollection_1.TodoCollection("Adam", todos);
console.clear();
console.log(`${collection.username}'s Todo List` +
    `(${collection.getItemCounts().incomplete} items to do)`);
let newId = collection.addTodo("Go for run");
let todoItem = collection.getTodoById(newId);
todoItem.print();
collection.getTodoItems(true).forEach((item) => item.print());
collection.removeComplete();
console.log(JSON.stringify(todoItem));
function totalPrice(...price) {
    return price.reduce((total, value) => total + value);
}
// destructuring arrays
let names = ["Hats", "Boots", "Gloves"];
let [, , three] = names;
let prices = [100, 120, 50.25, 75];
let [, ...highest] = prices.sort((a, b) => a - b);
