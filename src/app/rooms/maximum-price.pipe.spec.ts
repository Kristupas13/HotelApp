import { MaximumPricePipe } from './maximum-price.pipe';
import { Room } from './room';

describe('MaximumPricePipe', () => {
  const pipe = new MaximumPricePipe();
  let rooms: Room[] = [createRoom(50), createRoom(100), createRoom(125), createRoom(20), createRoom(49)];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters higher than 60 price', () => {
    expect(pipe.transform(rooms, 60)).toEqual([createRoom(50), createRoom(20), createRoom(49)]);
  });

  it('filters higher than 49 price', () => {
    expect(pipe.transform(rooms, 49)).toEqual([createRoom(20), createRoom(49)]);
  });
});

function createRoom(price: number): Room {
  let room: Room = new Room();
  room.fullPrice = price;

  return room;
}