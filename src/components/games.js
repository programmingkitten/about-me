import React, { useEffect, useState } from "react";
import Game from "./Game";


export default function GameList(props) {
    const [highligth, setHighlith] = useState(false)
    const games = [];
    const gamesObj = props.games
    console.log(gamesObj.game1.name)

    const gameItems = Object.values(gamesObj).map(
        (game) => {
        console.log(game)
        return <Game game={game}/>
        }
        
    )

    return <ul>{gameItems}</ul>
};