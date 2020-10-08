import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list/room-list.component';
import { RoomsRoutingModule } from './rooms.routing.module';
import { RoomDetailsComponent } from './room-details/room-details.component';



@NgModule({
  declarations: [RoomListComponent, RoomDetailsComponent],
  imports: [
    CommonModule,
    RoomsRoutingModule
  ]
})
export class RoomsModule { }
