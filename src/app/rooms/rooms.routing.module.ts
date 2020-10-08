import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RoomDetailsComponent } from './room-details/room-details.component';
import { RoomListComponent } from './room-list/room-list.component';

const routes: Routes = [
    {
      path: 'rooms', 
      component: RoomListComponent,
      children: [
        {
          path: 'all',
          component: RoomListComponent
        },
        {
          path: 'one',
          component: RoomListComponent
        },
        {
          path: 'two',
          component: RoomListComponent
        },
        {
          path: 'four',
          component: RoomListComponent
        },
      ]
    },
    {
      path: 'rooms',
      component: RoomDetailsComponent,
      children: [
        {
          path: '**',
          component: RoomDetailsComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class RoomsRoutingModule { }