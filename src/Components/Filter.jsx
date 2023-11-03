import React from "react";
import HooksContext from "./Hooks/HooksContext";
import { useContext } from "react";
import data from "../ItemData/data.json";

function Filter() {
  const context = useContext(HooksContext);
  const { handleCategoryChange, clearFilter, descending, ascending } = context;
  const allCategory = [...new Set(data.map((item) => item.category))];

  return (
    <>
      {/* Sorting DropDown */}

      <div className="filter text-end mb-3 d-flex justify-content-center mobilebtn">
        <div className="dropdown">
          <button
            className="btn dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Sort By Price
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button className="dropdown-item btn" onClick={ascending}>
              Low to High
            </button>
            <button className="dropdown-item btn" onClick={descending}>
              High to Low
            </button>
          </div>
        </div>
        <button
          type="button"
          className=" p-2"
          data-bs-toggle="modal"
          data-bs-target="#categoryModal"
        >
          Filter by Category
        </button>
        <button
          className="p-2 btn-yellow mx-2"
          type="button"
          onClick={clearFilter}
        >
          Clear Filter
        </button>
      </div>

      {/* Filter Modal */}
      <div
        className="modal fade"
        id="categoryModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="categoryModalTitle"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="categoryModalTitle">
                Filter by Category
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fa-solid fa-xmark"></i>
              </button>
            </div>
            <div className="modal-body text-center">
              <ul>
                {allCategory.map((category) => (
                  <li key={category} className="nav-link">
                    <button
                      type="button"
                      className={``}
                      onClick={() => handleCategoryChange(category)}
                    >
                      {category}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
