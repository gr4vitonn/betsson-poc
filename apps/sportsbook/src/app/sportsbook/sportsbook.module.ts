import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SportsbookRoutingModule } from './sportsbook-routing.module';
import { SportsbookComponent } from './sportsbook.component';


@NgModule({
  declarations: [
    SportsbookComponent
  ],
  imports: [
    CommonModule,
    SportsbookRoutingModule
  ]
})
export class SportsbookModule { }
