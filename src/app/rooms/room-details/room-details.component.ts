import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Room } from '../room';
import { RoomsService } from '../rooms.service';

@Component({
  selector: 'app-room-details',
  templateUrl: './room-details.component.html',
  styleUrls: ['./room-details.component.scss']
})
export class RoomDetailsComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: RoomsService) { }

  public room: Room;

  ngOnInit(): void {
    let roomId = this.activatedRoute.snapshot.params.roomId;
    this.service.getRoomDetails(roomId).subscribe((data: Room) => {
      this.room = data;
    })
  }

  public submitForm(): void {
  }
}
