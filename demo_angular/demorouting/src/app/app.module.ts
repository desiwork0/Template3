import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HrvComponent } from './hrv/hrv.component';
import { EngComponent } from './eng/eng.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HrvComponent,
    EngComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
