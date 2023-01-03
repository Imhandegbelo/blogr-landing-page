import PropTypes from "prop-types";

const Button = ({ isActive, title }) => (
  <button
    className={`rounded-l-md rounded-r-md border border-white py-2 cursor-pointer text-xl ${
      isActive ? "bg-white text-[ #ff525d]" : "bg-[#00494d] hover:bg-[#ff7a85] text-[#00494d]" 
    }  `}
  >
    {title}
  </button>
);
export default Button;

Button.propTypes = {
  isActive: PropTypes.bool,
  title: PropTypes.string.isRequired,
};

Button.defaultProps = {
  isActive: false,
};