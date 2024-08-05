import React from 'react'

const InputInfo = (props) => {
    const {setText} = props;
    

    return (
        <div>
            <form>
                <label htmlFor="text">내용: </label>
                <input id="text" type="text" onChange={(e) => 
                    {setText(e.target.value)}}></input>
            </form>
        </div>
    )
}

export default InputInfo