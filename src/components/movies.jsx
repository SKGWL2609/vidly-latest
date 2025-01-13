import React, { Component } from "react";
import _ from "lodash";

import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import { paginate } from "../utils/paginate";

import Pagination from "./common/Pagination";
import ListGroup from "./common/ListGroup";
import MoviesTable from "./MoviesTable";

class Movies extends Component {
  //   initialize movies using fakeMovieService
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ name: "All Genres", _id: ""}, ...getGenres()];

    this.setState({
      movies: getMovies(),
      genres,
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

    this.setState({ currentPage: page });
  };

  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });

  };
  handleSort = sortColumn => {
    this.setState({ sortColumn });
  };

  render() {
    const { length: movieCount } = this.state.movies;
    const {
      pageSize,
      currentPage,
      selectedGenre,
      sortColumn,
      movies: allMovies,
    } = this.state;

    if (movieCount === 0)
      return (
        <p className="text-danger fst-italic text-center fs-5">
          There are no movies in the database.
        </p>
      );

    // Order => filter -> sort -> paginate
    // filter movies based on genre
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;

    const sortedMovies = _.orderBy(
      filteredMovies,
      [sortColumn.path],
      [sortColumn.order]
    );

    // Paginate movies
    const movies = paginate(sortedMovies, currentPage, pageSize);

    return (
      <>
        <div className="row ">
          <div className="col-3">
            <ListGroup
              items={this.state.genres}
              selectedItem={this.state.selectedGenre}
              onItemSelect={this.handleGenreSelect}
            />
          </div>

          <div className="col">
            {/* moved in movies table */}
            <p className="text-end fs-5">
              Showing <strong>({filteredMovies.length})</strong> movies in
              database.

            </p>
            <MoviesTable
              movies={movies}
              sortColumn = {sortColumn}
              onLike={this.handleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSort}
            />

            <Pagination
              itemsCount={filteredMovies.length}
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
