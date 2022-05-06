import { Component, OnInit } from '@angular/core';
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

  constructor(private characterService: CharacterService) { }

  ngOnInit(): void {
    this.getCharacters(this.pageNumber)
  }

  getCharacters(pageNumber: number) {
    this.characters = this.characterService.getCharacters(pageNumber);
    this.characters.subscribe(characters => {
      characters.forEach(b => { this.characters_size++ })
    });
  }

  getCharacterName(character: Character) {
    let name: String;
    name = character.name;
    if (name == "") {
      name = "Unknown";
    }
    return name;
  }

  getCharacterGender(character: Character) {
    let gender: String;
    gender = character.gender;
    if (gender == "") {
      gender = "Unknown";
    }
    return gender;
  }

  getCharacterCulture(character: Character) {
    let culture: String;
    culture = character.culture;
    if (culture == "") {
      culture = "Unknown";
    }
    return culture;
  }

}
