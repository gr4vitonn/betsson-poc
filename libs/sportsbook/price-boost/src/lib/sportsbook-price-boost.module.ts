import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriceBoostComponent } from './price-boost.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: PriceBoostComponent,
      },
    ]),
  ],
  declarations: [PriceBoostComponent],
})
export class SportsbookPriceBoostModule {}
