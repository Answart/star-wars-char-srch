// 'combineReducers' allows all reducers to be combined into a single top reducer that will be accessed from the store
import { combineReducers } from 'redux';
import characters from './characters';

export default combineReducers({
  characters
});
