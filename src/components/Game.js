import styles from "./Game.module.css"

export default function Game (props) {
    const game = props.game
    return <div key={game.name} className={styles.book}>
            <h1>{game.name}</h1>
            <h2>{game.rating}</h2>
        </div>
}