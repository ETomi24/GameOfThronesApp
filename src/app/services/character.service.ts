import { Injectable } from '@angular/core';
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = "https://anapioficeandfire.com/api/characters";
  constructor(private http: HttpClient) { }

  /*Lekérdezem az egy oldalon lévő összes karaktert az apitol*/
  getCharacters(page = 1, pageSize = 50): Observable<Character[]> {
    return this.http.get<Character[]>(this.apiUrl + "?page=" + page + "&pageSize=" + pageSize);
  }

  /*Lekérdezem egy karakter adatait apitol*/
  getCharacter(url: string): Observable<Character> {
    return this.http.get<Character>(url);
  }
}
