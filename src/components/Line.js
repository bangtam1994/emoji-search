import React, { useState } from "react";
import data from "../data.json";
// import { CopyToClipboard } from "react-copy-to-clipboard";

// const [copySuccess, setCopySuccess] = useState("");
// const copyToClipboard = event => {
//   setCopySuccess(event);
/*data[0] = {
    "title": "100",
    "symbol": "💯",
    "keywords": "100 hundred points symbol symbol wow wow win win perfect perfect parties parties"
  }

  */

//  onChange({target: {value}}){
//     this.setState({value, copied: false});
//   };

//   onCopy(){
//     this.setState({copied: true});
//   };

function Line(props) {
  return (
    <div className="line">
      {data.map((elem, index) => {
        if (elem.keywords.indexOf(props.resultSearch) !== -1) {
          return (
            <button className="eachLine" key={index}>
              <span>{elem.symbol} </span> <span> {elem.title} </span>{" "}
              {/* <CopyToClipboard text={this.state.value} onCopy={this.onCopy}>
          <button>Copy</button>
        </CopyToClipboard>> */}
            </button>
          );
        }
      })}
    </div>
  );
}

export default Line;
