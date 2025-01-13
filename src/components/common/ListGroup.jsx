import React from "react";

const ListGroup = ({ items, onItemSelect, textProperty='name', valueProperty='_id' }) => {
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

// NOTE: ListGroup: Support for defaultProps will be removed from function components in a future major release. Use JavaScript default parameters instead.

// ListGroup.defaultProps = {
//   textProperty: "name",
//   valueProperty: "_id"
// }

export default ListGroup;
