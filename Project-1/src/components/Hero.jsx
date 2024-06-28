import React from "react";

function Hero() {
  return (
    <main className="flex max-w-7xl m-auto items-center h-screen">
      <div>
        <h1 className="text-8xl font-extrabold">YOUR FEET DESERVES THE BEST</h1>
        <p className="font-bold my-4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic esse
          excepturi facere expedita nulla repudiandae est accusamus! Alias,
          quidem iste.
        </p>
        <div className="flex gap-10 my-4">
          <button className="bg-red-700 px-4 py-1 text-white">Shop Now</button>
          <button className="px-4 py-1 bg-transparent border-solid ">
            Category
          </button>
        </div>
      </div>
      <div>
        <img
          src="https://freepngimg.com/thumb/shoes/27428-5-nike-shoes-transparent-background.png"
          alt="image"
        />
      </div>
    </main>
  );
}

export default Hero;
