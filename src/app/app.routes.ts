import { Routes } from '@angular/router';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { ListTodosComponent } from './components/list-todos/list-todos.component';

export const routes: Routes = [
    {
        path: '',
        component: ListTodosComponent
    },
    {
        path: 'add',
        component: AddTodoComponent
    }
];
