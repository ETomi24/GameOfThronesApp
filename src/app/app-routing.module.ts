import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookPageComponent } from './components/book-page/book-page.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { HousePageComponent } from './components/house-page/house-page.component';
import { HousesPageComponent } from './components/houses-page/houses-page.component';

const routes: Routes = [
  { path: "" , component : BooksPageComponent},
  { path: "books", component: BooksPageComponent },
  { path: "characters", component: CharactersPageComponent },
  { path: "houses" , component : HousesPageComponent},
  { path: "books/:url" , component : BookPageComponent},
  { path: "characters/:url" , component : CharacterPageComponent},
  { path: "houses/:url", component : HousePageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
