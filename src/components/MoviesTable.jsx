import React from "react";
import Like from "./common/Like";

const MoviesTable = (props) => {
  const { movies, onDelete, onLike, onSort } = props;
  return (
    <table className="table">
      <thead>
        <tr>
          <th>#</th>
          <th onClick= {() => onSort('title')}>Title</th>
          <th onClick={() => onSort('genre.name')} >Genre</th>
          <th onClick= {() => onSort('numberInStock')}>Stock</th>
          <th onClick= {() => onSort('dailyRentalRate')}>Rate</th>
          <th>...</th>
          <th>...</th>
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
                onClick={() => onLike(movie)}
              />
            </td>
            <td>
              <button
                onClick={() => onDelete(movie)}
                className="btn btn-sm btn-danger"
              >
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default MoviesTable;
