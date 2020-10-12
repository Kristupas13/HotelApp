import { MinimumRatePipe } from './minimum-rate.pipe';
import { Room } from './room';

describe('MinimumRatePipe', () => {
  const pipe = new MinimumRatePipe();
  let rooms: Room[] = [new Room(2), new Room(3), new Room(2), new Room(5), new Room(4)];

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('filters lower than 3 stars', () => {
    expect(pipe.transform(rooms, 3)).toEqual([new Room(3), new Room(5), new Room(4)]);
  });

  it('filters lower than 5 stars', () => {
    expect(pipe.transform(rooms, 5)).toEqual([new Room(5)]);
  });
});

