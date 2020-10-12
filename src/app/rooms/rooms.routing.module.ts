import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
    {
      path: 'rooms', 
      component: RoomListComponent
    },
    {
      path: 'rooms/:roomId',
      component: RoomDetailsComponent
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RoomsRoutingModule { }