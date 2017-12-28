import React from 'react';
import { connect } from 'react-redux';



const isKnown = text => text && text !== 'unknown';

// as long as isKnown texts' exist, then the entire div will show.
const CharacterHomeworld = ({ homeworld }) =>
  <div id="character-profile" className="col-md-6">
    <h1>World</h1>
    {isKnown(homeworld.name) && <p>Name: {homeworld.name}</p>}
    {isKnown(homeworld.population) && <p>Population: {homeworld.population}</p>}
    {isKnown(homeworld.diatmer) && <p>Diameter: {homeworld.diatmer}km</p>}
    {isKnown(homeworld.rotation_period) && <p>Day length: {homeworld.rotation_period} hours</p>}
    {isKnown(homeworld.orbital_period) && <p>Year length: {homeworld.orbital_period} days</p>}
    {isKnown(homeworld.climate) && <p>Climate: {homeworld.climate}</p>}
  </div>;

const mapStateToProps = ({ character: { homeworld } }) => ({
  homeworld
});


export default connect(mapStateToProps)(CharacterHomeworld);
