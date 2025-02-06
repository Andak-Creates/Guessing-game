import React, { useState, useEffect } from "react";
import "../CSS/colorGame.css";

const generateRandomColor = () => {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
};

const ColorGame = () => {
  const [targetColor, setTargetColor] = useState("");
  const [colorOptions, setColorOptions] = useState([]);
  const [score, setScore] = useState(0);
  const [status, setStatus] = useState("Take a guess!");
  const [tries, setTries] = useState(0);
  const [correctGuesses, setCorrectGuesses] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    generateNewRound();
  }, []);

  const generateNewRound = () => {
    const newTargetColor = generateRandomColor();
    const newColorOptions = [
      newTargetColor,
      ...Array(5)
        .fill(null)
        .map(() => generateRandomColor()),
    ].sort(() => Math.random() - 0.5);
    setTargetColor(newTargetColor);
    setColorOptions(newColorOptions);
  };

  const handleGuess = (color) => {
    if (gameOver) return;

    setTries(tries + 1);

    if (color === targetColor) {
      setCorrectGuesses(correctGuesses + 1);
      setStatus("Correct! 🎉");

      // Trigger correct guess animation
      document.querySelector(".color-box").classList.add("correct");
      setTimeout(() => {
        document.querySelector(".color-box").classList.remove("correct");
      }, 1000); // Remove class after animation ends
    } else {
      setStatus("Wrong! Try again. ❌");

      // Trigger wrong guess animation
      document.querySelector(".color-box").classList.add("wrong");
      setTimeout(() => {
        document.querySelector(".color-box").classList.remove("wrong");
      }, 1000); // Remove class after animation ends
    }

    if (tries + 1 === 3) {
      if (correctGuesses + (color === targetColor ? 1 : 0) >= 2) {
        setStatus("You Win! 🎉");
        setScore(score + 1);
      } else {
        setStatus("You Lose! 😢");
      }
      setGameOver(true);
    } else {
      generateNewRound();
    }
  };

  const handleNewGame = () => {
    setStatus("Take a guess!");
    setTries(0);
    setCorrectGuesses(0);
    setGameOver(false);
    generateNewRound();
  };

  return (
    <div className="color-game">
      <h1>Color Guessing Game</h1>
      <p data-testid="gameInstructions">Guess the correct color to win</p>
      <p data-testid="gameStatus">{status}</p>
      <div
        data-testid="colorBox"
        className="color-box"
        style={{ backgroundColor: targetColor }}
      ></div>
      <div className="tries-bar">
        {[...Array(3)].map((_, index) => (
          <span key={index} className="try-icon">
            {index < correctGuesses ? "✅" : index < tries ? "❌" : "⚪"}
          </span>
        ))}
      </div>
      <div className="color-options">
        {colorOptions.map((color) => (
          <button
            key={color}
            data-testid="colorOption"
            className="color-button"
            style={{ backgroundColor: color }}
            onClick={() => handleGuess(color)}
            disabled={gameOver}
          ></button>
        ))}
      </div>
      <p data-testid="score">Score: {score}</p>
      {gameOver && (
        <button data-testid="newGameButton" onClick={handleNewGame}>
          Play Again
        </button>
      )}
    </div>
  );
};

export default ColorGame;
