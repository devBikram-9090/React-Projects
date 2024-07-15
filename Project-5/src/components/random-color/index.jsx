import { useEffect, useState } from "react";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("black");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }
    console.log(hexColor);
    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r},${g},${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <div
      style={{
        height: "90vh",
        width: "90vw",
        background: color,
      }}
    >
      <button
        className="bg-white text-black"
        onClick={
          typeOfColor === "hex"
            ? handleCreateRandomHexColor
            : handleCreateRandomRgbColor
        }
      >
        Genarate random color
      </button>
      <button
        className="bg-white text-black"
        onClick={() => setTypeOfColor("hex")}
      >
        Genarate HEX color
      </button>
      <button
        className="bg-white text-black"
        onClick={() => setTypeOfColor("rgb")}
      >
        Genarate RGB color
      </button>
      <div className="flex justify-center items-center text-white text-6xl mt-10 flex-col gap-5">
        <h3>{typeOfColor === "rgb" ? "RGB color" : "Hex Color"}</h3>
        <h1>{color}</h1>
      </div>
    </div>
  );
}
