import React from "react";

const ListGroup = ({
  items,
  selectedItem,
  onItemSelect,
  textProperty = "name",
  valueProperty = "_id",
}) => {
  return (
    <ul className="list-group list-group mt-4">
      {items.map((item) => (
        <li
          key={item[valueProperty]}
          style={{ cursor: "pointer" }}
          className={
            item === selectedItem
              ? "list-group-item fw-bold active"
              : "list-group-item fw-bold"
          }
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
