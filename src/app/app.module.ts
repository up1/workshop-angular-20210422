import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { XyzComponent } from './login/xyz.component';
import { MyUpperCasePipe } from './my-upper-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    XyzComponent,
    MyUpperCasePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [LoginComponent]
})
export class AppModule { }
