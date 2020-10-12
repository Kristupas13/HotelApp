import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor(private httpClient: HttpClient) { }

  public getRooms() {
    return this.httpClient.get('https://localhost:44320/rooms');
  }

  public getRoomDetails(id: number) {
    return this.httpClient.get(`https://localhost:44320/rooms/${id}`);
  }
}
