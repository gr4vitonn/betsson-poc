import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellHeaderComponent } from './shell-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    ShellHeaderComponent
  ],
  exports: [
    ShellHeaderComponent
  ]
})
export class ShellHeaderModule {}
