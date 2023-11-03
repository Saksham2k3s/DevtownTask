import React from "react";
import { Link } from "react-router-dom";
function ItemCard(props) {
  return (
    <>
      <div className="card h-100 px-1">
        <div className="text-center mt-3">
        <img
          className=" img-fluid w-50 "
          src={props.item.imageUrl}
          alt={props.item.title}
        />
        </div>
       
        <div className="card-body">
       <div className="d-flex justify-content-between">
            <h5 className="card-title">{props.item.title}</h5>
           <h5 className="item-price d-flex"><i class="fa-solid fa-indian-rupee-sign h6 mt-1"></i> {props.item.price}</h5>
            </div>
          <p className="card-text ">{props.item.description}</p>
        </div>
      </div>
    </>
  );
}

export default ItemCard;
