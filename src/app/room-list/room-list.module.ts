import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomListComponent } from './room-list.component';
import { RoomListRoutingModule } from './room-list.routing.module';



@NgModule({
  declarations: [RoomListComponent],
  imports: [
    CommonModule,
    RoomListRoutingModule
  ]
})
export class RoomListModule { }
