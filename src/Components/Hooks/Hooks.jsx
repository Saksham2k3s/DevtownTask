import React from "react";
import HooksContext from "./HooksContext";
import { useState, useEffect } from "react";
import data from "../../ItemData/data.json";

function Hooks(props) {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsToShow, setItemsToShow] = useState(data);
  const [category, setCategory] = useState("All");
  useEffect(() => {
    let filteredData = data;

    if (category !== "All") {
      filteredData = data.filter((item) => item.category === category);
    }
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const itemsToDisplay = filteredData.slice(startIndex, endIndex);
    setItemsToShow(itemsToDisplay);
  }, [currentPage, category]);

  const totalPages =
    category === "All"
      ? Math.ceil(data.length / itemsPerPage)
      : Math.ceil(itemsToShow.length / itemsPerPage);

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const goToPreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

  const clearFilter = () => {
    setCategory("All");
  };

  const descending = () => {
    const sortDescending = [...itemsToShow].sort((a,b) => b.price - a.price)
    setItemsToShow(sortDescending)
  }

  const ascending = () => {
    const sortAcending = () => [...itemsToShow].sort((a,b) => a.price - b.price);
    setItemsToShow(sortAcending)
  }
  return (
    <HooksContext.Provider
      value={{
        currentPage,
        totalPages,
        goToNextPage,
        goToPreviousPage,
        itemsToShow,
        handleCategoryChange,
        clearFilter,
        descending,
        ascending
      }}
    >
      {props.children}
    </HooksContext.Provider>
  );
}

export default Hooks;
