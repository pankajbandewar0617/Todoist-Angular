import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class TaskService {
  constructor(private http: HttpClient) {}

  getTasks(id: number): Observable<any> {
    return this.http.get(
      `https://api.todoist.com/rest/v1/tasks?project_id=${id}&token=97ecd4cd1564208760228c783ef3d790fe2cef7c`
    );
  }

  deleteTask(id: number): Observable<any> {
    return this.http.delete(
      `https://api.todoist.com/rest/v1/tasks/${id}?token=97ecd4cd1564208760228c783ef3d790fe2cef7c`
    );
  }

  addTask(data): Observable<any> {
    return this.http.post(
      'https://api.todoist.com/rest/v1/tasks?token=97ecd4cd1564208760228c783ef3d790fe2cef7c',
      data
    );
  }
}
