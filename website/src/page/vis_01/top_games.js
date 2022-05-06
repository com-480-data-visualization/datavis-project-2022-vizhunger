import React from 'react';
import vis1 from '../../img/vis1.jpeg';

const TopGames = () => {
    return (
        <div>
            <h1>Top Games</h1>
            <p>
                This is a list of the top games on Steam.
            </p>
            <img src={vis1} />
        </div>
    );
}

export default TopGames;