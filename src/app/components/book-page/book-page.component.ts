import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Character } from 'src/app/models/character';
import { BookService } from 'src/app/services/book.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styleUrls: ['./book-page.component.css']
})
export class BookPageComponent implements OnInit {

  book: Book;
  characters: Character[] = [];
  povCharacters : Character[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.getBook(url);
    })

  }

  /*Ebben a függvényben lekérdezem az adott könyv adatait a benne lévő linkekhez is lekérem az adatokat hogy a linkek helyett a nevüket jelenítsem meg*/ 
  getBook(url: string) {
    this.bookService.getBook(url).subscribe(b => {
      this.book = b;
      this.book.characters.forEach(url => {
        this.characterService.getCharacter(url).subscribe(character => {
          this.characters.push(character);
        });
      })
      this.book.povCharacters.forEach(url => {
        this.characterService.getCharacter(url).subscribe(povCharacter => {
          this.povCharacters.push(povCharacter);
        });
      })
    })
  }

  /* Ha a karakter neve üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getCharacterName(name: string) {
    if (name == "") {
      name = "Unknown";
    }
    return name;
  }

  /*Navigáció az adott karakter részletező oldalára*/
  navigateToCharacter(url: string) {
    this.router.navigate(['characters', url]);
  }

}
