import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../../classes/todo';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-display-todo',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './display-todo.component.html',
  styleUrl: './display-todo.component.css'
})
export class DisplayTodoComponent implements OnInit {
  @Input() todo!: Todo;

  toggleStatus() {
    this.todo.isCompleted = !this.todo.isCompleted;
  }  

  ngOnInit(): void {
  }
}
