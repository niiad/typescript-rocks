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

// function as types
type Run = (miles: number) => boolean;

let runner: Run = function (miles: number): boolean {
	if (miles > 10) {
		return true;
	}

	return false;
};

// getters and setters
class Speaker {
	private message: string;

	public constructor(private name: string) {}

	get Message(): string {
		if (!this.message.includes(this.name)) {
			throw Error("message is missing speaker's name");
		}

		return this.message;
	}

	set Message(value: string) {
		let temp: string = value;

		if (!value.includes(this.name)) {
			temp = this.name + " " + value;
		}

		this.message = temp;
	}
}

const speaker = new Speaker("John Doe");
speaker.Message = "Hello!";
console.log(speaker.Message);

// generics
function getLength<T>(arg: T): number {
	if (arg.hasOwnProperty("length")) {
		return arg["length"];
	}

	return 0;
}

interface HasLength {
	length: number;
}

function gettingLength<T extends HasLength>(arg: T): number {
	return arg.length;
}

console.log(getLength<number>(22));
console.log(gettingLength<string>("Hello!"));

// promise
const myPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		// resolve("I've completed successfully");
		reject("I've failed");
	}, 500);
});

myPromise
	.then((done) => {
		console.log("done");
	})
	.catch((err) => {
		console.log(err);
	});

// await and async
async function delayedResult() {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("I've completed successfully");
		}, 500);
	});
}

(async function execAsyncFunc() {
	const result = await delayedResult();
	console.log(result);
})();
