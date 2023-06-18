import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TextckmponentComponent } from './textckmponent/textckmponent.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';
import { FormComponenetComponent } from './form-componenet/form-componenet.component';

@NgModule({
  declarations: [
    AppComponent,
    TextckmponentComponent,
    EmpInfoComponent,
    FormComponenetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
