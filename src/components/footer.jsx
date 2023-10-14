import React from "react";
import logo from "../assets/images/logo.svg";

const Footer = () => {
  const products = [
    "Overview",
    "Pricing",
    "Marketplace",
    "Features",
    "Integrations",
  ];
  const companies = ["About", "Team", "Blog", "Carriers"];
  const connect = ["Contact", "Newsletter", "LinkedIn"];

  return (
    <footer className="w-full flex justify-center bg-[#25252d] py-20 mt-20 rounded-tr-[5rem]">
      <div className="flex justify-between w-full max-w-[1440px] px-24">
        <div className="">
          <img src={logo} alt="logo" className="" />
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-3 text-white">Products</h3>
          <div className="flex flex-col">
            {products.map((product, index) => (
              <a href="#" className="text-[#c8c8cb]" key={index}>
                {product}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-3 text-white">Company</h3>
          <div className="flex flex-col">
            {companies.map((company, index) => (
              <a href="#" className="text-[#c8c8cb]" key={index}>
                {company}
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h3 className="mb-3 text-white">Connect</h3>
          <div className="flex flex-col">
            {connect.map((connect_link, index) => (
              <a href="#" className="text-[#c8c8cb]" key={index}>
                {connect_link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
