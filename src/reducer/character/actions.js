export const SET_CURRENT_CHARACTER = 'SET_CURRENT_CHARACTER';


// handled by id.js
export function setCurrentCharacter(id) {
  return {
    type: SET_CURRENT_CHARACTER,
    id
  };
}
