import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable} from 'rxjs';
import { Character } from 'src/app/models/character';
import { BookService } from 'src/app/services/book.service';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-character-page',
  templateUrl: './character-page.component.html',
  styleUrls: ['./character-page.component.css']
})
export class CharacterPageComponent implements OnInit {

  character : Character;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private bookService: BookService,
    private characterService: CharacterService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.characterService.getCharacter(url).subscribe(b => this.character = b);
    })
  }

  navigateToBook(url: string){
    this.router.navigate(['books', url]);
  }

  navigateToCharacter(url: string){
    this.router.navigate(['characters', url]);
  }

  navigateToHouse(url: string){
    this.router.navigate(['houses', url]);
  }

}
