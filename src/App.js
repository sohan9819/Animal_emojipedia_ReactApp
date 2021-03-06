import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "đĩ": "Monkey Face",
  "đ": "Monkey",
  "đĻ": "Gorilla",
  "đĻ§": "Orangutan",
  "đļ": "Dog Face",
  "đ": "Dog",
  "đĻŽ": "Guide Dog",
  "đ": "đĻē Service Dog",
  "đŠ": "Poodle",
  "đē": "Wolf",
  "đĻ": "Fox",
  "đĻ": "Raccoon",
  "đą": "Cat Face",
  "đ": "Cat",
  "đ": "âŦ Black Cat",
  "đĻ": "Lion",
  "đ¯": "Tiger Face",
  "đ": "Tiger",
  "đ": "Leopard",
  "đ´": "Horse Face",
  "đ": "Horse",
  "đĻ": "Unicorn",
  "đĻ": "Zebra",
  "đĻ": "Deer",
  "đĻŦ": "Bison",
  "đŽ": "Cow Face",
  "đ": "Ox",
  "đ": " Water Buffalo",
  "đ": " Cow",
  "đˇ": " Pig Face",
  "đ": " Pig",
  "đ": "Boar",
  "đŊ": "Pig Nose",
  "đ": "Ram",
  "đ": "Ewe",
  "đ": "Goat",
  "đĒ": "Camel",
  "đĢ": "Two-Hump Camel",
  "đĻ": "Llama",
  "đĻ": "Giraffe",
  "đ": "Elephant",
  "đĻŖ": "Mammoth",
  "đĻ": "Rhinoceros",
  "đĻ": "Hippopotamus",
  "đ­": "Mouse Face",
  "đ": "Mouse",
  "đ": "Rat",
  "đš": "Hamster",
  "đ°": "Rabbit Face",
  "đ": "Rabbit",
  "đŋ": "Chipmunk",
  "đĻĢ": "Beaver",
  "đĻ": "Hedgehog",
  "đĻ": "Bat",
  "đģ": "Bear",
  "đģ": "ââī¸ Polar Bear",
  "đ¨": "Koala",
  "đŧ": "Panda",
  "đĻĨ": "Sloth",
  "đĻĻ": "Otter",
  "đĻ¨": "Skunk",
  "đĻ": "Kangaroo"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  var [meaning, setmeaning] = useState("");
  var [clicked, setclicked] = useState("");

  const emojiInputHandler = (event) => {
    if (event.target.value === "") {
      setmeaning("");
    } else if (emojiDictionary[event.target.value] === undefined) {
      setmeaning(" : Not avilable in the database :(");
    } else {
      setmeaning(" : " + emojiDictionary[event.target.value]);
    }
    setclicked(event.target.value);
  };

  const liClickhandler = (item) => {
    setmeaning(" : " + emojiDictionary[item]);
    setclicked(item);
  };

  return (
    <div className="App">
      <h1>Welcome to Animal emojipedia app</h1>
      <h2> Enter you animal emoji here</h2>
      <input onChange={emojiInputHandler} type="text"></input>
      <h2>
        {clicked}
        {meaning}
      </h2>
      <ul>
        {emojiList.map((item, index) => {
          if (index <= 10) {
            return (
              <li
                onClick={() => {
                  liClickhandler(item);
                }}
              >
                {" "}
                {item}{" "}
              </li>
            );
          }
        })}
      </ul>
    </div>
  );
}
