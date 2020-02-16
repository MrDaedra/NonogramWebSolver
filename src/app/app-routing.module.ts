import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PuzzleListComponent } from './components/puzzle-list/puzzle-list.component';
import { NonogramComponent } from './components/nonogram/nonogram.component';


const routes: Routes = [
    { path: '', component: PuzzleListComponent },
    { path: 'nonogram/:id', component: NonogramComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
