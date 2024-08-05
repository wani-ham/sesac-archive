import React from 'react'

const OutputInfo = (props) => {
    const {info, text} = props;
    
    return (
        <div>
            <img src={`http://localhost:3000/img/${info.type}.jpg`} 
                alt={`${info.type}`} width="300"/>
            <div style={{
                color: info.textColor,
                backgroundColor: info.backgroundColor,
                width: '200px',
                margin: '0 auto'
            }}>
                <h1>{text}</h1>
            </div>
            
        </div>
    )
}



export default OutputInfo