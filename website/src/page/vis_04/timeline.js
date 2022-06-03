import React from "react";
import { ResponsiveStream } from "@nivo/stream";
import data from "./datanew.json";

const MyResponsiveStream = ({ data }) => (
  <ResponsiveStream
    data={data}
    keys={[
      "Action",
      "Adventure",
      "Fighting",
      "Misc",
      "Platform",
      "Puzzle",
      "Racing",
      "Role-Playing",
      "Shooter",
      "Simulation",
      "Sports",
      "Strategy"
    ]}
    margin={{ top: 30, right: 125, bottom: 50, left: 60 }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      orient: "bottom",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 30,
      legend: "Year (200X / 20XX)",
      legendOffset: 36
    }}
    axisLeft={{
      orient: "left",
      tickSize: 5,
      tickPadding: 5,
      tickRotation: -30,
      legend: "",
      legendOffset: -40
    }}
    enableGridX={true}
    enableGridY={false}
    offsetType="silhouette"
    colors={{ scheme: "nivo" }}
    fillOpacity={1.0}
    borderColor={{ theme: "background" }}
    defs={[
      {
        id: "dots",
        type: "patternDots",
        background: "inherit",
        color: "#2c998f",
        size: 4,
        padding: 2,
        stagger: true
      },
      {
        id: "squares",
        type: "patternSquares",
        background: "inherit",
        color: "#e4c912",
        size: 6,
        padding: 2,
        stagger: true
      }
    ]}
    fill={[
      {
        match: {
          id: "Paul"
        },
        id: "dots"
      },
      {
        match: {
          id: "Marcel"
        },
        id: "squares"
      }
    ]}
    dotSize={8}
    dotColor={{ from: "color" }}
    dotBorderWidth={2}
    dotBorderColor={{
      from: "color",
      modifiers: [["darker", 0.7]]
    }}
    theme={{
      textColor: "#FFFFFF",
      fontSize: "15px"
    }}
    legends={[
      {
        anchor: "bottom-right",
        direction: "column",
        translateX: 100,
        itemWidth: 80,
        itemHeight: 20,
        itemTextColor: "#FFFFFF",
        symbolSize: 12,
        symbolShape: "circle",
        effects: [
          {
            on: "hover",
            style: {
              itemTextColor: "#000000"
            }
          }
        ]
      }
    ]}
  />
);

const Timeline = () => {
  return (
    <div>
      <h1
        style={{
          color: "white"
        }}
      >
        Timeline: Game Sales by Popular Genre
      </h1>
      <div
        className="subsection"
        style={{
          position: "relative",
          width: "50%"
        }}
      >
        <p
          style={{
            color: "white"
          }}
        >
          In 1972, the first gaming machine -- Magnavox Odyssey, breaks into our
          lives and offically opened El Dorado's gate for game developers and
          the whole gaming industry. Players' zeal has motivated the devs to
          develop games in different genres to conquer the market. But, the
          throne is never left for a certain game genre -- from last century's
          RPG to nowaday's Shooting and Sandbox Simulation. As a game dev, you
          probably don't want your game to be against the market trend and
          players' preference. Feeling headache about where to find the market
          trends in the game industry? We'll show you the boomers and zoomers of
          game sales by genre from 2000 to 2016 for you! Try hover around the
          years, you'll see how the sales change for each category over the
          years.
        </p>
        <div style={{ height: 460 }}>
          <MyResponsiveStream data={data} />
        </div>
      </div>
    </div>
  );
};

export default Timeline;
