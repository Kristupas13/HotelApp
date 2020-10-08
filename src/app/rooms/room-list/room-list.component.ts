import { Component, OnInit } from '@angular/core';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  public rooms;

  constructor(private service: RoomsService) { 
    this.rooms = service.rooms;
  }

  ngOnInit(): void {
  }

}
