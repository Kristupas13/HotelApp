import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoomsService {

  constructor() { }

  public rooms = [
    {
      id: 0,
      reservationPrice: 50,
      title: 'pavadinimas',
      description: 'Testas',
      rating: 3
    },
    {
      id: 1,
      reservationPrice: 50,
      title: 'pavadinimas',
      description: 'Testas',
      rating: 3
    },
    {
      id: 2,
      reservationPrice: 50,
      title: 'pavadinimas',
      description: 'Testas',
      rating: 3
    },
    {
      id: 3,
      reservationPrice: 50,
      title: 'pavadinimas',
      description: 'Testas',
      rating: 3
    }
  ];
}
