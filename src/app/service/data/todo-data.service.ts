import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  getAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}/todos`)
  }

  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)

  }

  getTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)

  }

  putTodo(username, id, todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo)

  }

  postTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos/`, todo)

  }


}
