import React from 'react';
import { connect } from 'react-redux';


const isKnown = text => text && text !== 'unknown';

// as long as isKnown texts' exist, then the entire div will show.
const CharacterHomeworld = ({ homeworld }) => (
  <div id="character-profile" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <h1>Homeworld</h1>

      {isKnown(homeworld.name) && (
        <p><b>Planet</b>: {homeworld.name}</p>
      )}

      {isKnown(homeworld.population) && (
        <p><b>Population</b>: {homeworld.population}</p>
      )}
      {isKnown(homeworld.residents) && (
        <p><b>Known Residents</b>: {homeworld.residents.length}</p>
      )}

      {isKnown(homeworld.climate) && (
        <p><b>Climate</b>: {homeworld.climate}</p>
      )}

      {isKnown(homeworld.terrain) && (
        <p><b>Terrain</b>: {homeworld.terrain}</p>
      )}

      {isKnown(homeworld.gravity) && (
        <p><b>Gravity</b>: {homeworld.gravity}</p>
      )}

      {isKnown(homeworld.diatmer) && (
        <p><b>Diameter</b>: {homeworld.diatmer}km</p>
      )}

      {isKnown(homeworld.rotation_period) && (
        <p><b>Day length</b>: {homeworld.rotation_period} hours</p>
      )}

      {isKnown(homeworld.orbital_period) && (
        <p><b>Year length</b>: {homeworld.orbital_period} days</p>
      )}
  </div>
);

const mapStateToProps = ({ character: { homeworld } }) => ({
  homeworld
});


export default connect(mapStateToProps)(CharacterHomeworld);
