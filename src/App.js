import { useState } from "react";
import "./styles.css";

export default function App(event) {
  let [meaning, setMeaning] = useState("Select the emoji to know th meaning");

  const emojiObject = {
    "🙂": "smiling",
    "😃": "happy",
    "😋": "yummy face",
    "🥶": "cold face",
    "😨": "fearful face",
    "💓": "beating heart",
    "💩": "poop"
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
