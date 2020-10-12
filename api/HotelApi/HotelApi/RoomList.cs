
using System;
using System.Collections.Generic;

namespace HotelApi
{
  public static class RoomList
  {
    public static IEnumerable<Room> Rooms = new List<Room>()
    {
      new Room
      {
        Id = 0,
        ReservationPrice = 60,
        FullPrice = 220,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Pirmas",
        Rating = 2
      },
      new Room
      {
        Id = 1,
        ReservationPrice = 20,
        FullPrice = 80,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Antras",
        Rating = 3
      },
      new Room
      {
        Id = 2,
        ReservationPrice = 20,
        FullPrice = 150,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Trecias",
        Rating = 3.5
      },
      new Room
      {
        Id = 3,
        ReservationPrice = 20,
        FullPrice = 160,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Ketvirtas",
        Rating = 4.5
      },
      new Room
      {
        Id = 4,
        ReservationPrice = 20,
        FullPrice = 120,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Penktas",
        Rating = 3
      },
    };
  }
}
