import { useState } from "react";
import logo from "../assets/images/logo.svg";
import NavButton from "./NavButton";
import arrowUp from "../assets/images/icon-arrow-light.svg";
import arrowDown from "../assets/images/icon-arrow-dark.svg";
import close from "../assets/images/icon-close.svg";
import Link from "./Link";

export default function NavBar() {
  const [menuActive, setMenuActive] = useState(false);

  const navlinks = [
    {
      name: "Products",
      links: ["Pricing", "Marketplace", "Features", "Integrations"],
    },
    { name: "Company", links: ["About", "Team", "Blog", "Careers"] },
    { name: "Connect", links: ["Contact", "Newsletter", "LinkedIn"] },
  ];
  return (
    <nav className="py-4 mt-2 flex justify-between relative">
      <div className="flex gap-10">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white hidden md:flex gap-6 mt-2">
          {navlinks.map((linkItem) => (
            <Link name={linkItem.name} links={linkItem.links} />
          ))}
        </div>
      </div>
      <div className="flex max-w-[50%] gap-1 space-between hidden md:flex">
        <NavButton primary title="Login" noborder={true} />
        <NavButton primary={false} title="Sign Up" />
      </div>
      <button className="md:hidden" onClick={() => setMenuActive(!menuActive)}>
        {menuActive ? (
          <svg width="26" height="26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z"
              fill="#FFF"
              fill-rule="evenodd"
            />
          </svg>
        ) : (
          <svg width="32" height="18" xmlns="http://www.w3.org/2000/svg">
            <g fill="#FFF" fill-rule="evenodd">
              <path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z" />
            </g>
          </svg>
        )}
      </button>
      <div className="md:hidden absolute top-16 right-10 bg-white w-">
        <div className="border-b"></div>
        <div className="flex flex-col">
          <NavButton primary title="Login" noborder={true} />
          <NavButton primary={false} title="Sign Up" />
        </div>
      </div>
    </nav>
  );
}
