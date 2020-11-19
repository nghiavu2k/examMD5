import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url = 'http://localhost:3000/books';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  getAll(): Observable<any> {
    return this.http.get(url);
  }

  get(id: any): Observable<any> {
    return this.http.get(`${url}/${id}`);
  }

  create(data: {
    title: string;
    author: string;
    description: string;
  }): Observable<any> {
    return this.http.post(url, data);
  }

  update(
    id: any,
    data: { title: any; author: string; description: any }
  ): Observable<any> {
    return this.http.put(`${url}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${url}/${id}`);
  }
}
