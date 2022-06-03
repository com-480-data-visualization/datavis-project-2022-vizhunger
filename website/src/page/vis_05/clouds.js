import React from "react";
import "d3-transition";
import { select } from "d3-selection";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

const resizeStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  border: "solid 1px #ddd",
  background: "#f0f0f0"
};

const options = {
  colors: ["#1f77b4", "#ff7f0e", "#2ca02c", "#d62728", "#9467bd", "#8c564b"],
  enableTooltip: true,
  deterministic: false,
  fontFamily: "Montserrat",
  fontSizes: [22, 32],
  fontStyle: "normal",
  fontWeight: "normal",
  padding: 1,
  rotations: 3,
  rotationAngles: [0, 90],
  scale: "sqrt",
  spiral: "archimedean",
  transitionDuration: 400
};

function getCallback(callback) {
  return function (word, event) {
    const isActive = callback !== "onWordMouseOut";
    const element = event.target;
    const text = select(element);
    text
      .on("click", () => {
        if (isActive) {
          window.open(`https://duckduckgo.com/?q=${word.text}`, "_blank");
        }
      })
      .transition()
      .attr("font-size", isActive ? "200%" : "100%")
      .attr("text-decoration", isActive ? "underline" : "none");
  };
}

const callbacks = {
  getWordTooltip: (word) =>
    `${word.text} has popularity score of ${word.value}.`,
  onWordClick: getCallback("onWordClick"),
  onWordMouseOut: getCallback("onWordMouseOut"),
  onWordMouseOver: getCallback("onWordMouseOver")
};

const Clouds = ({ country, words }) => {
  return (
    <div>
      <h1>{`You are now seeing the popular games in ${country}`}</h1>
      {/* <p>The games that are dominating the industry.</p> */}
      <ReactWordcloud callbacks={callbacks} words={words} options={options} />
    </div>
  );
};

export default Clouds;
