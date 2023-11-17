import React from 'react';

const Pagination = ({ itemsPerPage, totalItems, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav className="pagination">
      {pageNumbers.map((number) => (
        <a key={number} onClick={() => paginate(number)} className="page-link">
          {number}
        </a>
      ))}
    </nav>
  );
};

export default Pagination;
