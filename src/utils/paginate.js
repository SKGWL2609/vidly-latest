import _ from "lodash";

// all will run on client-side
export function paginate(items, pageNumber, pageSize) {
  // get start page index
  const startIndex = (pageNumber - 1) * pageSize;

  /*
    return _(items) // loadash wrpper
    .slice(startIndex) // seprate all items starting from startIndex
    .take(pageSize) // get items for a page
    .value() // cuurent page items
    */

  return _(items).slice(startIndex).take(pageSize).value();
}
