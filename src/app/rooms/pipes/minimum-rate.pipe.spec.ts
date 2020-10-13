import { MinimumRatePipe } from './minimum-rate.pipe';
import { Room } from '../room';

describe('MinimumRatePipe', () => {
  const pipe = new MinimumRatePipe();
  let rooms: Room[] = [createRoom(2), createRoom(3), createRoom(2), createRoom(5), createRoom(4)];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters lower than 3 stars', () => {
    expect(pipe.transform(rooms, 3)).toEqual([createRoom(3), createRoom(5), createRoom(4)]);
  });

  it('filters lower than 5 stars', () => {
    expect(pipe.transform(rooms, 5)).toEqual([createRoom(5)]);
  });
});

function createRoom(rating: number): Room {
  let room: Room = new Room();
  room.rating = rating;

  return room;
}