import "./App.css";

import React from "react";
import ReactFullpage from "@fullpage/react-fullpage";
// visualisation pages
import GameToStudio from "./page/vis_01/game_to_studio";
import SizeTimeProfitGraph from "./page/vis_03/size_time_profits";
import Timeline from "./page/vis_04/timeline";
import GlobalView from "./page/vis_05/globe_view";
// imgs
import nightBg from "./img/AdobeStock_110404923.jpeg";
import mainPageBg from "./img/mainPageBg.jpg";
import genreBg from "./img/AdobeStock_271500407.jpeg";
import studioBg from "./img/AdobeStock_271500759.jpeg";
import bubbleBg from "./img/AdobeStock_271500407.jpeg";

const MainPage = () => {
  return (
    <div>
      <h1
        style={{
          color: "white"
        }}
      >
        Game Dev Survival Guide
      </h1>
      <h2
        style={{
          color: "white"
        }}
      >
        VizHunger
      </h2>
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
          As a technical geek in game development, you may know everything in
          design and codes. But, do you know about the market and the career as
          a game dev? We'll show them to you!
        </p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ReactFullpage
      licenseKey={"YOUR_KEY_HERE"}
      scrollingSpeed={800}
      navigation={true}
      // showActiveTooltip = {true}
      slidesNavigation={true}
      autoScrolling={false}
      anchors={["home", "games&studios", "timeline", "indie", "globe"]}
      navigationTooltips={[
        "Home",
        "Popular Games and Their Studios",
        "Timeline of Popular Genres",
        "Small Studios Make Big Money",
        "Popular Games around the World"
      ]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div
              class="section"
              style={{
                background: `url(${mainPageBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <MainPage />
            </div>

            <div
              class="section"
              style={{
                background: `url(${genreBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <Timeline />
            </div>

            <div
              class="section"
              style={{
                background: `url(${studioBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <GameToStudio />
            </div>

            <div
              class="section"
              style={{
                background: `url(${bubbleBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <SizeTimeProfitGraph />
            </div>

            <div
              class="section"
              style={{
                background: `url(${nightBg})`,
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center"
              }}
            >
              <GlobalView />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default App;
