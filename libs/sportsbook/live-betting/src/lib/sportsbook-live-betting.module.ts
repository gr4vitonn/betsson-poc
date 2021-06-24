import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LiveBettingComponent } from './live-betting.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: LiveBettingComponent,
      },
    ]),
  ],
  declarations: [LiveBettingComponent],
})
export class SportsbookLiveBettingModule {}
