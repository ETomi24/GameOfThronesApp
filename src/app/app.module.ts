import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksPageComponent } from './components/books-page/books-page.component';
import { CharactersPageComponent } from './components/characters-page/characters-page.component';
import { HousesPageComponent } from './components/houses-page/houses-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { BookService } from './services/book.service';
import { BookPageComponent } from './components/book-page/book-page.component';
import { CharacterService } from './services/character.service';
import { HouseService } from './services/house.service';
import { CharacterPageComponent } from './components/character-page/character-page.component';
import { HousePageComponent } from './components/house-page/house-page.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksPageComponent,
    CharactersPageComponent,
    HousesPageComponent,
    BookPageComponent,
    CharacterPageComponent,
    HousePageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatExpansionModule,
    MatListModule,
    MatIconModule
  ],
  providers: [BookService, CharacterService, HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
