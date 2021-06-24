import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { SportsbookModule } from './sportsbook/sportsbook.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    SportsbookModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
