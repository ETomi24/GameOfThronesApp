import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../models/house';


@Injectable({
  providedIn: 'root'
})
export class HouseService {
  private apiUrl = "https://anapioficeandfire.com/api/houses";
  constructor(private http: HttpClient) { }

  getHouses(page = 1, pageSize = 50): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl + "?page=" + page + "&pageSize=" + pageSize);
  }

  getHouse(id: number): Observable<House> {
    return this.http.get<House>(this.apiUrl)
  }
}
