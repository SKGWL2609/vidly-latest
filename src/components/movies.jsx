import React, { Component } from "react";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import Like from "./common/Like";
import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";

class Movies extends Component {
  //   initialize movies using fakeMovieService
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
  };

  componentDidMount() {
    this.setState({
      movies: getMovies(),
      genres: getGenres(),
    });
  }

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

  handlePageChange = (page) => {
    // console.log("Clicked", page);
    this.setState({ currentPage: page });
  };

  handleGenreSelect = genre => {
this.setState({selectedGenre: genre})
    // console.log(genre);
  }

  render() {
    const { length: movieCount } = this.state.movies;
    const { pageSize, currentPage, movies: allMovies } = this.state;

    if (movieCount === 0)
      return (
        <p className="text-danger fst-italic text-center fs-5">
          There are no movies in the database.
        </p>
      );

    // Paginate movies
    const movies = paginate(allMovies, currentPage, pageSize);

    return (
      <>
        <div className="row">
          <p className="text-center fs-5">
            Showing <strong>({movieCount})</strong> movies in database.
          </p>
          <hr />
          <div className="col-3">
              <ListGroup
              items = {this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}/>

          </div>
          <div className="col">
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
                {movies.map((movie, index) => (
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
            <Pagination
              itemsCount={movieCount}
              pageSize={pageSize}
              currentPage={currentPage}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </>
    );
  }
}

export default Movies;
