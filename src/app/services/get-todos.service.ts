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

  addTodo(title: string, description: string) {
    const newTodo: Todo = new Todo(this.todos.length + 1, title, description, false);
    this.todos.push(newTodo);
  }
}
