import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
taskUrl = 'http://localhost:3000/tarefas/';

  constructor(private http: HttpClient) { }

  getTasks() {
    return this.http.get(this.taskUrl);
  }

  postTask(data: any) {
    return this.http.post(this.taskUrl, data);
  }

  putTask(data: any) {
    return this.http.put(this.taskUrl+data.id, data);
  }

  deleteTask(id) {
    return this.http.delete(this.taskUrl+id)
  }
}
