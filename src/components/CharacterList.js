import React from 'react';
// 'connect' allows this component to connect to store. makes sure correct things are passed to component through props.
import { connect } from 'react-redux';

const CharacterList = ({ characters }) =>
<div id="characeter-list" className="col-md-6">
  <h1>Characters</h1>
  <ul>
    {characters.map(c =>
      <li key={c.name}>
        {c.name}
      </li>
    )}
  </ul>
</div>

//receive state from store which this then return what we want through component through props. (characters from store)
const mapStateToProps = ({ characters }) => ({
  characters
})

// needs to be wrapped in connected component so it can talk to store
export default connect(mapStateToProps)(CharacterList);
