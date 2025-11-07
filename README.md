#  Assembly: Endgame

**Assembly: Endgame** is a fun, React-based hangman-style game where you must guess a random word before *Assembly* destroys them all!  
You have 8 attempts — fail, and the languages perish 💀. Succeed, and celebrate with confetti 🎉!

---

##  Gameplay Overview

- Guess the hidden **a random word** one letter at a time.
- Each wrong guess eliminates one language (marked with 💀).
- Win by revealing all letters before running out of attempts.
- Click **“New Game”** to start again with a new random word.

---



---

##  Features

✅ Randomized programming language on each round  
✅ Dynamic keyboard that updates with correct/wrong guesses  
✅ Lost languages visually marked with 💀 overlay  
✅ Win/Lose message system  
✅ Confetti animation on victory  
✅ “New Game” button to restart instantly  
✅ Smooth styling and dynamic UI updates with React  
✅ Efficient Keyboard Controls: All letter guessing can be performed via the keyboard. A global keydown listener is implemented using the useCallback and useEffect hooks, ensuring the event listener is only attached once to the document and cleaned up efficiently for optimal performance.

---

##  React Concepts Used

| Concept | Description |
|----------|-------------|
| **useState Hook** | To manage guessed letters, current word, and wrong guesses |
| **Conditional Rendering** | To show different UI for win/loss states |
| **Array Mapping** | To render letters, keyboard buttons, and languages dynamically |
| **Dynamic Class Names (`clsx`)** | To visually indicate correct/wrong guesses |
| **Event Handling (`onClick`)** | For letter guessing and game reset actions |
| **Derived State Logic** | To calculate wrong guesses and check for game completion |
| **Component Re-rendering** | UI automatically updates as state changes |
| **External Library Integration** | Added confetti animation for win celebration |

---

##  Tech Stack

- **React.js**
- **Vite** 
- **CSS3**
- **clsx** – for conditional class handling
- **react-confetti** – for celebration effects

---


