import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import homeworld from './homeworld';



export default combineReducers({
  id,
  profile,
  homeworld
});
