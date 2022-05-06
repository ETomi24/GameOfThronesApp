import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { HousesPageComponent } from './components/houses-page/houses-page.component';

const routes: Routes = [
  { path: "" , component : BooksPageComponent},
  { path: "books", component: BooksPageComponent },
  { path: "characters", component: CharactersPageComponent },
  { path: "houses" , component : HousesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
