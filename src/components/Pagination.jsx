import React, { useState } from "react";

const Pagination = ({ totalPages, setPage }) => {
  const totalPage = [];
  for (let i = 0; i < totalPages; i++) {
    totalPage.push(i + 1);
  }
  const gotoPage = (e, page) => {
    setPage(page);
  };
  return (
    <nav aria-label="Page navigation example">
      <ul className="pagination">
        <li className="page-item">
          <a className="page-link" href="#" aria-label="Previous">
            <span aria-hidden="true">&laquo;</span>
          </a>
        </li>
        {totalPage.map((page) => (
          <li className="page-item">
            <button className="page-link" onClick={(e) => gotoPage(e, page)}>
              {page}
            </button>
          </li>
        ))}

        <li className="page-item">
          <a className="page-link" href="#" aria-label="Next">
            <span aria-hidden="true">&raquo;</span>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Pagination;
