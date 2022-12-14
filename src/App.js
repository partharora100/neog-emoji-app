import { useState } from "react";
import "./styles.css";

export default function App(event) {
  let [meaning, setMeaning] = useState("Select the emoji to know th meaning");

  const emojiObject = {
    "π": "smiling",
    "π": "happy",
    "π": "yummy face",
    "π₯Ά": "cold face",
    "π¨": "fearful face",
    "π": "beating heart",
    "π©": "poop",
    "π΅": "music",
    "πΊπΌ": "dance",
    "π€": "mic",
    "π₯": "drum"
  };

  const emojiArray = Object.keys(emojiObject);

  function changeEventHandler(event) {
    let userInput = event.target.value;
    meaning = emojiObject[userInput];

    if (meaning === undefined) {
      meaning = "We don't have this in out Database";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    meaning = emojiObject[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1 style={{ color: "#009870" }}>Inside Out!!</h1>
      <input
        placeholder="Search emoji here"
        onChange={changeEventHandler}
      ></input>
      <div className="message">{meaning}</div>
      <ul>
        {emojiArray.map(function (emoji) {
          return (
            <li key={emoji} onClick={() => emojiClickHandler(emoji)}>
              {emoji}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
