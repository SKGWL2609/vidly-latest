import React, { Component } from "react";
import { getMovies } from "../services/fakeMovieService";
import Like from "./common/Like";
import Pagination from "./common/Pagination";

class Movies extends Component {
  //   initialize movies using fakeMovieService
  state = {
    movies: getMovies(),
    pageSize: 4
  };

  handleDelete = (movie) => {
    // filter the passed movie
    const newMovies = this.state.movies.filter((m) => m._id !== movie._id);
    this.setState({ movies: newMovies });
  };

  handleLike = (movie) => {
    // make a copy of movies array
    const movies = [...this.state.movies];
    // get index of passed movie
    const index = movies.indexOf(movie);
    // get all properties
    movies[index] = { ...movies[index] };
    // set toggle like
    movies[index].liked = !movies[index].liked;
    // update state to reflect in ui
    this.setState({ movies });
  };

  handlePageChange = page => {
console.log('Clicked', page);

  }


  render() {
    const { length: movieCount } = this.state.movies;
    if (movieCount === 0)
      return (
        <p className="text-danger fst-italic text-center fs-5">
          There are no movies in the database.
        </p>
      );
    return (
      <>
        <p className="text-center fs-5">
          Showing <strong>({movieCount})</strong> movies in database.
        </p>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie, index) => (
              <tr key={movie._id}>
                <th>{index + 1}</th>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
                <td>
                  <Like
                    liked={movie.liked}
                    onClick={() => this.handleLike(movie)}
                  />
                </td>
                <td>
                  <button
                    onClick={() => this.handleDelete(movie)}
                    className="btn btn-sm btn-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination itemsCount={movieCount} pageSize={this.state.pageSize} onPageChange={this.handlePageChange}/>
      </>
    );
  }
}

export default Movies;
