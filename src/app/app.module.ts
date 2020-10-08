import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { HomepageModule } from './homepage/homepage.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './login/login.module';
import { RoomsModule } from './rooms/rooms.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NavbarModule,
    HomepageModule,
    FooterModule,
    LoginModule,
    RoomsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
