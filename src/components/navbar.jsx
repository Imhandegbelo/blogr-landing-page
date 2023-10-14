import logo from "../assets/images/logo.svg";
import Button from "../components/button";
import arrowUp from "../assets/images/icon-arrow-light.svg";
import arrowDown from "../assets/images/icon-arrow-dark.svg";

export default function NavBar() {
  return (
    <nav className="py-4 mt-[2px] flex flex-row justify-between">
      <div className="flex">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white flex ml-10">
          <button className="flex bg-transparent px-2">
            <p className="my-auto">Product</p>{" "}
            <img src={arrowUp} alt="" className="ml-2 my-auto" />
            <div className="hidden">
              <a href="#">Overview</a>
              <a href="#">Pricing</a>
              <a href="#">Marketplace</a>
              <a href="#">Features</a>
              <a href="#">Integrations</a>
            </div>
            {/* <img src={arrowDown} alt="" className="ml-2 my-auto" /> */}
          </button>

          <button className="flex ml-3 bg-transparent px-2 ">
            <p className="my-auto">Company</p>{" "}
            <img src={arrowUp} alt="" className="ml-2 my-auto" />
          </button>
          <div className="dropdown-content absolute bg-[#fff] text-black min-w-[160px] hidden">
            <a href="#" className="py-[12px] px-[16px] text-decoration-none block hover:text-bold">About</a>
            <a href="#" className="py-[12px] px-[16px] text-decoration-none block hover:text-bold">Team</a>
            <a href="#" className="py-[12px] px-[16px] text-decoration-none block hover:text-bold">Blog</a>
            <a href="#" className="py-[12px] px-[16px] text-decoration-none block hover:text-bold">Careers</a>
          </div>
          <button className="flex ml-3 bg-transparent px-2 ">
            <p className="my-auto">Connect</p>{" "}
            <img src={arrowUp} alt="" className="ml-2 my-auto" />
          </button>
          <div className="hidden">
            <a href="#">Contact</a>
            <a href="#">Newsletter</a>
            <a href="#">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="flex max-w-[50%] space-between">
        <Button primary={false} title="Login" noborder={true} />
        <Button primary title="Sign Up" />
      </div>
    </nav>
  );
}
