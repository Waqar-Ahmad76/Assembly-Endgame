import "./App.css";
import { languages } from "./languages";

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
      </main>
    </>
  );
}

export default App;
