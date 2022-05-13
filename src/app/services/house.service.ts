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

  /*Lekérdezem az egy oldalon lévő összes házat az apitol*/
  getHouses(page = 1, pageSize = 50): Observable<House[]> {
    return this.http.get<House[]>(this.apiUrl + "?page=" + page + "&pageSize=" + pageSize);
  }

  /*Lekérdezem egy ház adatait az apitol*/
  getHouse(url: string): Observable<House> {
    return this.http.get<House>(url)
  }
}
