import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todo/list-todo.component';
import { API_URL } from 'src/app/app.constans';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private http:HttpClient) { }

  getAllTodos(username){
    return this.http.get<Todo[]>(`${API_URL}/users/${username}/todos`)
  }

  deleteTodo(username, id){
    return this.http.delete(`${API_URL}/users/${username}/todos/${id}`)

  }

  getTodo(username, id){
    return this.http.get<Todo>(`${API_URL}/users/${username}/todos/${id}`)

  }

  putTodo(username, id, todo){
    return this.http.put(`${API_URL}/users/${username}/todos/${id}`, todo)

  }

  postTodo(username, todo){
    return this.http.post(`${API_URL}/users/${username}/todos/`, todo)

  }


}
