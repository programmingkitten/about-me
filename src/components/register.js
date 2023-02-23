import React, { useEffect, useState } from "react";
export default function Register(props) {
   
    const [username, setUsername] = useState('')

    const onChangeHandler = (e) => {
        setUsername(e.target.value)
        console.log(e.target.value)
    }

    return <input value={username} onChange={onChangeHandler}></input>
};