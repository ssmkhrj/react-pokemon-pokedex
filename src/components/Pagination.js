import React from "react";
import "../styles/Pagination.css";

const Pagination = ({ currPage, updateGen, totalPages, isLoading }) => {
  return (
    <div className="pagination">
      <button
        className="btn btn--arrow"
        disabled={isLoading}
        onClick={() => updateGen((currPage - 1 + totalPages) % totalPages)}
      >
        <i className="fa fa-caret-left"></i>
      </button>
      {Array.from({ length: totalPages }, (el, idx) => (
        <button
          key={idx}
          disabled={isLoading || currPage === idx}
          className={`btn ${currPage === idx ? "btn--current" : ""}`}
          onClick={() => updateGen(idx)}
        >
          {idx + 1}
        </button>
      ))}
      <button
        className="btn btn--arrow"
        disabled={isLoading}
        onClick={() => updateGen((currPage + 1 + totalPages) % totalPages)}
      >
        <i className="fa fa-caret-right"></i>
      </button>
    </div>
  );
};

export default Pagination;
