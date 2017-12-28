import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterHomeworld from './CharacterHomeworld';



const App = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterHomeworld />
    </div>
  </div>;

export default App;
