import React from "react";
import { ScatterChart } from "./bubblechart";

const SizeTimeProfitGraph = () => {
  return (
    <div>
      <h1 style={{ color: "white" }}>Small Studios Make Big Money</h1>
      <div
        className="subsection"
        style={{
          position: "relative",
          width: "50%"
        }}
      >
        <p style={{ color: "white" }}>
          Thinking about a career not being a wage slave and want to develop
          your own games? Of course you can. In the recent 5 years, independent
          game devs and small studios has created many phenomenal game products
          that hit players' interest so hard. Among Us, Valheim, Terraria... so
          many outstanding indie games that even surpass the market perforamnce
          of Triple-A masterpiece. If you are hesitating that these are
          extremely fortuitous cases. We'll show you they are not that random.
          "I'm just a poor tiny developer, does develop indies mean that I am
          doomed to failure?" I think not!
          <br />
          We selected each year's top 10 indie games between 2017 to 2021. The
          node size represents the relative game revenue and the color shows its
          Metacritic score from game critics! You can check the game's info by
          hovering over the nodes. :)
        </p>
        <ScatterChart />
      </div>
    </div>
  );
};

export default SizeTimeProfitGraph;
