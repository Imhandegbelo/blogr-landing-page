import React from "react";
import "./App.css";
import phone_image from "./assets/images/illustration-phones.svg";

import Footer from "./components/footer";
import Button from "./components/button";
import HeroSection from "./components/HeroSection";
import laptop from "./assets/images/illustration-laptop-desktop.svg";
import laptop2 from "./assets/images/illustration-laptop-mobile.svg";
import desktop from "./assets/images/illustration-editor-desktop.svg";
import illustration_circles from "./assets/images/bg-pattern-circles.svg";

function App() {
  return (
    <div className="flex flex-col items-center justify-center">
      <HeroSection />

      {/* Section 1 */}
      <section className="flex justify-center w-full py-24 mt-10 overflow-x-clip">
        <div className="w-full max-w-[1440px] px-24">
          {/* <div className="relatsive"> */}
          <h1 className="text-3xl text-center font-bold py-6 text-[#1f3f5b]">
            Designed for the future
          </h1>
          <div className="flex relative">
            <div className="w-1/2 text-[#4b5862]">
              <div className="py-10">
                <h2 className="text-xl py-4 font-semibold text-[#1f3f5b]">
                  Introducing an extensible editor
                </h2>
                <p className="text-base">
                  Blogr features an exceedingly intuitive interface which lets
                  you focus on one thing: creating content. The editor supports
                  management of multiple blogs and allows easy manipulation of
                  embeds such as images, videos, and Markdown. Extensibility
                  with plugins and themes provide easy ways to add functionality
                  or change the looks of a blog.
                </p>
              </div>
              <div className="py-10">
                <h2 className="text-xl py-4 font-semibold text-[#1f3f5b]">
                  Robust content management
                </h2>
                <p className="text-base">
                  Flexible content management enables users to easily move
                  through posts. Increase the usability of your blog by adding
                  customized categories, sections, format, or flow. With this
                  functionality, you{`'`}re in full control.
                </p>
              </div>
            </div>
            <div className="absolute h-auto top-[-10rem] right-[-25rem]">
              {/* <img
                src={desktop}
                alt="laptop illustration"
                // loading="lazy"
                className="w-full"
              /> */}
            </div>
          </div>
          {/* </div> */}
        </div>
      </section>

      {/* Section 2 */}
      <section className="bg-gradient-to-r from-[#2c2d3f] to-[#3f4164] flex justify-center rounded-tr-[5rem] rounded-bl-[5rem] mt-44 mb-20 w-full relative">
        <div className="container w-full max-w-[1440px] relative z-10 px-24 ">
          <div className="flex justify-between items-center">
            <div className="-mt-20 -mb-28">
              <img
                src={phone_image}
                alt="phone_image"
                loading="lazy"
                className="-ml-10"
              />
            </div>

            <div className="w-1/2 flex flex-col place-center text-white">
              <h1 className="text-3xl mb-4 font-semibold">
                State of the Art Infrastructure
              </h1>
              <p className="text-[#c8c8cb]">
                With reliability and speed in mind, worldwide data centers
                provide the backbone for ultra-fast connectivity. This ensures
                your site will load instantly, no matter where your readers are,
                keeping your site competitive.
              </p>
            </div>
          </div>
          {/* </div> */}
          <div className="container absolute w-2/3 w-fitt -left-[2rem] z-50 overflow-y-clip">
            <img
              // src={illustration_circles}
              src={illustration_circles}
              alt="illustration circles"
              loading="lazy"
              className="absolute -top-[55rem] -left-[12rem] z-50"
            />
          </div>
        </div>
      </section>

      {/* Section 3 */}
      <section className="flex justify-center w-full my-44 pt-20 overflow-x-clip">
        <div className="w-full max-w-[1440px] px-24">
          <div className="flex justify-end relative">
            <div className="w-1/2 text-[#4b5862]">
              <div className="absolute h-44 top-[-10rem] left-[-26rem]">
                {/* <img
                  src={laptop}
                  alt="laptop illustration"
                  className="w-full"
                /> */}
              </div>
              <div>
                <div className="py-10">
                  <h2 className="text-xl py-4 font-semibold text-[#1f3f5b]">
                    Free, open, simple
                  </h2>
                  <p className="text-base">
                    Blogr is a free and open source application backed by a
                    large community of helpful developers. It supports features
                    such as code syntax highlighting, RSS feeds, social media
                    integration, third-party commenting tools, and works
                    seamlessly with Google Analytics. The architecture is clean
                    and is relatively easy to learn.
                  </p>
                </div>
                <div className="py-10">
                  <h2 className="text-xl py-4 font-semibold text-[#1f3f5b]">
                    Powerful tooling
                  </h2>
                  <p className="text-base">
                    Batteries included. We built a simple and straightforward
                    CLI tool that makes customization and deployment a breeze,
                    but capable of producing even the most complicated sites.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default App;
