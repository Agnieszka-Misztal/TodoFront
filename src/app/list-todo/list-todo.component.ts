import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';

export class Todo{
  constructor(
    public id: number,
    public description: string,
    public completed: boolean,
    public targetDate: Date

  ){

  }
}

@Component({
  selector: 'app-list-todo',
  templateUrl: './list-todo.component.html',
  styleUrls: ['./list-todo.component.css']
})
export class ListTodoComponent implements OnInit {

  todos: Todo[]

  message: string

  


  constructor(private todoService:TodoDataService) { }

  ngOnInit() {
    this.todoService.getAllTodos('user').subscribe(
      response => {
        this.todos = response;
        console.log(response);
      }
      
    )
  }

  deleteTodo(id){
    this.todoService.deleteTodo('user', id).subscribe(
      response => {
        console.log(response);
        this.message = 'Usunięto zadanie'
        this.refresh();

      }
    )
  }

  refresh(){
    this.todoService.getAllTodos('user').subscribe(
      response => {
        this.todos = response;
      }
      
    )

  }

}
