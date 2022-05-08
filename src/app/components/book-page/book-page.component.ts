import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
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
  characters: Character[];

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.bookService.getBook(url).subscribe(b => this.book = b);
    })

  }

  getCharacterName(url: string) {
    let characterName;
    this.characterService.getCharacter(url).subscribe(c => characterName = c.name);
    if(characterName == ""){
      characterName = "Unknown";
    }
    return characterName;
  }

  navigateToCharacter(url: string){
    this.router.navigate(['characters', url]);
  }

}
