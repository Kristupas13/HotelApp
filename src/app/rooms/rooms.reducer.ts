import { createReducer, on } from '@ngrx/store';
import { savePrice, saveRating } from './room.actions';
 
export const initialState = 0;
 
const _counterReducer = createReducer(
  initialState,
  on(savePrice, (state) => state = state),
  on(saveRating, (state) => state = state)
);
 
export function counterReducer(state, action) {
  return _counterReducer(state, action);
}