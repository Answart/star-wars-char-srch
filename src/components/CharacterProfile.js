import React from 'react';
import { connect } from 'react-redux';



const CharacterProfile = ({ profile }) =>
  <div id="character-profile" className="col-md-6">
    <h1>Profile</h1>
    {profile.name && <p>Name: {profile.name}</p>}
    {profile.height && <p>Height: {profile.height}cm</p>}
    {profile.mass && <p>Weight: {profile.mass}kg</p>}
    {profile.gender && <p>Gender: {profile.gender}</p>}
  </div>;

const mapStateToProps = ({ character: { profile } }) => ({
  profile
});


export default connect(mapStateToProps)(CharacterProfile);
