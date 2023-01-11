import { TodoItem } from "./todoItem";
import { TodoCollection } from "./todoCollection";

let todos: TodoItem[] = [
	new TodoItem(1, "Buy Flowers"),
	new TodoItem(2, "Get Shoes"),
	new TodoItem(3, "Collect Tickets"),
	new TodoItem(4, "Call Joe", true),
];

let collection: TodoCollection = new TodoCollection("Adam", todos);

console.clear();
console.log(
	`${collection.username}'s Todo List` +
		`(${collection.getItemCounts().incomplete} items to do)`
);

let newId: number = collection.addTodo("Go for run");
let todoItem: TodoItem = collection.getTodoById(newId);

todoItem.print();

collection.getTodoItems(true).forEach((item) => item.print());
collection.removeComplete();

console.log(JSON.stringify(todoItem));

function totalPrice(...price: number[]): number {
	return price.reduce((total, value) => total + value);
}

// destructuring arrays
let names: string[] = ["Hats", "Boots", "Gloves"];
let [, , three] = names;

let prices: number[] = [100, 120, 50.25, 75];
let [, ...highest] = prices.sort((a, b) => a - b);
