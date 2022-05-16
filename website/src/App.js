import './App.css';

import React from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
// visualisation pages
import GameToStudio from './page/vis_01/game_to_studio';
import Keywords from './page/vis_02/keywords';
import SizeTimeProfitGraph from './page/vis_03/size_time_profits';
import Timeline from './page/vis_04/timeline';
import ThreeDFilter from './page/vis_05/threeD_filter'
// components
import Navbar from './component/nav_bar';

const MainPage = () => {
  return (
      <div>
          <h1>Game Dev Survival Guide</h1>
          <h2>VizHunger</h2>
          <p>
              As a noble game developer, what do you want to know?
          </p>
      </div>
  );
}

const App = () => (
  <ReactFullpage
      licenseKey = {'YOUR_KEY_HERE'}
      scrollingSpeed = {800}
      navigation = {true}
      // showActiveTooltip = {true}
      slidesNavigation = {true}
      anchors = {['home', 'gamesCloud', 'genreTimeline', 'genresAndStudios', 'sizeTimeProfitGraph', '3DFilter']}
      navigationTooltips = {['Home', 'Games Cloud', 'Genre Timeline', 'Genres and Studios', 'Size Time Profit Graph', '3D Filter']}
      
      render={({ state, fullpageApi }) => {
        return (
          
          <ReactFullpage.Wrapper>
            <div class="section">
              <MainPage />
            </div>

            <div class="section">
              <Keywords/>
            </div> 

            <div class="section">
              <Timeline/>
            </div> 

            <div class="section">
              <GameToStudio/>
            </div> 

            <div class="section">
              <SizeTimeProfitGraph/>
            </div> 

            <div class="section">
              <ThreeDFilter/>
            </div> 


          </ReactFullpage.Wrapper>
        );
      }}
  />

);

export default App;
