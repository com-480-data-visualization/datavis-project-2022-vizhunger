import React from 'react';
import vis3 from '../../img/vis3.jpeg';

const GameToStudio = () => {
    return (
        <div>
            <h1>Popular Games and Their Studios</h1>
            <p>
                {/* We know they are great games, but where are they from? */}
                As a noble game dev, you must have a fever with some particular game genres, and you
                don't want to be stuck with the development you have no interest in. So which studio
                should you go?

                {/* Genres: 
                    Sandbox
                    Real-time strategy (RTS)
                    Shooters (FPS and TPS)
                    Multiplayer online battle arena (MOBA)
                    Role-playing (RPG, ARPG, and More)
                    Simulation and sports
                    Puzzlers and party games
                    Action-adventure
                    Survival and horror
                    Platformer */}

                {/* Game Studios:
                https://www.softwaretestinghelp.com/game-development-companies/ */}

            </p>
            <img src={vis3} />
        </div>
    );
}

export default GameToStudio;