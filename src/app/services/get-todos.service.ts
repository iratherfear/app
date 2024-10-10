import { Injectable, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';

@Injectable({
  providedIn: 'root'
})
export class GetTodosService {
  constructor() { }
  
  private todos: Todo[] = [];

  getTodos() {
    return this.todos;
  }

  addTodo(title: string, description: string, dueDate: Date) {
    const currentDate = new Date();
    if (dueDate < currentDate) {
      throw new Error("Due date is in past");
    }
    if(title.trim() === "") {
      throw new Error("Title is empty");
    }
    const newTodo: Todo = new Todo(this.todos.length + 1, title, description, dueDate, false);
    this.todos.push(newTodo);
  }

  deleteTodo(id: number) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }
}
