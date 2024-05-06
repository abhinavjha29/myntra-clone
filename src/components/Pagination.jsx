import React, { useState } from "react";

const Pagination = ({ totalPages, setPage, page }) => {
  const totalPage = [];
  for (let i = 0; i < totalPages; i++) {
    totalPage.push(i + 1);
  }
  const gotoPage = (e, page) => {
    setPage(page);
  };
  const incPage = () => {
    setPage(page + 1);
  };
  const decPage = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a
            className="page-link"
            href="#"
            aria-label="Previous"
            onClick={decPage}
          >
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {totalPage.map((page) => (
          <li className="page-item " key={page}>
            <button className="page-link" onClick={(e) => gotoPage(e, page)}>
              {page}
            </button>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next" onClick={incPage}>
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
