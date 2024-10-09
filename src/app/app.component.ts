import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListTodosComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'app';
}
