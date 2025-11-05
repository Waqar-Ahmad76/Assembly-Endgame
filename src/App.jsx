import "./App.css";
import { languages } from "./languages";
import { useState } from "react";
import { clsx } from "clsx";

function App() {
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [currentWord, setCurrentWord] = useState("REACT");
  const [wrongGuesses, setWrongGuesses] = useState(0);
  const wrongGuessCount = guessedLetters.filter(
    (letter) => !currentWord.includes(letter)
  ).length;
  console.log(wrongGuessCount);
  const languageList = languages.map((language, index) => {
    const lostLang = index < wrongGuessCount;
    console.log(
      `Chip ${index}: lostLang=${lostLang}, wrongCount=${wrongGuessCount}`
    );
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
  const alphabets = Array.from(currentWord).map((alphabet, index) => {
    return (
      <span
        style={{
          height: "40px",
          width: "40px",
          borderBottom: "1px solid #F9F4DA",
          // padding: "6px",
          backgroundColor: "#323232",
          color: "#F9F4DA",
          textAlign: "center",
          lineHeight: "40px",
        }}
        key={index}
      >
        {guessedLetters.includes(alphabet) ? alphabet : " "}
      </span>
    );
  });

  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const letterBtns = Array.from(letters).map((letter) => {
    const isGuessed = guessedLetters.includes(letter);
    const isCorrect = isGuessed && currentWord.includes(letter);
    const isWrong = isGuessed && !currentWord.includes(letter);
    console.log(isCorrect);

    return (
      <button
        key={letter}
        className={clsx({
          correct: isCorrect,
          wrong: isWrong,
        })}
        onClick={() => addGuessedLetter(letter)}
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

    // if (!currentWord.includes(alphabet)) {
    //   setWrongGuesses( (prevWrongGuesses) => prevWrongGuesses + 1);
    // }
    // console.log( "wrong "+wrongGuesses)
  }

  

  return (
    <>
      <main>
        <header>
          <h1>Assembly:Endgame</h1>
          <p>
            Guess the word unde 8 attempts to keep the programming languages
            safe from Assembly!
          </p>
          <section className="status">
            <h2>You win!</h2>
            <p id="message">Well done! 🎉</p>
          </section>
        </header>

        <section className="languages">{languageList}</section>
        <section className="word">{alphabets}</section>
        <section className="keyboard">{letterBtns}</section>
        <button className="new-game">New Game</button>
      </main>
    </>
  );
}

export default App;
