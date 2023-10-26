import { memo, useState } from "react";
import { AnimatePresence } from "framer-motion";
import AnimatedComponent from "./AnimatedComponent";

function Link({ name, links, index }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div
      onMouseEnter={() =>
        setActiveDropdown(activeDropdown == index ? null : index)
      }
      onMouseLeave={() => setActiveDropdown(null)}
      aria-haspopup="true"
      className="relative w-30"
    >
      <p
        className="inline-flex gap-3 cursor-pointer w-full text-lg items-center justify-between bg-transparent px-2 hover:underline"
      >
        {name}
      </p>
      {activeDropdown == index ? (
        <div
          className={`bg-white text-black w-30 rounded-lg p-6 ${
            activeDropdown ? "md:absolute mt-2" : "hidden"
          } md:shadow-2xl z-10`}
        >
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="block w-full hover:font-bold"
            >
              {link}
            </a>
          ))}
        </div>
      ) : null}
    </div>
  );
}
export default memo(Link);
