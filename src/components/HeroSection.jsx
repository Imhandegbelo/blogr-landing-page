import React from "react";
import NavBar from "./navbar";
import Button from "./button";

export default function HeroSection() {
  return (
    <section className="flex justify-center relative w-full py-10 bg-gradient-to-l from-[#ff5d54] to-[#ff8f70] rounded-bl-[5rem]">
      <div className="w-full max-w-[1440px] px-6 md:px-24">
        <NavBar />
        <h1 className="px-4 text-center text-white font-semibold text-3xl md:text-5xl lg:text-7xl mt-24">
          A modern publishing platform
        </h1>
        <p className="px-5 md:px-0 pt-5 text-center text-lg text-white mt-4 md:mt-1">
          Grow your audience and build your online brand
        </p>
        <div className="flex pt-12 pb-28 px-4 w-full md:w-[60%] md:max-w-[350px] justify-between mx-auto">
          <Button primary title="Start for Free" />
          <Button primary={false} title="Learn More" />
        </div>
      </div>
      <div className="hidden w-full top-0 left-0">
        <svg xmlns="http://www.w3.org/2000/svg" width="1440" height="1440">
          <defs>
            <linearGradient id="a" x1=".639%" x2="99.361%" y1="0%" y2="100%">
              <stop offset="0%" stop-color="#FF8F71" />
              <stop offset="100%" stop-color="#FF3E55" />
            </linearGradient>
          </defs>
          <path
            fill="url(#a)"
            fill-rule="evenodd"
            d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z"
            transform="rotate(22 162.072 2556.164)"
          />
        </svg>
      </div>
    </section>
  );
}
