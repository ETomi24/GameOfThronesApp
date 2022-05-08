import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BookService } from 'src/app/services/book.service';
import { Book } from 'src/app/models/book';
import * as _ from "lodash";
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-page',
  templateUrl: './books-page.component.html',
  styleUrls: ['./books-page.component.css']
})
export class BooksPageComponent implements OnInit {

  books: Observable<Book[]>;
  book_size: number = 0;

  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.books = this.bookService.getBooks();
    this.books.subscribe(books => {
      books.forEach(b => { this.book_size++ })
    });
  }

  navigateTo(book: Book) {
    this.router.navigate(['books', book.url]);
  }
}
