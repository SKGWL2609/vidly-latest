import React from "react";

// Interface
// input: page number, page size,

const Pagination = (props) => {
  return (
    <>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <a className="page-link" href="#">
              1
            </a>
          </li>

          <li className="page-item">
            <a className="page-link active" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Pagination;
