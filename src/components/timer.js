import React, { useEffect } from "react";

export const Timer = (props) => {
    const [time, setTime] = React.useState(0);

    useEffect(() => {
        console.log('mounting')
    }, [])

    useEffect(() => {
        console.log('time changed!')
    }, [time])

    setTimeout(() => {
        setTime(time + 1)
    }, 1000)
    return <div>
        <h2>Timer: {time} sec.</h2>
    </div>
}