import React, { useState, useRef, useEffect } from 'react'


const Timer = ({ setResend }) => {
    const Ref = useRef(null);
    const [timer, setTimer] = useState('');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, minutes, seconds }
            = getTimeRemaining(e);
        if (total > 0) {
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes) + ':'
                + (seconds > 9 ? seconds : '0' + seconds)
            )
        } else if (total = 0) {
            setResend(true)
        }
    }

    const clearTimer = (e) => {
        setTimer('01:00');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 2);
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);


    return (
        <div>
            <h2>{timer}</h2>
        </div>
    )
}

export default Timer;