import arrowUp from "../assets/images/icon-arrow-light.svg";
import { memo, useState } from "react";

function Link({ name, links, index }) {
  const [activeDropdown, setActiveDropdown] = useState(null);

  return (
    <div className="relative w-30">
      <p
        onClick={() => setActiveDropdown(activeDropdown == index ? null : index)}
        className="inline-flex gap-3 w-full text-lg items-center justify-between bg-transparent px-2 hover:underline"
      >
        {name}
        {/* {active ? (
          <img src={arrowUp} alt="" className="ml-2 my-auto" />
        ) : (
          <img src={arrowUp} alt="" className="ml-2 my-auto" />
        )} */}
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
             
              className="block w-full cursor-pointer hover:font-bold"
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
