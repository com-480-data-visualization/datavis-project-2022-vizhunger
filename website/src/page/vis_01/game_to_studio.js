import React from "react";
import { Bipartide } from "./bipartide";
import data from "./data.js";
// install (please make sure versions match peerDependencies)
// yarn add @nivo/core @nivo/sankey

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.
const GameToStudio = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Popular Games and Their Studios</h1>
      <div
        className="subsection"
        style={{
          position: "relative",
          width: "50%"
        }}
      >
        <p style={{ color: "white" }}>
          As a noble game dev, you must have a fever with some particular game
          genres, and you don't want to be stuck with the development you have
          no interest in. Do you know about the favors of big game studios? Do
          you know how much you can get paid for a game dev career in those big
          heads? You'll find your answer now. Check out the flows and boxes,
          you'll see how many games under each genre do the selected company
          made from 2011 to 2021, and how much you can typically earn!
        </p>
        <Bipartide data={data} />
      </div>
    </div>
  );
};

export default GameToStudio;
