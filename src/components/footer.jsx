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
    <footer className="bg-[#25252d] py-20 px-40 rounded-tr-[5rem]">
      <div className="flex justify-between pr-40">
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div>
          <h3 className="mb-3 text-white">Products</h3>
          <div className="flex flex-col">
            {products.map((product) => (
              <a href="#" className="text-[#c8c8cb]">{product}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-white">Company</h3>
          <div className="flex flex-col">
            {companies.map((company) => (
              <a href="#" className="text-[#c8c8cb]">{company}</a>
            ))}
          </div>
        </div>
        <div>
          <h3 className="mb-3 text-white">Connect</h3>
          <div className="flex flex-col">
            {connect.map((connect_link) => (
              <a href="#" className="text-[#c8c8cb]">{connect_link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
