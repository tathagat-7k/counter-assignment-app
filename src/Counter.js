import React, { useRef, useState } from "react";

const ONE_SEC = 1000;

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [showPauseButton, setShowPauseButton] = useState(false);
  const [isCounterPaused, setIsCounterPaused] = useState(false);

  const counterInterval = useRef();

  const startCounting = () => {
    setShowPauseButton(true);
    counterInterval.current = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, ONE_SEC);
  };

  const stopCounting = () => {
    if (isCounterPaused) {
      startCounting();
    } else {
      clearInterval(counterInterval.current);
    }
    setIsCounterPaused(!isCounterPaused);
  };

  const resetCounter = () => {
    clearInterval(counterInterval.current);
    setCounter(0);
    setShowPauseButton(false);
  };

  return (
    <div>
      <h1 className="counter-number">{counter}</h1>
      <div className="action-button-container">
        {!showPauseButton ? (
          <button onClick={startCounting}>Start</button>
        ) : (
          <>
            <button onClick={stopCounting}>
              {isCounterPaused ? "Resume" : "Pause"}
            </button>
            <button onClick={resetCounter}>Reset</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Counter;
