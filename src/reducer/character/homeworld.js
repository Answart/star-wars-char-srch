import { SET_CHARACTER_HOMEWORLD } from './actions';



const initialState = {};

// puts profile data into store when this action is hit
export default (state = initialState, action) => {
  switch(action.type) {
    case (SET_CHARACTER_HOMEWORLD):
      return action.homeworld || state;
    default:
      return state;
  }
}
