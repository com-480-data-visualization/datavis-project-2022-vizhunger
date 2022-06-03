import React, { Component } from "react";
import Sankey from "./Sankey";
import { Group } from "@vx/group";
import { Text } from "@vx/text";
import Sidedata from "./sidedata.json";
import { Tooltip } from "@mui/material";
import { ResponsiveSankey } from "@nivo/sankey";
import { scaleSequential, interpolateCool } from "d3-scale";
import Data from "./data.js";
import { format as d3format } from "d3-format";
import { extent } from "d3-array";
import { LinkHorizontal } from "@vx/shape";
import { linkHorizontal } from "d3-shape";

const path = linkHorizontal()
  .source((d) => [d.source.x1, d.y0])
  .target((d) => [d.target.x0, d.y1]);

const color = scaleSequential(interpolateCool);
const format = d3format(",d");

export class Bipartide extends Component {
  state = {
    data: Data
  };

  render() {
    return (
      <div style={{ height: 450 }}>
        <ResponsiveSankey
          data={this.state.data}
          margin={{ top: 30, right: 100, bottom: 50, left: 225 }}
          colors={[
            "#663399",
            "#7750a9",
            "#8a72be",
            "#80d2e6",
            "#50bed2",
            "#1f9fb6"
          ]}
          nodeTooltip={(node) => {
            const index = Sidedata.findIndex((x) => x.name === node.id);
            if (index !== -1) {
              return (
                <div>
                  <h1>{node.id}</h1>
                  <p>Median annual package: {Sidedata[index].salary}$ </p>
                  <p>HQ: {Sidedata[index].location} </p>
                </div>
              );
            } else {
              return <div>{node.id}</div>;
            }
          }}
          linkOpacity={0.75}
          linkHoverOpacity={0.8}
          linkHoverOthersOpacity={0.3}
          align="center"
          nodeOpacity={1}
          nodeWidth={18}
          nodeBorderColor="inherit:darker(0.8)"
          linkHoverOthersOpacity={0.1}
          enableLinkGradient={true}
          labelPosition="outside"
          labelPadding={16}
          labelTextColor="inherit:darker(1)"
          animate={true}
          motionStiffness={120}
          motionDamping={11}
          labelTextColor="#ffffff"
        />
      </div>
    );
  }
}
