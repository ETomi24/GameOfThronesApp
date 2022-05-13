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

  /*Lekérdezem az egy oldalon lévő összes könyvet az apitol*/
  getBooks(page = 1, pageSize = 50): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl + "?page=" + page + "&pageSize=" + pageSize);
  }

  /*Lekérdezem egy könyvt adatait az apitol*/
  getBook(url: string): Observable<Book> {
    return this.http.get<Book>(url)
  }
}
