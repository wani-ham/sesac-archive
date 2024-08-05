import React, {useState} from 'react'

const ChangeTextColor = () => {
    const [textColor, setColor] = useState('black');

    const turnRed = () => {
        setColor('red');
    }

    const turnBlue = () => {
        setColor('blue');
    }

    const styles = {
        color: textColor
    }

    return (
        <div>
            <h1 style={styles}>{textColor}</h1>
            <button style={styles} onClick={turnRed}>Red</button>
            <button style={styles} onClick={turnBlue}>Blue</button>
        </div>
    )
}

export default ChangeTextColor;