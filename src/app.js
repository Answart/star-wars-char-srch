import React from 'react';
import CharacterList from './components/CharacterList';
import CharacterProfile from './components/CharacterProfile';
import CharacterHomeworld from './components/CharacterHomeworld';
import CharacterMovies from './components/CharacterMovies';


const App = () => (
  <div className='container'>
    <CharacterList />

    <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
      <CharacterProfile />

      <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
        <CharacterHomeworld />

        <CharacterMovies />
      </div>
    </div>
  </div>
);

export default App;
