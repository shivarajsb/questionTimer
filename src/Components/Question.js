import React from 'react';

const Question = ({ number, onClick, currentQuestion }) => {
    return (
        <div onClick={() => onClick(number)} style={{ display: 'flex', justifyContent: 'center', margin: 10, height: 80, cursor: 'pointer', width: 80, alignItems: 'center', padding: 20, borderRadius: 20, backgroundColor: currentQuestion == number ? '#567DF4' : '#4F58A9' }}>
            <span style={{ color: 'white' }}>{number}</span>
        </div>
    );
}


export default Question;