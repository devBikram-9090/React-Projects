import { useState } from "react";
import "./App.css";
import TreeView from "./components/tree-menu";
import menus from "./components/tree-menu/data";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <TreeView menus={menus} />
    </>
  );
}

export default App;
