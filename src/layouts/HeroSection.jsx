import NavBar from "../components/navbar";
import Button from "../components/button";
import AnimatedComponent from "../components/AnimatedComponent";
import { fadeInY } from "../utils/animationVariants";

export default function HeroSection() {
  return (
    <section className="flex justify-center bg-pattern-mobile h-[40rem] w-full lg:bg-pattern-desktop bg-no-repeat bg-center rounded-bl-[5rem] pb-18 md:pb-28">
      <div className="w-full max-w-[1440px] px-6 pt-10 md:px-24">
        <NavBar />
        <AnimatedComponent
          tag="h1"
          variants={fadeInY(0.4)}
          className="px-4 text-center text-white font-semibold text-3xl md:text-5xl lg:text-7xl mt-12 md:mt-24"
        >
          A modern publishing platform
        </AnimatedComponent>
        <AnimatedComponent
          tag="p"
          variants={fadeInY(0.4)}
          className="px-5 md:px-0 pt-5 text-center text-lg text-white mt-4 md:mt-1"
        >
          Grow your audience and build your online brand
        </AnimatedComponent>
        <div className="flex pt-12 px-4 w-full max-w-[350px] lg:w-[60%] justify-between mx-auto">
          <Button primary title="Start for Free" />
          <Button primary={false} title="Learn More" />
        </div>
      </div>
    </section>
  );
}
