
using System;
using System.Collections.Generic;

namespace HotelApi
{
  public static class RoomList
  {
    public static IEnumerable<RoomDetails> Rooms = new List<RoomDetails>()
    {
      new RoomDetails
      {
        Id = 0,
        ReservationPrice = 60,
        FullPrice = 220,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Pirmas",
        Rating = 2,
        ImageUrl = @"https://cdn.pixabay.com/photo/2018/06/14/21/15/the-interior-of-the-3475656_960_720.jpg"
      },
      new RoomDetails
      {
        Id = 1,
        ReservationPrice = 20,
        FullPrice = 80,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Antras",
        Rating = 3,
        ImageUrl = @"https://cdn.pixabay.com/photo/2019/08/19/13/58/bed-4416515_960_720.jpg"
      },
      new RoomDetails
      {
        Id = 2,
        ReservationPrice = 20,
        FullPrice = 150,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Trecias",
        Rating = 3.5,
        ImageUrl = @"https://cdn.pixabay.com/photo/2016/09/18/03/28/travel-1677347_960_720.jpg"
      },
      new RoomDetails
      {
        Id = 3,
        ReservationPrice = 20,
        FullPrice = 160,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Ketvirtas",
        Rating = 4.5,
        ImageUrl = @"https://cdn.pixabay.com/photo/2012/11/21/10/24/building-66789_960_720.jpg"
      },
      new RoomDetails
      {
        Id = 4,
        ReservationPrice = 20,
        FullPrice = 120,
        Available = DateTime.Now,
        Description = "Trumpas aprasymas",
        Title = "Penktas",
        Rating = 3,
        ImageUrl = @"https://cdn.pixabay.com/photo/2016/10/18/09/02/hotel-1749602_960_720.jpg"
      },
    };
  }
}
