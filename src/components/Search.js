import React from "react";
import emojisunglasses from "../images/emoji-sunglasses.png";
import Line from "./Line";

function Search(props) {
  return (
    <div className="d-flex flex-direction-column">
      <h1>
        <img src={emojisunglasses} /> EmojiSearch <img src={emojisunglasses} />
      </h1>
      <input
        placeholder="What emoji are you looking for ?"
        type="text"
        name="text"
        value={props.search}
        onChange={props.handleSearch}
      />

      <Line resultSearch={props.search} />
    </div>
  );
}

export default Search;
