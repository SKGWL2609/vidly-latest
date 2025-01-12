import React from "react";
import _ from "lodash";

// Interface
// input: page number, page size,

const Pagination = (props) => {
  const { itemsCount, pageSize, onPageChange, currentPage } = props;
  const pagesCount = Math.ceil(itemsCount / pageSize);
  // [1,2,3..].map()
  // [1,..., pagesCount].map()
  // use loadsh

  if (pagesCount === 1) return null;
  const pages = _.range(1, pagesCount + 1);

  return (
    <>
      <nav>
        <ul className="pagination">
          {pages.map(page =>
            <li className="page-item" key={page}>
            <a className="page-link" href="#">
             {page}
            </a>
          </li>
          )}

        </ul>
      </nav>
    </>
  );
};

export default Pagination;
