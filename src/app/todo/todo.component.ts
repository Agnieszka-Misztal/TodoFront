import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { identifierModuleUrl } from '@angular/compiler';
import { Todo } from '../list-todo/list-todo.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  id:number
  todo: Todo

  constructor(private todoService: TodoDataService,
    private route:ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id=this.route.snapshot.params['id'];
    this.todo = new Todo(1, '', false, new Date())// stworzenie todo zanim dostaniemy response
    this.todoService.getTodo('user', this.id).subscribe(
      response =>this.todo=response
    )
  }

  saveTodo(){
    this.todoService.putTodo('user', this.id, this.todo).subscribe(
      response => {
        this.router.navigate(['todos'])
      }
    )
  }

}
