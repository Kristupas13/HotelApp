import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { NavbarModule } from './navbar/navbar.module';
import { HomepageModule } from './homepage/homepage.module';
import { FooterModule } from './footer/footer.module';
import { LoginModule } from './login/login.module';
import { RoomListModule } from './room-list/room-list.module';

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
    RoomListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
