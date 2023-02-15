import React from "react";

export default function GameList(props) {
    const games = [];
    const gamesObj = props.games
    console.log(gamesObj.game1.name)
 
    const gameItems = Object.values(gamesObj).map(
        (game) => {
        console.log(game)
        return <div key={game.name}>
            <h1>{game.name}</h1>
            <h2>{game.rating}</h2>
        </div>
        }
        
    )

    return <ul>{gameItems}</ul>
    // for (let gameKey of Object.keys(gamesObj)) {
    //     const template = 
    //     <div key={"!!"}>
    //         <h1 key={gameKey}>{gamesObj.gameKey}</h1>
    //         <h1 key={'ok'}> {gamesObj.gameKey}</h1>
    //     </div>
    //     games.push(template)
    // }
    // const resultTemplate = React.createElement('div', [], games)
    // return resultTemplate
};