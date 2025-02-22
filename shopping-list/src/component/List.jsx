const List = ({ item, handleDeleteItems, handleDoneItems }) => {
  const { product, quentity, packed, id } = item;

  return (
    <li className="listWrapper">
      <span>{quentity}</span>
      <p style={packed ? { textDecoration: "line-through" } : {}}>{product}</p>
      <div>
        <button onClick={() => handleDoneItems(id)} className="doneBtn">
          Done
        </button>
        <button onClick={() => handleDeleteItems(id)} className="delBtn">
          Delete
        </button>
      </div>
    </li>
  );
};

export default List;
