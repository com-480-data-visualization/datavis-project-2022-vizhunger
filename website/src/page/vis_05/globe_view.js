import React, { useState, useEffect, useMemo, useRef } from "react";
import Globe from "react-globe.gl";
import * as d3 from "d3";
import { Button, Select } from "@material-ui/core/";
import number from "numeral";
import Clouds from "./clouds";
// imgs
import globeTexture from "../../img/earth-night.jpg";
// data
// import data from "../../../public/datasets/cloudData.json";

const GlobalView = () => {
  // states
  const [globeData, setGlobeData] = React.useState({
    countries: {
      features: []
    },
    points: {
      features: []
    }
  });
  const [hoverD, setHoverD] = useState();
  const [alt, setAlt] = useState(2.4);
  const globe = useRef(null);
  const [clickDiv, setClickDiv] = useState(null);
  const [year, setYear] = useState("2021");
  const [cloudDataName, setcloudDataName] = useState("2021");
  const [cloudData, setCloudData] = useState({});

  // retrieve data
  useEffect(
    function () {
      // console.log(`year: ${year}`);
      fetch(`datasets/${year}.geojson`)
        .then((res) => res.json())
        .then(function (res) {
          setGlobeData({
            countries: res[0],
            points: res[1]
          });
        });
    },
    [year]
  );

  useEffect(
    function () {
      fetch(`datasets/${cloudDataName}.json`)
        .then((res) => res.json())
        .then((data) => setCloudData(data));
    },
    [cloudDataName]
  );

  // Set up the colour scale based on
  const colorScale = d3.scaleSequentialSqrt(d3.interpolateYlOrRd);
  const getVal = (feat) => feat.properties.POP_EST;
  const maxVal = useMemo(
    () => Math.max(...globeData.countries.features.map(getVal)),
    [globeData]
  );
  colorScale.domain([0, maxVal]);

  const onClickPolygon = (polygon, event, { lat, lng, altitude }) => {
    // console.log(data);
    var countryName = polygon.properties.ADMIN;
    console.log(`datasets/${cloudDataName}.json`);

    var games = cloudData[countryName];
    if (!games) {
      setClickDiv(
        <div>
          <h1>{`Sorry, there's not enough data for ${countryName}!`}</h1>
        </div>
      );
    } else {
      setClickDiv(<Clouds country={countryName} words={games} />);
    }
  };

  if (globe.current !== null) {
    globe.current.pointOfView({ altitude: alt });
  }

  const handleChange = (event) => {
    // console.log(`event.target.value: ${event.target.value}`);
    setYear(event.target.value);
    setcloudDataName(event.target.value);
  };

  return (
    <div class="subsection">
      <h1 style={{ color: "white" }}>Global Game Clouds</h1>
      <p style={{ color: "white" }}>
        Noble game dev, you may come from any corner of the world. It'll be good
        to know about what your country's game market size and what games are
        popular among your homelanders. If your dev career focus on phenomenal
        regional games like Pokemon and Street Fighters, you'll get to know that
        regions' interest and how much you may get your reward. Don't you wanna
        know which region leading the gaming market around the world? Don't you
        wanna know what games are most popular in certain regions?
Now, we leave
        the playground for you to explore. You can choose year 2021 or 2020 from
        the number box and just play and drag it like Google Earth! Click on
        countries with notable gaming market, you'll see the popular games and
        click them if you want to know more about the game!
      </p>
      {/* <h1>{`year: ${year} cloudDataName: ${cloudDataName}`}</h1> */}
      <Select
        value={year}
        onChange={(e) => handleChange(e)}
        style={{ color: "white", fontSize: "45px" }}
      >
        {/* <option value="map11">map11</option> */}
        <option value="2021">2021</option>
        <option value="2020">2020</option>
      </Select>
      {clickDiv !== null && (
        <div
          style={{
            position: "absolute",
            zIndex: 4,
            padding: 10,
            left: "25vw",
            top: "25vh",
            background: "rgba(255,255,255,0.8)",
            borderRadius: "10px",
            width: "50vw",
            height: "inline",
            paddingLeft: "25px"
          }}
        >
          <Button style={{ left: "24vw" }} onClick={() => setClickDiv(null)}>
            X
          </Button>
          {clickDiv}
        </div>
      )}
      <Globe
        ref={globe}
        // in case this doesn't work the url is https://unpkg.com/three-globe@2.24.5/example/img/earth-night.jpg
        globeImageUrl="https://unpkg.com/three-globe@2.24.5/example/img/earth-night.jpg"
        backgroundImageUrl="//unpkg.com/three-globe/example/img/night-sky.png"
        lineHoverPrecision={0}
        polygonsData={globeData.countries.features}
        polygonCapColor={(d) =>
          d === hoverD ? "steelblue" : colorScale(getVal(d))
        }
        polygonStrokeColor={() => "#111"}
        polygonSideColor={() => "rgba(0, 100, 0, 0.15)"}
        polygonAltitude={(d) => (d === hoverD ? 0.12 : 0.06)}
        onPolygonHover={setHoverD}
        polygonsTransitionDuration={300}
        polygonLabel={function ({ properties: d }) {
          return `
            <div style="position: relative; z-index: 4; min-width: 108px; padding: 10px 14px;background: #FFFFFF;border: 1px solid #E5E5E5;box-shadow: 0px 2px 20px rgba(32, 32, 35, 0.13);border-radius: 4px;">
              <div style="font-family: 'Montserrat';margin-bottom:10px;font-weight: 600;font-size: 13px;line-height: 16px;text-transform: capitalize;color: #2D3032;">
                ${d.ADMIN}
              </div>
              <div style="font-family: 'Montserrat';font-size: 13px;line-height: 16px;color: #3E4850;">
                Total Sales: $${number(d.POP_EST).format("0.0a")}
              </div>
            </div>
          `;
        }}
        onPolygonClick={onClickPolygon}
      />
    </div>
  );
};

export default GlobalView;
