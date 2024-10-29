import PropTypes from "prop-types";
import Features from "../Features/Features";

const PriceOption = ({option}) => {
    const {name, price, features} = option;
    return (
        <div className="bg-blue-500 rounded p-5 text-white mt-4 flex flex-col">
            <h3 className="text-center mt-2">
                <span className="text-5xl font-bold">{price}</span>
                <span className="text-xl">/Monthly</span>

            </h3>
            <h4 className="text-3xl text-center mt-4">{name}</h4>
            <div className="flex-grow">
            {
                features.map((feature, idx) => <Features key={idx} features = {feature}></Features>)
            }
            </div>
            <button className="mt-6 bg-green-600 font-bold rounded-lg w-full py-2 hover:bg-green-800">Buy now</button>
        </div>
        
    );
};
PriceOption.propTypes = {
    Option: PropTypes.object
}
export default PriceOption;