import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from 'src/app/models/character';
import { CharacterService } from 'src/app/services/character.service';

@Component({
  selector: 'app-characters-page',
  templateUrl: './characters-page.component.html',
  styleUrls: ['./characters-page.component.css']
})
export class CharactersPageComponent implements OnInit {

  characters: Observable<Character[]>;
  characters_size: number = 0;
  pageNumber: number = 1;

  constructor(private characterService: CharacterService,
    private router: Router) { }

  ngOnInit(): void {
    this.getCharacters(this.pageNumber)
  }

  /*Ebben a függvényben lekérdezem az adott oldalon lévő összes karaktert*/
  getCharacters(pageNumber: number) {
    this.characters_size = 0;
    this.characters = this.characterService.getCharacters(pageNumber);
    this.characters.subscribe(characters => {
      characters.forEach(b => { this.characters_size++ })
    });
  }

  /*Ha a neve üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getCharacterName(character: Character) {
    let name: String;
    name = character.name;
    if (name == "") {
      name = "Unknown";
    }
    return name;
  }

  /*Ha a neme üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getCharacterGender(character: Character) {
    let gender: String;
    gender = character.gender;
    if (gender == "") {
      gender = "Unknown";
    }
    return gender;
  }

  /*Ha a kulturája üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getCharacterCulture(character: Character) {
    let culture: String;
    culture = character.culture;
    if (culture == "") {
      culture = "Unknown";
    }
    return culture;
  }

  /*Navigáció az adott karakter részletező oldalára*/
  navigateToCharacter(url: string) {
    this.router.navigate(['characters', url]);
  }

}
