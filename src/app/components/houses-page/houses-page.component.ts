import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-houses-page',
  templateUrl: './houses-page.component.html',
  styleUrls: ['./houses-page.component.css']
})
export class HousesPageComponent implements OnInit {

  houses: Observable<House[]>;
  houses_size: number = 0;
  pageNumber: number = 1;


  constructor(private houseService: HouseService,
    private router: Router) { }

  ngOnInit(): void {
    this.getHouses(this.pageNumber);
  }

  /*Ebben a függvényben lekérdezem az adott oldalon lévő összes házat*/ 
  getHouses(pageNumber: number) {
    this.houses_size = 0;
    this.houses = this.houseService.getHouses(pageNumber);
    this.houses.subscribe(houses => {
      houses.forEach(b => { this.houses_size++ })
    });
  }

  /*Ha a ház szavai üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getHouseWords(house: House) {
    let words: String;
    words = house.words;
    if (words == "") {
      words = "Unknown";
    }
    return words;
  }

  /*Ha a ház régiojának neve üres string akkor én adok neki és azt adja vissza, ha van neki akkor azt adja vissza */
  getHouseRegion(house: House) {
    let region: String;
    region = house.region;
    if (region == "") {
      region = "Unknown";
    }
    return region;
  }

  /*Navigáció az adott ház részletező oldalára*/
  navigateToHouse(url: string) {
    this.router.navigate(['houses', url]);
  }


}
