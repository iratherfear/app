import { Component, OnInit } from '@angular/core';
import { GetTodosService } from '../../services/get-todos.service';
import { Todo } from '../../classes/todo';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { DisplayTodoComponent } from '../display-todo/display-todo.component';

@Component({
  selector: 'app-list-todos',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, DisplayTodoComponent],
  templateUrl: './list-todos.component.html',
  styleUrl: './list-todos.component.css'
})
export class ListTodosComponent implements OnInit {

  todos!: Todo[];

  constructor(
    private todoService: GetTodosService
  ) {}


  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
  }  
}
