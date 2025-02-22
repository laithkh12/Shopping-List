import { useState } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Main from "./component/Main";
import "./index.css";

function App() {
  const [items, setItems] = useState([]);

  const handleAddItems = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleDeleteItems = (id) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  const handleDoneItems = (id) => {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  return (
    <div className="appWrapper">
      <Header />
      <Main
        items={items}
        handleAddItems={handleAddItems}
        handleDeleteItems={handleDeleteItems}
        handleDoneItems={handleDoneItems}
      />
      <Footer items={items} />
    </div>
  );
}

export default App;
