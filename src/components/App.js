import React from 'react';
import CharacterList from './CharacterList';
import CharacterProfile from './CharacterProfile';
import CharacterHomeworld from './CharacterHomeworld';
import CharacterMovies from './CharacterMovies';



const App = () =>
  <div className='container'>
    <div className='row'>
      <CharacterList />
      <CharacterProfile />
    </div>
    <div className="row">
      <CharacterHomeworld />
      <CharacterMovies />
    </div>
  </div>;

export default App;
