import arrowUp from "../assets/images/icon-arrow-light.svg";
// import arrowDown from "../assets/images/icon-arrow-dark.svg";
import { memo, useState } from "react";

function Link({ name, links }) {
  const [active, setActive] = useState(false);

  return (
    <div className="relative w-30">
      <button
        onClick={() => setActive(!active)}
        className="inline-flex gap-3 w-full text-lg items-center justify-between bg-transparent px-2 hover:underline"
      >
        <p> {name}</p>
        {active ? (
          <img src={arrowUp} alt="" className="ml-2 my-auto" />
        ) : (
          <img src={arrowUp} alt="" className="ml-2 my-auto" />
        )}
      </button>
      <div
        className={`bg-white text-black w-30 rounded-lg p-6 ${
          active ? "absolute mt-2" : "hidden"
        } shadow-2xl`}
      >
        {links.map((link) => (
          <p key={link} className="cursor-pointer hover:font-bold">
            {link}
          </p>
        ))}
      </div>
    </div>
  );
}
export default memo(Link);
