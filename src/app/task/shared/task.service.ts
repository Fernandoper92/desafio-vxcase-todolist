import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
taskUrl = 'http://localhost:3000/tarefas';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.taskUrl);
  }
}
