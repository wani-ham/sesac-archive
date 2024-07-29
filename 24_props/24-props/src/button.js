import './button.css'
import PropTypes from 'prop-types'

const Button = (props) => {
    const {link, children} = props;
    return (
        <>
            <a href={link}>
                <button className="button">{children}</button>
            </a>
            
        </>
    )
}

Button.defaultProps = {
    children: '네이버',
    link: 'https://www.naver.com'
}

Button.propTypes = {
    children: PropTypes.string,
    link: PropTypes.string
}

export default Button;