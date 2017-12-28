import { API_URL } from '../../constants';



export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';
export const SET_CURRENT_PROFILE = 'SET_CURRENT_PROFILE';
export const SET_CHARACTER_HOMEWORLD = 'SET_CHARACTER_HOMEWORLD';
export const SET_CHARACTER_MOVIES = 'SET_CHARACTER_MOVIES';

export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id
  };
}

// PROFILE DATA
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
        .then(profile => {
          dispatch(setCharacterProfile(profile));
          dispatch(getCharacterHomeworld(profile.homeworld));
          dispatch(getCharacterMovies(profile.films));
        });
}

export function setCharacterProfile(profile) {
  return {
    type: SET_CURRENT_PROFILE,
    profile
  };
}

// HOMEWORLD DATA
export function getCharacterHomeworld(url) {
  return dispatch =>
    fetch(url)
      .catch(function (error) {
        if (error.response) {
          console.log('error data: ', error.response.data);
          console.log('error status: ', error.response.status);
          console.log('error headers: ', error.response.headers);
        };
      })
      .then(res => res.json())
        .then(homeworld => dispatch(setCharacterHomeworld(homeworld)));
}

export function setCharacterHomeworld(homeworld) {
  return {
    type: SET_CHARACTER_HOMEWORLD,
    homeworld
  };
}

// MOVIES DATA
export function getCharacterMovies(movieUrls) {
  return dispatch =>
    Promise.all(movieUrls.map(url =>
      fetch(url)
        .catch(function (error) {
          if (error.response) {
            console.log('error data: ', error.response.data);
            console.log('error status: ', error.response.status);
            console.log('error headers: ', error.response.headers);
          };
        })
        .then(res => res.json())
    ))
    .then(movies => dispatch(setCharacterMovies(movies)));
}

export function setCharacterMovies(movies) {
  return {
    type: SET_CHARACTER_MOVIES,
    movies
  };
}
