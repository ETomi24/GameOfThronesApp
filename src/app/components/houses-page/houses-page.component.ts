import { Component, OnInit } from '@angular/core';
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


  constructor(private houseService: HouseService) { }

  ngOnInit(): void {
    this.getHouses(this.pageNumber);
  }

  getHouses(pageNumber: number) {
    this.houses_size = 0;
    this.houses = this.houseService.getHouses(pageNumber);
    this.houses.subscribe(houses => {
      houses.forEach(b => { this.houses_size++ })
    });
  }

  getHouseWords(house: House) {
    let words: String;
    words = house.words;
    if (words == "") {
      words = "Unknown";
    }
    return words;
  }
  getHouseRegion(house: House) {
    let region: String;
    region = house.region;
    if (region == "") {
      region = "Unknown";
    }
    return region;
  }

}
