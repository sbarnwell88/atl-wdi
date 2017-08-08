import React from "react";

// Update this Movie component with info from OMDB
// BONUS: Use OMDB's Poster API to add a poster to each movie.
const Movie = () => {
  return (
    <section id="movie-listing">
      <div className="movie">
        {/* <h3>{this.props.movie.Title}</h3> */}
        <p>
          {/* <strong>Released:</strong> {this.props.Year}<br /> */}
          {/* <strong>Directed By:</strong> {this.props.Director}<br /> */}
          <em>Genre:</em>
        </p>
         {/* <p>{this.props.movie.Plot}</p>  */}
      </div>
    </section>
  );
};

export default Movie;


