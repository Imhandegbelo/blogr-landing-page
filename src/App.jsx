import React from "react";
import "./App.css";
import logo from "./assets/images/logo.svg";
import illustration from "./assets/images/illustration-editor-desktop.svg";
import phone_image from "./assets/images/illustration-phones.svg";
import Footer from "./components/footer";
import Button from "./components/button";

function App() {
  return (
    <div className="App">
      <div className="bg-sky-900">
        <div className="">
          <img src={logo} alt="logo" />
        </div>
        <Button isActive title="Sign Up" />
      </div>

      <div className="bg-[#3f4164] flex pl-32 pr-40 gap-10 rounded-tr-[5rem] rounded-bl-[5rem]">
        <div className="relative">
          <img src={phone_image} alt="phone_image" className="" />
        </div>
        <div className="w-1/2 py-1/2 text-white">
          <h1 className="text-3xl mb-4">State of the Art Infrastructure</h1>
          <p className="text-[#c8c8cb]">
            With reliability and speed in mind, worldwide data centers provide
            the backbone for ultra-fast connectivity. This ensures your site
            will load instantly, no matter where your readers are, keeping your
            site competitive.
          </p>
        </div>
      </div>

      <div>
        <h1 className="text-3xl text-center py-6 text-[#1f3f5b]">
          Designed for the future
        </h1>
        <div className="flex">
          <div className="pl-40 w-1/2 text-[#4b5862]">
            <div className="py-10">
              <h2 className="text-xl py-4 text-[#1f3f5b]">
                Introducing an extensible editor
              </h2>
              <p className="text-base">
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="py-10">
              <h2 className="text-xl py-4 text-[#1f3f5b]">
                Robust content management
              </h2>
              <p className="text-base">
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you{`'`}re in full control.
              </p>
            </div>
          </div>
          <div className="w-1/2 py-10">
            <img src={illustration} alt="hero2" className="pr-[-40px]" />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
