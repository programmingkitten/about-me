import { useState } from "react";
import styles from "./Game.module.css"

export default function AddGame() {
    const [message, setMessage] = useState('')
    const [values, setValues] = useState(
        {
            gameName: '', 
            imageURL: '',
            rating: 0,
            text: 'text',
            isCompleted: true,
        })

    function onChangeHandler(e) {
        console.log('attempt')
        setValues(prev => (
            {...prev, 
                [e.target.name]: e.target.value}))
    }

    function formHandler(e) {
        e.preventDefault();
        if (values.gameName && values.imageURL && values.rating) {

            const data = JSON.stringify(values)

            fetch('http://localhost:3030/jsonstore/todos', 
            {method: 'POST', body: data})
            .then(response => {
                response.json(); 
                if (response.ok) {
                    setMessage("Succesfull")
                } else {
                    setMessage("Unsuccesfull")
                }
            })
        }
    }

    return (
      <div>
        <form onSubmit={formHandler}>
            <label>game name</label>
            <input name="gameName" value={values.gameName} onChange={(e) => onChangeHandler(e)}></input>

            <label>image url</label>
            <input name="imageURL" value={values.imageURL} onChange={(e) => onChangeHandler(e)}></input>

            <label>Rating</label>
            <input type="number" max={5} min={0} name="rating" value={values.rating} onChange={(e) => onChangeHandler(e)}></input>
        
            <button onClick={formHandler}>Add</button>
        </form>

        <h1>{message}</h1>


      </div>
    );
  }