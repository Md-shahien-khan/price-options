import PropTypes from "prop-types";
import {AiFillCheckCircle} from "react-icons/ai"
const Features = ({features}) => {
    return (
        <div className="text-xs mt-3">
            <p className="flex items-center align-center"><AiFillCheckCircle className="text-green-500 text-2xl"></AiFillCheckCircle>{features}</p>
        </div>
    );
};
Features.propTypes = {
    Option: PropTypes.string
}
export default Features;