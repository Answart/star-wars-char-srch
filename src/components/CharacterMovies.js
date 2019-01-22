import React from 'react';
import { connect } from 'react-redux';


const CharacterMovies = ({ movies }) => (
  <div id="character-movies" className="col-lg-6 col-md-6 col-sm-12 col-xs-12">
    <h1>Movies</h1>

    <ul>
      {movies.map(({ title, release_date }) => {
        const date = release_date.split('-')[0];

        return (
          <li key={title}>
            {title} ({date})
          </li>
        );
      })}
    </ul>
  </div>
);

const mapStateToProps = ({ character: { movies } }) => ({
  movies
});


export default connect(mapStateToProps)(CharacterMovies);
