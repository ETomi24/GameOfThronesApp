import { NgSwitchDefault } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from 'src/app/models/character';
import { House } from 'src/app/models/house';
import { CharacterService } from 'src/app/services/character.service';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.css']
})
export class HousePageComponent implements OnInit {

  house: House;
  currentLord: Character;
  heir: Character;
  overlord: House;
  founder: Character;
  cadetBranches: House[] = [];
  swornMembers: Character[] = [];

  constructor(private houseService: HouseService,
    private characterService: CharacterService,
    private route: ActivatedRoute,
    private router: Router,) {
      this.router.routeReuseStrategy.shouldReuseRoute = function(){return false;};
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.getHouse(url)
    })
  }

  /*Ebben a függvényben lekérdezem az adott ház adatait a benne lévő linkekhez is lekérem az adatokat hogy a linkek helyett a nevüket jelenítsem meg*/ 
  getHouse(url: string) {
    this.houseService.getHouse(url).subscribe(b => {

      this.house = b;

      /*Csak akkor kérem le a házakat,karaktereket ha a jsonben amit kaptam szerepelt az url(nem volt üres string) így fölöslegesen nem fogok lekérdezni még egy objektumot */
      if (this.house.currentLord) { this.characterService.getCharacter(this.house.currentLord).subscribe(character => this.currentLord = character); }
      if (this.house.heir) { this.characterService.getCharacter(this.house.heir).subscribe(character => this.heir = character); }
      if (this.house.overlord) { this.houseService.getHouse(this.house.overlord).subscribe(house => this.overlord = house); }
      if (this.house.founder) { this.characterService.getCharacter(this.house.founder).subscribe(character => this.founder = character); }

      this.house.cadetBranches.forEach(url => {
        this.houseService.getHouse(url).subscribe(house => {
          this.cadetBranches.push(house);
        });
      })

      this.house.swornMembers.forEach(url => {
        this.characterService.getCharacter(url).subscribe(character => {
          this.swornMembers.push(character);
        });
      })
    });
  }


  /*Navigáció az adott karakter részletező oldalára*/
  navigateToCharacter(url: string) {
    this.router.navigate(['characters', url]);
  }

  /*Navigáció az adott könyv részletező oldalára*/
  navigateToHouse(url: string) {
    this.router.navigate(['houses', url]);
  }

}
