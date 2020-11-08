import React, { useEffect, useState } from 'react';


const Question = ({ }) => {
    const [time, setTime] = useState(0);
    var interval;
    useEffect(() => {
        const timeValue = localStorage.getItem('time');
        if (timeValue && timeValue > 0) {
            setTime(parseInt(localStorage.getItem('time')));
        }
        interval = setInterval(() => {
            setTime((t) => {
                let timer = t + 100;
                localStorage.setItem('time', timer);
                return timer;
            });
        }, 100)
    }, [])
    useEffect(() => {
        return () => {
            console.log("Setting the value to zero");
        }
    }, [])
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, minHeight: 100, minWidth: 200, backgroundColor: '#22215B', borderRadius: 15 }}>
                <p style={{ color: 'white' }}>Hello {time}</p>
            </div>
        </div>
    );
}

export default Question;