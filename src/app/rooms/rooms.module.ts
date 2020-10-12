import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms.routing.module';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { MinimumRatePipe } from './minimum-rate.pipe';
import { FormsModule } from '@angular/forms';
import { MaximumPricePipe } from './maximum-price.pipe';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from './rooms.reducer';



@NgModule({
  declarations: [RoomListComponent, RoomDetailsComponent, MinimumRatePipe, MaximumPricePipe],
  imports: [
    CommonModule,
    RoomsRoutingModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({count: counterReducer})
  ]
})
export class RoomsModule { }
