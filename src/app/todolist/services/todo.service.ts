import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../interfaces/todo';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private readonly apiURL =
    'https://jsonplaceholder.typicode.com/users/1/todos';

  constructor(private httpClient: HttpClient) {}

  getTodo(): Observable<Todo[]> {
    return this.httpClient.get<Todo[]>(this.apiURL);
  }
}
