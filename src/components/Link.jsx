import { memo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";
import { fadeInY } from "../utils/animationVariants";

function Link({ name, links, index }) {
  const [activeDropdown, setActiveDropdown] = useState(null);
  function handleClick(index) {
    // setActiveDropdown(null)
    // console.log(index)
    setActiveDropdown(index)
  }

  return (
    <div
      onMouseEnter={()=>setActiveDropdown(index)}
      onMouseLeave={()=>setActiveDropdown(null)}
      className="relative w-30"
    >
      <p
        role="button"
        className="inline-flex gap-3 cursor-pointer w-full text-lg items-center justify-between bg-transparent px-2 hover:underline"
      >
        {name}
      </p>
      {activeDropdown === index ? (
        <AnimatedComponent tag="div" variants={fadeInY(0.1)}
          className={`bg-gray-200 lg:bg-white text-slate-900 w-30 rounded-lg p-6 ${
            activeDropdown ===index ? "lg:absolute mt-2 left-0" : "hidden"
          } lg:shadow-2xl`}
        >
          {links.map((link) => (
            <a key={link} href="#" className="grid w-30 hover:font-bold">
              {link}
            </a>
          ))}
        </AnimatedComponent>
      ) : null}
    </div>
  );
}
export default memo(Link);
