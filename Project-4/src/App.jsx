import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Accordian from "./components/accordian/Index";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <h2 className="text-red-700">Accordant Component</h2>
        <Accordian />
      </div>
    </>
  );
}

export default App;
