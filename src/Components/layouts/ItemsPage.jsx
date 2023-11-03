import React from "react";
import ItemCard from "../ItemCard";
import Pagination from "../Pagination";
import HooksContext from "../Hooks/HooksContext";
import { useContext } from "react";
import Filter from "../Filter";

function ItemsPage() {
  const context = useContext(HooksContext);
  const { itemsToShow } = context;

  return (
    <>
      <div className="container-fluid mt-5">
        <div className="container">
          <div className="">
            <Filter />
          </div>
          <div className="row px-4">
            {itemsToShow.map((item, idx) => (
              <div className="col-md-4 mb-3" key={idx}>
                <ItemCard item={item} />
              </div>
            ))}
          </div>
          <div className=" row">
            <div className="col-md-4"></div>
            <div className="col-md-4 mt-3">
              <Pagination />
            </div>
            <div className="col-md-4"></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemsPage;
