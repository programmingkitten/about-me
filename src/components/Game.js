import styles from "./Game.module.css"

export default function Game (props) {
    const game = props.game
    return <div key={game.gameName} className={styles.book}>
            <h1>{game.gameName}</h1>
            <img src={game.gameURL}></img>
            <h2>{game.rating}</h2>
        </div>
}