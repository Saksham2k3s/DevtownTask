import React from "react";
import { useContext } from "react";
import HooksContext from "./Hooks/HooksContext";
function Pagination() {
  const context = useContext(HooksContext);
  const { goToNextPage, goToPreviousPage, currentPage, totalPages } = context;

  return (
    <>
      <div className="pagination mb-3 ">
        <button
          onClick={goToPreviousPage}
          className=""
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span className="h6 mt-2 mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button
          className=""
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </>
  );
}

export default Pagination;
