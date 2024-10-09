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

  addTodo(title: string) {
    const newTodo: Todo = new Todo(this.todos.length + 1, title, false);
    this.todos.push(newTodo);
  }
}
