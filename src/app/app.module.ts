import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RegisterFormModule } from './bt120921/RegisterForm.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,RegisterFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
