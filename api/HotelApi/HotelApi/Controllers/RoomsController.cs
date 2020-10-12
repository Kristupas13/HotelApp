using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace HotelApi.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class RoomsController : ControllerBase
    {
        private readonly ILogger<RoomsController> _logger;

        public RoomsController(ILogger<RoomsController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<Room> Get()
        {
            return RoomList.Rooms;
        }

        [HttpGet]
        [Route("{id}")]
        public Room Get(int id)
        {
            return RoomList.Rooms.SingleOrDefault(x => x.Id == id);
        }
    }
}
