import React, { useEffect, useState } from 'react';


const Container = ({ question, currentTime }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: 20, minHeight: 100, minWidth: 200, backgroundColor: '#22215B', borderRadius: 15 }}>
                <p style={{ color: 'white' }}>{question.text}</p>
            </div>
        </div>
    );
}

export default Container;