import React from "react";

export const RandomNumberGenerator = () => {
  return (
    <div>
      <h1>RandomNumberGenerator</h1>
      <p>{`Randomly Generated Number: ${
        Math.floor(Math.random() * 100) + 1
      }`}</p>
    </div>
  );
};
