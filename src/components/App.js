import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';



const App = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterProfile />
    </div>
  </div>;

export default App;
