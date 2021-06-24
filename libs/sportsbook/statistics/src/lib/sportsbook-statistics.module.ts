import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatisticsComponent } from './statistics.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StatisticsComponent,
      },
    ]),
  ],
  declarations: [StatisticsComponent],
})
export class SportsbookStatisticsModule {}
