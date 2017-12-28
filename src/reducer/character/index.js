import { combineReducers } from 'redux';
import id from './id';
import profile from './profile';
import homeworld from './homeworld';
import movies from './movies';



export default combineReducers({
  id,
  profile,
  homeworld,
  movies
});
