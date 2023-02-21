import React, { useEffect } from "react"


export default function Characters(props) {

    const [character, SetCharacter] = React.useState(0);
    useEffect(() => {
        fetch('https://swapi.dev/api/people/69')
        .then(res => res.json())
        .then(char => {
            SetCharacter(char)
        })
    }, [])

    return (
        <ul>
            <li>Name: {character.name}</li>
            <li>Birth year: {character.birth_year}</li>
        </ul>
    )
}