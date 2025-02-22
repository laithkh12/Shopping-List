import { useState } from "react";
import Form from "./Form";
import List from "./List";

const Main = ({
  items,
  handleAddItems,
  handleDeleteItems,
  handleDoneItems,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => (a.packed === b.packed ? 0 : a.packed ? 1 : -1));
  }

  return (
    <div>
      <Form handleAddItems={handleAddItems} />
      <ul className="mainWrapper">
        {sortedItems.map((item) => (
          <List
            item={item}
            key={item.id}
            handleDeleteItems={handleDeleteItems}
            handleDoneItems={handleDoneItems}
          />
        ))}
      </ul>
      <div>
        <select
          className="select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort By Input</option>
          <option value="packed">Sort By Packed</option>
        </select>
      </div>
    </div>
  );
};

export default Main;
