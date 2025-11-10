import "./App.css";
import { languages } from "./languages";
import { useState, useCallback, useEffect } from "react";
import { clsx } from "clsx";
import { getFarewellText } from "./util";
import { getRandomWord } from "./word";
import Confetti from "react-confetti";

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState(() =>
    getRandomWord().toUpperCase()
  );
  const [wrongGuesses, setWrongGuesses] = useState(0);

  //derived variables
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  // console.log(wrongGuessCount);
  const gameLost = wrongGuessCount >= languages.length - 1;
  const gameWon = currentWord
    .split("")
    .every((letter) => guessedLetters.includes(letter));
  const isGameOver = gameWon || gameLost;
  const lastGuessedLetter = guessedLetters[guessedLetters.length - 1];
  const guessesLeft = languages.length - 1 - wrongGuessCount;
  // console.log(`guesses left ${guessesLeft}`)
  // console.log(isGameOver);

  const status = gameWon ? (
    <>
      <h2>You win!</h2> <p id="message">Well done! 🎉</p>
    </>
  ) : gameLost ? (
    <>
      <h2>Game over!</h2>
      <p id="message">You lose! Better start learning Assembly 😭</p>
    </>
  ) : wrongGuessCount == 0 ? (
    <p className="start-status">Guess the word!</p>
  ) : (
    <p id="farewell-message">
      {getFarewellText(languages[wrongGuessCount - 1].name)}
    </p>
  );

  const languageList = languages.map((language, index) => {
    const lostLang = index < wrongGuessCount;
    // console.log(
    //   `Chip ${index}: lostLang=${lostLang}, wrongCount=${wrongGuessCount}`
    // );
    const classes = clsx("chip", {
      lost: lostLang,
    });
    return (
      <span
        key={language.name}
        style={{
          backgroundColor: language.backgroundColor,
          color: language.color,
          padding: "4.5px",
          gap: "6px",
          borderRadius: "3px",
          display: "inline-block",
          position: "relative",
        }}
        className={classes}
      >
        {language.name}
      </span>
    );
  });

  // const wordArr = ;
  const alphabets = Array.from(currentWord).map((letter, index) => {
    const className = clsx({
      wrong: !guessedLetters.includes(letter.toUpperCase()),
    });
    // console.log(letter, className);

    return (
      <span
        className={className}
        style={{
          height: "40px",
          width: "40px",
          borderBottom: "1px solid #F9F4DA",
          // padding: "6px",
          backgroundColor: "#323232",

          textAlign: "center",
          lineHeight: "40px",
        }}
        key={index}
      >
        {guessedLetters.includes(letter)
          ? letter.toUpperCase()
          : gameLost
          ? letter.toUpperCase()
          : " "}
      </span>
    );
  });

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterBtns = letters.split("").map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    // console.log(isCorrect);

    return (
      <button
        key={letter}
        className={clsx({
          correct: isCorrect,
          wrong: isWrong,
        })}
        onClick={() => addGuessedLetter(letter)}
        disabled={isGameOver}
        aria-disabled={isGameOver}
        aria-label={`Letter ${letter}`}
      >
        {letter}
      </button>
    );
  });

  function addGuessedLetter(alphabet) {
    setGuessedLetters((prevLetters) => {
      return prevLetters.includes(alphabet)
        ? prevLetters
        : [...prevLetters, alphabet];
    });
  }

  function resetGame() {
    setGuessedLetters([]);
    setCurrentWord(getRandomWord());
    setWrongGuesses(0);
  }
  // console.log(`current word: ${currentWord}`)
  // console.log(`current word f: ${getRandomWord()}`)

  const handleKeyDown = useCallback((event) => {
    if (isGameOver){
      return;
    }
    const key = event.key.toUpperCase();
    if (key.length === 1 && key >= "A" && key <= "Z") {
      setGuessedLetters((prevGuessedLetters) => {
        return [...prevGuessedLetters, key];
      });
    }
  }, [isGameOver]);

  useEffect(() => {
    
     window.addEventListener("keydown", handleKeyDown);
      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
  }, [handleKeyDown]);

  return (
    <>
      <main>
        <header>
          <h1>Assembly:Endgame</h1>
          <p>
            Guess the word unde 8 attempts to keep the programming languages
            safe from Assembly!
          </p>
          <section
            className="status"
            aria-live="polite"
            role="status"
            style={
              gameWon
                ? { backgroundColor: "#10a95b" }
                : gameLost
                ? { backgroundColor: "#BA2A2A" }
                : {}
            }
          >
            {status}
          </section>
          <section className="sr-only" aria-live="polite" role="status">
            <p>
              {currentWord.includes(lastGuessedLetter)
                ? `Correct! the letter ${lastGuessedLetter} is in the word`
                : `Sorry! the letter ${lastGuessedLetter} is not in the word`}
              You have {guessesLeft} attempts left
            </p>
            <p>
              Current word:{" "}
              {currentWord
                .split("")
                .map((letter) => {
                  return guessedLetters.includes(letter)
                    ? letter + "."
                    : "blank";
                })
                .join()}
            </p>
          </section>
        </header>

        <section className="languages">{languageList}</section>
        <section className="word">{alphabets}</section>
        <section className="keyboard">{letterBtns}</section>
        {isGameOver && (
          <button className="new-game" onClick={resetGame}>
            New Game
          </button>
        )}
        {gameWon && <Confetti recycle={false} numberOfPieces={1000} />}
      </main>
    </>
  );
}

export default App;
