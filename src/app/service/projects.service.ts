import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ProjectService {
  constructor(private http: HttpClient) {}

  getAllProjects(): Observable<any> {
    return this.http.get(
      'https://api.todoist.com/rest/v1/projects?token=97ecd4cd1564208760228c783ef3d790fe2cef7c'
    );
  }

  deleteProject(id: number): Observable<any> {
    return this.http.delete(
      `https://api.todoist.com/rest/v1/projects/${id}?token=97ecd4cd1564208760228c783ef3d790fe2cef7c`
    );
  }

  changeProject(id: number, data): Observable<any> {
    return this.http.post(
      `https://api.todoist.com/rest/v1/projects/${id}?token=97ecd4cd1564208760228c783ef3d790fe2cef7c`,
      data
    );
  }

  createNewProject(data): Observable<any> {
    return this.http.post(
      'https://api.todoist.com/rest/v1/projects?token=97ecd4cd1564208760228c783ef3d790fe2cef7c',
      data
    );
  }
}
