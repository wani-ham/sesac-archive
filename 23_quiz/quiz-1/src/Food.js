// 2번 문제
import { PropTypes } from 'prop-types';

const Food = (props) => {
    const {name, color} = props;
    const styles = { color };
    return (
        <>
            <p style={styles}>내가 좋아하는 음식: {name}</p>
        </>
    )
}

Food.protoTypes = {
    name: PropTypes.string,
    color: PropTypes.string
}

Food.defaultProps = {
    name: "김밥",
    color: "red"
}

export default Food;