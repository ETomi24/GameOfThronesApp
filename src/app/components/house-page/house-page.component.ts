import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from 'src/app/models/house';
import { HouseService } from 'src/app/services/house.service';

@Component({
  selector: 'app-house-page',
  templateUrl: './house-page.component.html',
  styleUrls: ['./house-page.component.css']
})
export class HousePageComponent implements OnInit {

  house: House;

  constructor(private houseService: HouseService,
    private route: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let url = params['url'];
      this.houseService.getHouse(url).subscribe(b => this.house = b);
    })
  }

  navigateToCharacter(url: string){
    this.router.navigate(['characters', url]);
  }

  navigateToHouse(url: string){
    this.router.navigate(['house', url]);
  }

}
