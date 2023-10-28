import { useState } from "react";
import logo from "../assets/images/logo.svg";
import NavButton from "./NavButton";
import navlinks from "../data/navlinks.json";
import close from "../assets/images/icon-close.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import Link from "./Link";
import AnimatedComponent from "./AnimatedComponent";
import { popOut } from "../utils/animationVariants";
// import NavItems from "./NavItems";

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className="py-4 flex justify-between relative z-10 absolute">
      <div className="flex gap-10">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white hidden lg:flex gap-10 mt-2 ">
          {navlinks.map((linkItem, index) => (
            <Link
              key={linkItem.name}
              name={linkItem.name}
              links={linkItem.links}
              index={index}
            />
          ))}
        </div>
      </div>
      <div className="hidden lg:block max-w-[50%] gap-1 space-between">
        <NavButton primary title="Login" noborder={true} />
        <NavButton primary={false} title="Sign Up" />
      </div>
      <button className="lg:hidden" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? (
          <img src={close} alt="" />
        ) : (
          <img src={hamburger} alt="" />
        )}
      </button>
      {menuActive && (
        <AnimatedComponent
          tag="div"
          variants={popOut}
          className="lg:hidden absolute top-16 w-full 0 bg-white p-6 rounded-lg"
        >
          <div className="flex flex-col gap-2 pb-6 border-b w-full">
            {navlinks.map((linkItem) => (
              <Link
                key={linkItem.name}
                name={linkItem.name}
                links={linkItem.links}
                onclick={onclick}
              />
            ))}
          </div>
          <div className="flex flex-col justify-center gap-6 w-fit pt-5 mx-auto">
            <NavButton
              primary
              title="Login"
              noborder={true}
              className="w-full"
            />
            <NavButton primary={false} title="Sign Up" className="w-full" />
          </div>
        </AnimatedComponent>
      )}
    </nav>
  );
}
