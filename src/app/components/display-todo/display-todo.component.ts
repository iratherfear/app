import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from '../../classes/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { GetTodosService } from '../../services/get-todos.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-display-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './display-todo.component.html',
  styleUrl: './display-todo.component.css'
})
export class DisplayTodoComponent implements OnInit {
  @Input() todo!: Todo;
  @Output() todoDeleted = new EventEmitter<number>(); 
  
  constructor(
    private todoService: GetTodosService,
    private router: Router
  ) {}

  toggleStatus() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }  
  
  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      timeZoneName: 'short'
    };
    return date.toLocaleString('en-US', options);
  }

  deleteTodo() {
    if (confirm("Are you sure you want to delete this todo?")) {
      this.todoService.deleteTodo(this.todo.id);
      this.todoDeleted.emit(this.todo.id);
    }
  }

  ngOnInit(): void {
  }
}
