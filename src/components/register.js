import React, { useEffect, useState } from "react";
export default function Register(props) {
   
    const [formData, setData] = useState({username: '', password: ''})


    const onChangeHandler = (e) => {
        console.log(formData.username)
    }

    const clickHandler = (e) => {
        console.log(formData.username, formData.password)
    }

    return (<div>
                <label>Username</label>
                <input value={formData.username} onChange={(e) => setData(prev => ({...prev, username: e.target.value}))}></input> 
                <label>Password</label>
                <input value={formData.password} onChange={(e) => setData(prev => ({...prev, password: e.target.value}))}></input> 
                <button onClick={clickHandler}>info</button>
            </div>)

};