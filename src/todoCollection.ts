import { TodoItem } from "./todoItem";

export class TodoCollection {
	private nextId: number = 1;

	public constructor(
		public username: string,
		public todoItems: TodoItem[] = []
	) {}

	private getTodoById(id: number): TodoItem {
		return this.todoItems.find((item) => item.id === id);
	}

	public addTodo(task: string): number {
		while (this.getTodoById(this.nextId)) {
			this.nextId++;
		}

		this.todoItems.push(new TodoItem(this.nextId, task));

		return this.nextId;
	}

	public markComplete(id: number, complete: boolean): void {
		const todoItem = this.getTodoById(id);

		if (todoItem) {
			todoItem.complete = complete;
		}
	}
}
