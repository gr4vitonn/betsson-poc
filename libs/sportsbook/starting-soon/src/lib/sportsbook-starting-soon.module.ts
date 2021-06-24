import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartingSoonComponent } from './starting-soon.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: StartingSoonComponent,
      },
    ]),
  ],
  declarations: [StartingSoonComponent],
})
export class SportsbookStartingSoonModule {}
