import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetHistoryComponent } from './bet-history.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BetHistoryComponent,
      },
    ]),
  ],
  declarations: [BetHistoryComponent],
})
export class SportsbookBetHistoryModule {}
