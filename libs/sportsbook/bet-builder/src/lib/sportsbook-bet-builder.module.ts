import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BetBuilderComponent } from './bet-builder.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: BetBuilderComponent,
      },
    ]),
  ],
  declarations: [BetBuilderComponent],
})
export class SportsbookBetBuilderModule {}
