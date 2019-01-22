import React from 'react';
import { connect } from 'react-redux';


const CharacterProfile = ({ profile, homeworld }) => (
  <div id="character-profile" className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
    <h1>Profile</h1>

    {profile.name && (
      <p><b>Name</b>: {profile.name}</p>
    )}
    {profile.birth_year && (
      <p><b>Year Born</b>: {profile.birth_year}</p>
    )}
    {profile.height && (
      <p><b>Height</b>: {profile.height}cm</p>
    )}
    {profile.mass && (
      <p><b>Weight</b>: {profile.mass}kg</p>
    )}
    {profile.gender && (
      <p><b>Gender</b>: {profile.gender}</p>
    )}
    {profile.hair_color && (
      <p><b>Hair</b>: {profile.hair_color}</p>
    )}
    {profile.eye_color && (
      <p><b>Eyes</b>: {profile.eye_color}</p>
    )}
    {profile.vehicles && (
      <p><b>Vehicles</b>: {profile.vehicles.length}</p>
    )}
    {profile.starships && (
      <p><b>Starships</b>: {profile.starships.length}</p>
    )}
  </div>
)

const mapStateToProps = ({ character: { profile, homeworld, movies } }) => ({
  profile,
  homeworld,
  movies
});


export default connect(mapStateToProps)(CharacterProfile);
