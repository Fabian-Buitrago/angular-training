import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './common/header.component';
import { FooterComponent } from './common/footer.component'

@NgModule({
  imports: [BrowserModule],
  declarations: [AppComponent, HeaderComponent, FooterComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
