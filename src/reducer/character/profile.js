import { SET_CURRENT_PROFILE } from './actions';



const initialState = {};

// puts profile data into store when this action is hit
export default (state = initialState, action) => {
  switch(action.type) {
    case (SET_CURRENT_PROFILE):
      return action.profile || state;
    default:
      return state;
  }
}
