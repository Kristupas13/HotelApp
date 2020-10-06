import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';
import { HomepageRoutingModule } from './homepage-routing.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule,
    HomepageRoutingModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
