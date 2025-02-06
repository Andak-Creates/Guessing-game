# Color Guessing Game

A fun and interactive Color Guessing Game built with React.js. The objective is to guess the correct color from a set of color options based on the target color displayed. The game provides visual feedback on each guess, and the score is updated accordingly.

---

## Description

The Color Guessing Game challenges players to guess the correct color displayed in a color box. Players are presented with six color options, one of which matches the target color. The game gives instant feedback on whether the guess is correct or wrong. With each correct guess, the score increases, and players can restart the game with a new round.

---

## Features

- Randomly generated target color and color options
- User-friendly interface with clear game instructions
- Score tracking and feedback messages
- Responsive design for mobile, tablet, and desktop devices
- Animations for correct and wrong guesses
- Option to start a new game

---

## Tech Stack

- **Frontend**: React.js
- **Styling**: CSS (with animations for feedback)
- **State Management**: React's `useState` and `useEffect` hooks

---

## Installation

1. Clone the repository to your local machine:

   ```bash
   git clone https://github.com/your-username/color-guessing-game.git
Navigate to the project directory:

bash
Copy
Edit
cd color-guessing-game
Install the required dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
The app will open in your default web browser at http://localhost:3000.

Usage
When the game starts, a target color will be displayed in a color box.
You’ll see six color options as clickable buttons.
Click on one of the color buttons to guess the color.
Feedback will be shown whether your guess is correct or wrong.
After a maximum of 3 tries, the game will either declare you a winner or let you know if you’ve lost.
You can start a new game by clicking the “Play Again” button once the round is over.
