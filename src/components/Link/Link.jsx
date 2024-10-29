import PropTypes from "prop-types";

const Link = ({routeParameter}) => {
    return (
        <div>
            <li className="md:mr-10 lg:mr-24 px-5 text-white text-xl">
            <a href={routeParameter.path}>{routeParameter.name}</a>
            </li>
        </div>
    );
};

Link.propTypes = {
    route : PropTypes.object
}
export default Link;