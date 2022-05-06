import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import * as _ from "lodash";

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  books: Observable<Book[]>;
  book_size: number = 0;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getBooks();
    this.books.subscribe(books => {
      books.forEach(b => { this.book_size++ })
    });
  }

}
