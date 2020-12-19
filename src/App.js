import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😀": "Grinning Face",
  "😃": " Grinning Face with Big Eyes",
  "😄": " Grinning Face with Smiling Eyes",
  "😁": " Beaming Face with Smiling Eyes",
  "😆": " Grinning Squinting Face",
  "😅": " Grinning Face with Sweat",
  "🤣": " Rolling on the Floor Laughing",
  "😂": " Face with Tears of Joy",
  "🙂": " Slightly Smiling Face",
  "🙃": " Upside-Down Face",
  "😉": " Winking Face",
  "😊": " Smiling Face with Smiling Eyes",
  "😇": " Smiling Face with Halo",
  "🥰": " Smiling Face with Hearts",
  "😍": " Smiling Face with Heart-Eyes",
  "🤩": " Star-Struck",
  "😘": " Face Blowing a Kiss",
  "😗": " Kissing Face",
  "😚": " Kissing Face with Closed Eyes",
  "😙": " Kissing Face with Smiling Eyes",
  "😋": " Face Savoring Food",
  "😛": " Face with Tongue",
  "😜": " Winking Face with Tongue",
  "🤪": " Zany Face",
  "😝": " Squinting Face with Tongue",
  "🤑": " Money-Mouth Face",
  "🤗": " Hugging Face",
  "🤭": " Face with Hand Over Mouth",
  "🤫": " Shushing Face",
  "🤔": " Thinking Face",
  "🤐": " Zipper-Mouth Face",
  "🤨": " Face with Raised Eyebrow",
  "😐": " Neutral Face",
  "😑": " Expressionless Face",
  "😶": " Face Without Mouth",
  "😏": " Smirking Face",
  "😒": " Unamused Face",
  "🙄": " Face with Rolling Eyes",
  "😬": " Grimacing Face",
  "🤥": " Lying Face",
  "😌": " Relieved Face",
  "😔": " Pensive Face",
  "😪": " Sleepy Face",
  "🤤": " Drooling Face",
  "😴": " Sleeping Face",
  "😷": " Face with Medical Mask",
  "🤒": " Face with Thermometer",
  "🤕": " Face with Head-Bandage",
  "🤢": " Nauseated Face",
  "🤮": " Face Vomiting",
  "🤧": " Sneezing Face",
  "🥵": " Hot Face",
  "🥶": " Cold Face",
  "🥴": " Woozy Face",
  "😵": " Dizzy Face",
  "🤯": " Exploding Head",
  "🤠": " Cowboy Hat Face",
  "🥳": " Partying Face",
  "😎": " Smiling Face with Sunglasses",
  "🤓": " Nerd Face",
  "🧐": " Face with Monocle",
  "😕": " Confused Face",
  "😟": " Worried Face",
  "🙁": " Slightly Frowning Face",
  "☹": "️ Frowning Face",
  "😮": " Face with Open Mouth",
  "😯": " Hushed Face",
  "😲": " Astonished Face",
  "😳": " Flushed Face",
  "🥺": " Pleading Face",
  "😦": " Frowning Face with Open Mouth",
  "😧": " Anguished Face",
  "😨": " Fearful Face",
  "😰": " Anxious Face with Sweat",
  "😥": " Sad but Relieved Face",
  "😢": " Crying Face",
  "😭": " Loudly Crying Face",
  "😱": " Face Screaming in Fear",
  "😖": " Confounded Face",
  "😣": " Persevering Face",
  "😞": " Disappointed Face",
  "😓": " Downcast Face with Sweat",
  "😩": " Weary Face",
  "😫": " Tired Face",
  "🥱": " Yawning Face",
  "😤": " Face with Steam From Nose",
  "😡": " Pouting Face",
  "😠": " Angry Face",
  "🤬": " Face with Symbols on Mouth",
  "😈": " Smiling Face with Horns",
  "👿": " Angry Face with Horns",
  "💀": " Skull",
  "☠": "️ Skull and Crossbones",
  "💩": " Pile of Poo",
  "🤡": " Clown Face",
  "👹": " Ogre",
  "👺": " Goblin",
  "👻": " Ghost",
  "👽": " Alien",
  "👾": " Alien Monster",
  "🤖": " Robot",
  "😺": " Grinning Cat",
  "😸": " Grinning Cat with Smiling Eyes",
  "😹": " Cat with Tears of Joy",
  "😻": " Smiling Cat with Heart-Eyes",
  "😼": " Cat with Wry Smile",
  "😽": " Kissing Cat",
  "🙀": " Weary Cat",
  "😿": " Crying Cat",
  "😾": " Pouting Cat",
  "💋": " Kiss Mark",
  "👋": " Waving Hand",
  "🤚": " Raised Back of Hand",
  "🖐": "️ Hand with Fingers Splayed",
  "✋": " Raised Hand",
  "🖖": " Vulcan Salute",
  "👌": " OK Hand",
  "🤏": " Pinching Hand",
  "✌": "️ Victory Hand",
  "🤞": " Crossed Fingers",
  "🤟": " Love-You Gesture",
  "🤘": " Sign of the Horns",
  "🤙": " Call Me Hand",
  "👈": " Backhand Index Pointing Left",
  "👉": " Backhand Index Pointing Right",
  "👆": " Backhand Index Pointing Up",
  "🖕": " Middle Finger",
  "👇": " Backhand Index Pointing Down",
  "👍": " Thumbs Up",
  "👎": " Thumbs Down",
  "✊": " Raised Fist",
  "👊": " Oncoming Fist",
  "🤛": " Left-Facing Fist",
  "🤜": " Right-Facing Fist",
  "👏": " Clapping Hands",
  "🙌": " Raising Hands",
  "👐": " Open Hands",
  "🤲": " Palms Up Together",
  "🤝": " Handshake",
  "🙏": " Folded Hands",
  "💅": " Nail Polish",
  "🤳": " Selfie",
  "❤️": "love"
};
const emoKey = Object.keys(emojiDictionary);

export default function App() {
  const [emoInput, setinput] = useState("");
  const [emoMean, setMean] = useState("Meaning will appear here");

  function inputHandler(event) {
    var newInput = event.target.value;
    setinput(newInput);
    if (newInput in emojiDictionary) {
      setMean(emojiDictionary[newInput]);
    } else {
      setMean("Emoji not recognized 😕 (Try another)");
    }
  }

  function clickHandler(inputEmoji) {
    setinput(inputEmoji);
    setMean(emojiDictionary[inputEmoji]);
  }

  return (
    <div className="App">
      <h1 className="head">EmoCyclopedia</h1>
      <input
        className="inputEmo"
        onChange={inputHandler}
        value={emoInput}
        placeholder={"Enter your emoji here(One emoji at a time)."}
        style={{ width: "70%" }}
      ></input>
      <h2>{emoInput}</h2>
      <h2>
        {"👉 "} {emoMean}
        {" 👈🏿"}
      </h2>

      {emoKey.map(function (emoji) {
        return (
          <span className="span" onClick={() => clickHandler(emoji)}>
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
