import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SportsbookComponent } from './sportsbook/sportsbook.component';

const routes: Routes = [
    {
        path: '',
        component: SportsbookComponent
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }