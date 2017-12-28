import React from 'react';
// 'connect' allows this component to connect to store. makes sure correct things are passed to component through props.
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacterProfile
} from '../reducer/character/actions';

// As usually one waits til its clicked to invoke the onClick, invoking onClicks in each li because the id are available during character creation mapping.
const CharacterList = ({ characters, setCharacter }) =>
  <div id="characeter-list" className="col-md-6">
    <h1>Characters</h1>
    <ul>
      {characters.map((c, i) =>
        <li key={c.name} onClick={setCharacter(i+ 1)}>
          {c.name}
        </li>
      )}
    </ul>
  </div>

//receive state from store which this then return what we want through component through props. (characters from store)
const mapStateToProps = ({ characters }) => ({
  characters
})

// similar to mapStateToProps. returns a curried f() which returns another f() to hold on to the id after the map runs. the inner f() dispatches character/actions.js's f() which then dispatches to the store.
const mapDispatchToProps = dispatch => ({
  setCharacter(id) {
    return () => {
      dispatch(setCurrentCharacter(id));
      dispatch(getCharacterProfile(id));
    }
  }
});

// needs to be wrapped in connected component so it can talk to store
export default connect(mapStateToProps, mapDispatchToProps)(CharacterList);
