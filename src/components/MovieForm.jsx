import React from "react";
import { useParams } from "react-router-dom";

const MovieForm = ({ match }) => {
  const { id } = useParams();

  return (
    <>
      <h2>Movie Form: {id}</h2>
      <button className="btn btn-primary fw-medium">Save</button>
    </>
  );
};

export default MovieForm;
