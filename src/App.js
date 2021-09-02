import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "🤣": "Rolling on the Floor Laughing",
  "😊": "Smiling Face with Smiling Eyes",
  "😒": "Unamused Face",
  "😭": "Loudly Crying Face",
  "😇": "Smiling Face with Halo",
  "😜": "Winking Face with Tongue",
  "🤩": "Star-Struck",
  "🤑": "Money-Mouth Face",
  "🤢": "Nauseated Face",
  "🤡": "Clown Face",
  "👽": "Alien",
  "👻": "Ghost",
  "👿": "Angry Face with Horns",
  "🤖": "Robot",
  "💯": "Hundred Points",
  "🔥": "Fire",
  "❤️": "Red Heart",
  "✨": "Sparkles",
  "🌈": "Rainbow",
  "👍": "Thumbs Up",
  "🙏": "High Five",
  "✌️": "Victory Hand",
  "🙌": "Raising Hands",
  "👋": "Waving Hand"
};

export default function App() {
  // for change object to array
  var emojiDictionaryList = Object.keys(emojiDictionary);

  // set meaning of emoji which is typed/clicked
  var [meaning, setMeaning] = useState(
    "The interpretation will appear here..."
  );
  // set emoji which is clicked/typed
  var [selectedEmoji, setSelectedEmoji] = useState("");

  // whent emoji given as input do this
  function onChangeListner(event) {
    var userInput = event.target.value;

    if (userInput in emojiDictionary) {
      setMeaning(emojiDictionary[userInput]);
      setSelectedEmoji(userInput);
    } else {
      setMeaning("Ooops! Emoji not found :(");
      setSelectedEmoji("");
    }
  }

  // listner for when the emoji is clicked
  function onClickListner(emoji) {
    setMeaning(emojiDictionary[emoji]);
    setSelectedEmoji(emoji);
  }

  return (
    <div className="App">
      {/* NAV */}
      <nav className="navbar">
        <h1 className="nav-head">EMOJI INTERPRETER</h1>
      </nav>

      {/*####### APP BODY #######*/}
      <section className="app-body">
        {/* EMOJI INPUT BOX */}
        <input
          className="emoji-input"
          placeholder="Enter your emoji..."
          onChange={onChangeListner}
        ></input>

        {/* MEANING DISPLAY */}
        <section className="meaning-output">
          <div className="meaning-output-text">
            {selectedEmoji} {meaning}
          </div>
        </section>

        {/* EMOJI PALLETE */}
        <section className="emoji-pallete">
          <div className="emoji-pallete-text">
            Or choose from the following emojis...
          </div>

          {/* printing all emojis using map function */}
          <div className="emoji-pallete-list">
            {emojiDictionaryList.map((emoji) => {
              return (
                <span
                  className="emoji"
                  key={emoji}
                  onClick={() => onClickListner(emoji)}
                >
                  {emoji}
                </span>
              );
            })}
          </div>
        </section>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <h2 className="footer-head">ABOUT</h2>
        <p className="footer-text">
          This emoji interpreter is made using ReactJS. Use this app to find the
          meaning of your favorite emojis. You can enter the emoji or click on
          one to interprete it.
        </p>
      </footer>
    </div>
  );
}
