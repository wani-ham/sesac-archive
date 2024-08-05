import React from 'react';
import PropTypes from 'prop-types';

class TextProps extends React.Component {
    render() {
        const {text} = this.props;
        return(
            <>
                <h1>App에서 받아온 text: {text}</h1>
                <button onClick={() => {
                    console.log("성공!")
                }}> 누르세요~ </button>
            </>
        )
    }

    static defaultProps = {
        text: '기본 텍스트'
    }

    static propTypes = {
        text: PropTypes.string
    }
}


export default TextProps