import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PuzzleListComponent } from './components/puzzle-list/puzzle-list.component';
import { NonogramComponent } from './components/nonogram/nonogram.component';

@NgModule({
  declarations: [
    AppComponent,
    PuzzleListComponent,
    NonogramComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
