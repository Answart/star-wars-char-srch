import { SET_CHARACTERS } from './actions';

//initial state of this particular reducer so it is initialized with an array.
const initialState = [];

// allows the characters to be taken out of action and into store
export default (state = initialState, action) => {
  switch (action.type) {
    case (SET_CHARACTERS):
      return action.characters || state;
    default:
      return state;
  }
}
