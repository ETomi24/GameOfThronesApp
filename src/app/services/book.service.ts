import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Book } from '../models/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private apiUrl = "https://anapioficeandfire.com/api/books";
  constructor(private http: HttpClient) { }

  getBooks(page = 1, pageSize = 50): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + "?page=" + page + "&pageSize=" + pageSize);
    //return this.http.get<Book[]>(this.apiUrl);
  }

  getBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + "/number")
  }
}
