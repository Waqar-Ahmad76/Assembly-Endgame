import "./App.css";
import { languages } from "./languages";
import { useState } from "react";

function App() {
  const languageList = languages.map((language) => (
    <span
      key={language.name}
      style={{
        backgroundColor: language.backgroundColor,
        color: language.color,
        padding: "4.5px",
        gap: "6px",
        borderRadius: "3px",
        display: "inline-block",
      }}
    >
      {language.name}
    </span>
  ));

  const [currentWord, setCurrentWord] = useState("react");
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
        {alphabet.toUpperCase()}
      </span>
    );
  });
  return (
    <>
      <main>
        <header>
          <h1>Assembly:Endgame</h1>
          <p>
            Guess the word unde 8 attempts to keep the programming languages
            safe from Assembly!
          </p>
        </header>
        <section className="status">
          <h2>You win!</h2>
          <p id="message">Well done! 🎉</p>
        </section>
        <section className="languages">{languageList}</section>
        <section className="word">{alphabets}</section>
      </main>
    </>
  );
}

export default App;
