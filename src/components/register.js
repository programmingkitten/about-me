import React, { useEffect, useState } from "react";
export default function Register(props) {
   
    const [formData, setData] = useState({username: '', password: ''})


    const onChangeHandler = (e) => {
        setData(prev => (
            {...prev, 
                [e.target.name]: e.target.value}))
    }

    const clickHandler = (e) => {
        console.log(formData.username, formData.password)
    }

    return (<div>
                <label>Username</label>
                <input name="username" value={formData.username} onChange={(e) => onChangeHandler(e)}></input> 
                <label>Password</label>
                <input name="password" value={formData.password} onChange={(e) => onChangeHandler(e)}></input> 
                <button onClick={clickHandler}>info</button>
            </div>)

};