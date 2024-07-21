import { useState } from "react";
import MenuList from "./menu-list";
import { FaMinus, FaPlus } from "react-icons/fa";

export default function MenuItem({ item }) {
  const [displayCurrent, setDisplayCurrent] = useState({});

  function handleToggleChildren(getCurrentLabel) {
    setDisplayCurrent({
      ...displayCurrent,
      [getCurrentLabel]: !displayCurrent[getCurrentLabel],
    });
  }

  console.log(displayCurrent);

  return (
    <li>
      <div className=" flex gap-5 text-white">
        <p>{item.label}</p>
        {item && item.Children && item.Children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {displayCurrent[item.label] ? (
              <FaMinus color="black" size={25} />
            ) : (
              <FaPlus color="black" size={25} />
            )}
          </span>
        ) : null}
      </div>
      {item &&
      item.Children &&
      item.Children.length > 0 &&
      displayCurrent[item.label] ? (
        <MenuList list={item.Children} />
      ) : null}
    </li>
  );
}
