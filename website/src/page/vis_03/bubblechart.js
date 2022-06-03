import React, { Component } from "react";
import Data from "./data.json";
import { ResponsiveScatterPlot, Node } from "@nivo/scatterplot";

// side data for viz1
export class ScatterChart extends Component {
  state = {
    data: Data
  };

  render() {
    return (
      // make sure parent container have a defined height when using
      //    nodeSize: You can also use an object to define a varying size, it must conform to the following interface:

      // {
      //     key:    string
      //     values: [min: number, max: number]
      //     sizes:  [min: number, max: number]
      // }
      // Then the size of each node will depend on the value of key and sizes.

      // If you use a custom function, it will receive the current node and must return a number.
      <div style={{ height: 450 }}>
        <ResponsiveScatterPlot
          data={this.state.data}
          margin={{ top: 50, right: 110, bottom: 50, left: 65 }}
          xScale={{ type: "linear", min: 0, max: "auto" }}
          xFormat=">-.2f"
          yScale={{ type: "linear", min: 0, max: "auto" }}
          yFormat=">-.2f"
          blendMode="multiply"
          colors={{ scheme: "blue_purple" }}
          nodeSize={(node) => {
            return node.size + 8;
          }}
          // nodeSize={10}
          tooltip={(node) => {
            return (
              <div
                style={{
                  background: "white",
                  padding: "3px 3px",
                  border: "1px solid #ccc"
                }}
              >
                {node.node.data.game} by {node.node.data.studio} (
                {node.node.data.release})
                <br />
                Revenue: ${node.node.data.revenue}M
              </div>
            );
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            orient: "bottom",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 30,
            legend: "Dev Team Size",
            legendPosition: "middle",
            legendOffset: 46
          }}
          axisLeft={{
            orient: "left",
            tickSize: 5,
            tickPadding: 5,
            tickRotation: -30,
            legend: "Dev Duration (Months)",
            legendPosition: "middle",
            legendOffset: -60
          }}
          theme={{
            textColor: "#FFFFFF",
            fontSize: "15px"
          }}
          legends={[
            {
              itemTextColor: "#FFFFFF",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 115,
              translateY: 0,
              itemWidth: 100,
              itemHeight: 12,
              itemsSpacing: 5,
              itemDirection: "left-to-right",
              symbolSize: 12,
              symbolShape: "circle",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1
                  }
                }
              ]
            }
          ]}
        />
      </div>
    );
  }
}
