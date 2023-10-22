import PropTypes from "prop-types";

export default function NavButton({ primary, title, noborder }) {
  return (
    <button
      className={`
        rounded-l-full rounded-r-full border border-transparent py-2 px-[2.2rem] font-bold cursor-pointer text-[0.9rem]
     ${
       primary
         ? "bg-transparent hover:text-white hover:bg-[#ff3d54] text-white"
         : "bg-white text-[#ff3d54] hover:text-white hover:bg-[#ff3d54]/50"
     } ${noborder ? "border-none hover:bg-[#ff3d54]" : ""} `}
    >
      {title}
    </button>
  );
}
NavButton.propTypes = {
  primary: PropTypes.bool,
  title: PropTypes.string.isRequired,
  noborder: PropTypes.bool,
};

NavButton.defaultProps = {
  primary: false,
  noborder: false,
};
