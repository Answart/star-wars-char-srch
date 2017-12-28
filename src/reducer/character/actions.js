import { API_URL } from '../../constants';



export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';

// handled by id.js reducer
export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id
  };
}

export function getCharacterProfile(id) {
  return dispatch =>
    fetch(API_URL+'/people/'+id)
      .catch(function (error) {
        if (error.response) {
          console.log('error data: ', error.response.data);
          console.log('error status: ', error.response.status);
          console.log('error headers: ', error.response.headers);
        };
      })
      .then(res => res.json())
        .then(profile => dispatch(setCharacterProfile(profile)));
}

// handled by profile.js reducer
export function setCharacterProfile(profile) {
  return {
    type: SET_CURRENT_PROFILE,
    profile
  };
}
