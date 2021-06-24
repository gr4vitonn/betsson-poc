import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SportsbookHomeComponent } from './sportsbook-home.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([
    {
      path: '',
      component: SportsbookHomeComponent
    }
  ])],
  declarations: [
    SportsbookHomeComponent
  ],
})
export class SportsbookHomeModule {}
