// constants file not yet create but acting as placeholder
import { API_URL } from '../../constants';

// used by reducer that makes sure it is used by the correct action
export const SET_CHARACTERS = 'SET_CHARACTERS';


// Exporting here as a function because the redux middleware, when returning a function from an action, will make sure the dispatch() is passed into this function that is returned here allowing async work and delay dispatching of a function until a network response comes back.
//
export function getCharacters() {
  return dispatch => {
    fetch(API_URL+"/people")
      .catch(function (error) {
        if (error.response) {
          console.log('error data: ', error.response.data);
          console.log('error status: ', error.response.status);
          console.log('error headers: ', error.response.headers);
        };
      })
      .then(res => res.json())
      .then(res => res.results)
      .then(characters =>
        dispatch(setCharacters(characters))
      );
  }
}

//returns action object after dispatch info received
export function setCharacters(characters) {
  return {
    type: SET_CHARACTERS,
    characters
  };
}
