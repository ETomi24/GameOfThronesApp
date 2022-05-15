import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from 'src/app/models/book';
import { Character } from 'src/app/models/character';
import { House } from 'src/app/models/house';
import { BookService } from 'src/app/services/book.service';
import { CharacterService } from 'src/app/services/character.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  character: Character;
  father : Character;
  mother : Character;
  spouse : Character;
  allegiances : House[] = [];
  books : Book[] = [];
  povBooks : Book[] = [];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private houseService: HouseService,
    private characterService: CharacterService) {
      this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.getCharacter(url);
    })
  }

  /*Ebben a függvényben lekérdezem az adott karakter adatait a benne lévő linkekhez is lekérem az adatokat hogy a linkek helyett a nevüket jelenítsem meg*/ 
  getCharacter(url: string) {
    this.characterService.getCharacter(url).subscribe(b => {
      this.character = b;

      /*Csak akkor kérem le a karaktereket ha a jsonben amit kaptam szerepelt az url(nem volt üres string) így fölöslegesen nem fogok lekérdezni még egy objektumot */
      if (this.character.father) { this.characterService.getCharacter(this.character.father).subscribe(character => this.father = character); }
      if (this.character.mother) { this.characterService.getCharacter(this.character.mother).subscribe(character => this.mother = character); }
      if (this.character.spouse) { this.characterService.getCharacter(this.character.spouse).subscribe(character => this.spouse = character); }

      this.character.allegiances.forEach(url => {
        this.houseService.getHouse(url).subscribe(house => {
          this.allegiances.push(house);
        });
      })

      this.character.books.forEach(url => {
        this.bookService.getBook(url).subscribe(book => {
          this.books.push(book);
        });
      })

      this.character.povBooks.forEach(url => {
        this.bookService.getBook(url).subscribe(book => {
          this.povBooks.push(book);
        });
      })
    });
  }

  /*Navigáció az adott könyv részletező oldalára*/
  navigateToBook(url: string) {
    this.router.navigate(['books', url]);
  }

  /*Navigáció az adott karakter részletező oldalára*/
  navigateToCharacter(url: string) {
    this.router.navigate(['characters', url]);
  }

  /*Navigáció az adott ház részletező oldalára*/
  navigateToHouse(url: string) {
    this.router.navigate(['houses', url]);
  }

}
