import React from "react";

const ListGroup = ({ items, onItemSelect }) => {
  return (
    <ul className="list-group list-group">
      {items.map((item) => (
        <li
          key={item._id}
          style={{ cursor: "pointer" }}
          className="list-group-item fw-bold"
          onClick={() => onItemSelect(item)}
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListGroup;
