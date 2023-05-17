import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'; // Import here

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuoteDisplayComponent } from './quote-display/quote-display.component';

@NgModule({
  declarations: [
    AppComponent,
    QuoteDisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
