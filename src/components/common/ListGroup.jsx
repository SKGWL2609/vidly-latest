import React from "react";

const ListGroup = ({ items, onItemSelect, textProperty, valueProperty }) => {
  return (
    <ul className="list-group list-group">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className="list-group-item fw-bold"
          onClick={() => onItemSelect(item)}
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
