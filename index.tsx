"use client";
import { generateRandomNumber } from "@/src/Tools/RandomNumberGenerator/helper";
import React, { useEffect, useState } from "react";

export const RandomNumberGenerator = ({
  initialNumber,
}: {
  initialNumber: number;
}) => {
  const [min, setMin] = useState(1);
  const [max, setMax] = useState(10);
  const [randomNumber, setRandomNumber] = useState<number | string>(
    initialNumber
  );
  const [currentNumber, setCurrentNumber] = useState<number>(initialNumber);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  useEffect(() => {
    if (typeof randomNumber === "string") {
      return;
    }
    if (randomNumber === currentNumber) {
      setIsGenerating(false);
      return;
    }
    setIsGenerating(true);
    // increment currentNumber to randomNumber and stop when they are equal
    const timeout = setTimeout(() => {
      setCurrentNumber((currentNumber) => {
        if (currentNumber < randomNumber) {
          return currentNumber + 1;
        }
        return currentNumber - 1;
      });
    }, 10);
    return () => clearTimeout(timeout);
  }, [randomNumber, currentNumber]);

  return (
    <div>
      <h1>Random Number Generator</h1>
      <div className="flex flex-col sm:flex-row items-center justify-around mx-auto ">
        <span className="text-center text-7xl sm:text-8xl md:text-9xl py-10 sm:py-20">
          {typeof randomNumber === "string" ? randomNumber : currentNumber}
        </span>
        <div className="flex flex-col justify-between gap-8">
          <div className="flex flex-col">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="min-value"
            >
              Min Value
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="min-value"
              type="number"
              onChange={(e) => setMin(parseInt(e.target.value))}
              value={min}
              required
            />
          </div>
          <div className="flex flex-col">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              htmlFor="max-value"
            >
              Max Value
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="max-value"
              type="number"
              onChange={(e) => setMax(parseInt(e.target.value))}
              value={max}
              required
            />
          </div>
        </div>
      </div>
      <button
        className="w-full text-xl px-4 py-3 mt-4 text-white uppercase bg-blue-500 rounded-md hover:bg-blue-600 outline-none border-none hover:cursor-pointer
          disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:bg-blue-500 disabled:hover:cursor-not-allowed
        "
        onClick={() => setRandomNumber(generateRandomNumber(min, max))}
        disabled={isGenerating}
      >
        Generate
      </button>
    </div>
  );
};
