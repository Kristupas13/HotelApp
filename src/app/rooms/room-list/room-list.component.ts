import { Component, OnInit, Input } from '@angular/core';
import { RoomsService } from '../rooms.service';
import { Room } from '../room';
import { savePrice, saveRating  } from './../room.actions';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-room-list',
  templateUrl: './room-list.component.html',
  styleUrls: ['./room-list.component.scss']
})
export class RoomListComponent implements OnInit {

  price$: Observable<number>;
  rating$: Observable<number>;

  public rooms: Room[];
  public minimumRateValue: number;
  public maximumPriceValue: number;

  constructor(private service: RoomsService, private store: Store<{price: number, rating: number}>) { 
    this.price$ = store.select('price');
    this.rating$ = store.select('rating');
  }

  ngOnInit(): void {
    this.service.getRooms().subscribe((data: Room[]) => {
      this.rooms = data;
    });
  }

  savePrice(): void {
    this.store.dispatch(savePrice())
    console.log('saved price');
  }

  saveRating(): void {
    this.store.dispatch(saveRating())
    console.log('saved rating');
  }
}
