import PropTypes from "prop-types";

const Button = ({ primary, title }) => (
  <button
    className={`
        rounded-l-full rounded-r-full border border-transparent py-2 px-5 md:px-[2.2rem] font-bold cursor-pointer text-[0.9rem]
     ${
       primary
         ? "bg-white text-[#ff3d54] hover:text-white hover:bg-[#ff3d54]"
         : "bg-transparent border border-white hover:text-[#ff3d54] hover:bg-white text-white"
     } `}
    //  ${noborder ? "border-none hover:bg-[#ff3d54]" : ""} 
  >
    {title}
  </button>
);
export default Button;

Button.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

Button.defaultProps = {
  isActive: false,
};
