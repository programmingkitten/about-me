import { useEffect, useState } from "react";
import Game from "./Game";
export default function GamesList() {

    const [gamesList, setGameList] = useState(['']);
    useEffect(() => {
        fetch('http://localhost:3030/jsonstore/todos')
        .then(res => res.json())
        .then(data => setGameList(data))
    }, [])

    const gameItems = Object.values(gamesList).map(
        (game) => {
        console.log(game)
        return <Game game={game}/>
        }
        
    )


    return <div>{gameItems}</div>
}