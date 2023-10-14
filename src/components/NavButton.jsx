import PropTypes from "prop-types";

export default function NavButton(primary) {
  return (
    <button
      className={`
        rounded-l-full rounded-r-full border border-transparent py-2 px-[2.2rem] font-bold cursor-pointer text-[0.9rem]
     ${
       primary
         ? "bg-transparent border border-white hover:text-[#ff3d54] hover:bg-white text-white"
         : "bg-white text-[#ff3d54] hover:text-white hover:bg-[#ff3d54]"
     } ${noborder ? "border-none hover:bg-[#ff3d54]" : ""} `}
    >
      {title}
    </button>
  );
}
Button.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  border: PropTypes.bool,
};

Button.defaultProps = {
  isActive: false,
};
