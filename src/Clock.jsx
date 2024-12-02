import React, {useState, useEffect} from "react";

function Clock() {

    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval( () => {
            setTime(new Date()); 
        }, 1000)
        
        return() => {
            clearInterval(interval);
        };

    }, []);

    function handleDisplay() {
        const hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours >= 12 ? "PM" : "AM";

        return `${handleZero(hours)}:${handleZero(minutes)}:${handleZero(seconds)} ${meridiem}`;
    }

    function handleZero(number) {
        return (number < 10 ? "0" : "") + number;
    }

    return(<div className="clock-container">

        <div className="clock">
        <span className="display">{handleDisplay()}</span>
        </div>
            </div>);
}

export default Clock;