import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { NavbarModule } from '../navbar/navbar.module';
import { FooterModule } from '../footer/footer.module';



@NgModule({
  declarations: [HomepageComponent],
  imports: [
    CommonModule,
    NavbarModule,
    FooterModule
  ],
  exports: [
    HomepageComponent
  ]
})
export class HomepageModule { }
