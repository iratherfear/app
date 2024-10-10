import { Component } from '@angular/core';
import { GetTodosService } from '../../services/get-todos.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  titleOfTodo: string = '';
  descriptionOfTodo: string = '';
  dueDateString: string = '';
  dueTimeString: string = '';
  dueDate!: Date;
  
  constructor(
    private todoService: GetTodosService,
    private router: Router
  ) {}

  addTodoButton() {
    if (this.titleOfTodo.trim() === '') {
      alert('Title cannot be empty');
      return;
    }

    if (this.dueDateString && this.dueTimeString) {
      const dateTimeString = `${this.dueDateString}T${this.dueTimeString}`;
      this.dueDate = new Date(dateTimeString);
      if (isNaN(this.dueDate.getTime())) {
        alert('Invalid date or time');
        return;
      }
    } else {
      // Set due date to 10 years from now
      this.dueDate = new Date();
      this.dueDate.setFullYear(this.dueDate.getFullYear() + 10);
    }

    // Check if due date is in the past
    const currentDate = new Date();
    if (this.dueDate < currentDate) {
      alert('Due date cannot be in the past');
      return;
    }

    this.todoService.addTodo(this.titleOfTodo, this.descriptionOfTodo, this.dueDate);
    this.router.navigateByUrl('/');
  }
}
