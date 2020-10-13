using System;

namespace HotelApi
{
  public class RoomDetails
  {
    public int Id { get; set; }
    public string Title { get; set; }
    public string Description { get; set; }
    public decimal ReservationPrice { get; set; }
    public decimal FullPrice { get; set; }
    public DateTime Available { get; set; }
    public double Rating { get; set; }
    public string ImageUrl { get; set; }
  }
}
