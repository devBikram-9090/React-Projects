import React from "react";

function Navigation() {
  return (
    <div>
      <nav className="flex justify-between max-w-7xl m-auto h-20 items-center">
        <div>
          <img
            src="http://www.pngmart.com/files/4/Nike-Logo-Transparent-Background.png"
            alt="logo"
            className="h-24 mt-9"
          />
        </div>
        <ul className="flex gap-6">
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Location</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <button className="py-1.6 px-4 bg-red-800 text-white h-8 font-medium">
          Login
        </button>
      </nav>
    </div>
  );
}

export default Navigation;
