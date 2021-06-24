import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ShellHeaderModule } from '@myorg/shell/header';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, ShellHeaderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
