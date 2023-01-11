import { TodoItem } from "./todoItem";

type ItemCounts = {
	total: number;
	incomplete: number;
};

export class TodoCollection {
	private nextId: number = 1;
	private itemMap: Map<number, TodoItem> = new Map<number, TodoItem>();

	public constructor(
		public username: string,
		public todoItems: TodoItem[] = []
	) {
		todoItems.forEach((item) => this.itemMap.set(item.id, item));
	}

	public getTodoById(id: number): TodoItem {
		return this.itemMap.get(id);
	}

	public addTodo(task: string): number {
		while (this.getTodoById(this.nextId)) {
			this.nextId++;
		}

		this.itemMap.set(this.nextId, new TodoItem(this.nextId, task));

		return this.nextId;
	}

	public markComplete(id: number, complete: boolean): void {
		const todoItem = this.getTodoById(id);

		if (todoItem) {
			todoItem.complete = complete;
		}
	}

	public getTodoItems(includeComplete: boolean): TodoItem[] {
		return [...this.itemMap.values()].filter(
			(item) => includeComplete || !item.complete
		);
	}

	public removeComplete(): void {
		this.itemMap.forEach((item) => {
			if (item.complete) {
				this.itemMap.delete(item.id);
			}
		});
	}

	public getItemCounts(): ItemCounts {
		return {
			total: this.itemMap.size,
			incomplete: this.getTodoItems(false).length,
		};
	}
}
