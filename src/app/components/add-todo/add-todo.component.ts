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
  styleUrl: './add-todo.component.css'
})
export class AddTodoComponent {

  testString: string = "";
  descriptionNewtodo: string = "";
  errorMessage: string = "";
  constructor(
    private todoService: GetTodosService,
    private router: Router
  ) {}

  addTodoButton() {
    if(this.testString === "") {
      alert("Title can not be empty");
      return;
    }
    this.todoService.addTodo(this.testString, this.descriptionNewtodo);
    this.router.navigateByUrl("/");
  }  
}
