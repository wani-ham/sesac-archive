import React from 'react'


export default function SyntheticEvent() {
    function syntheticEvent(e) {
        console.log("Click btn SyntheticEvent");
        console.log(e);
    }

    return (
        <div>
            <h1>SyntheticEvent</h1>
            <button onClick={syntheticEvent}>SyntheticEvent</button>
        </div>
    )
}