import AnimatedComponent from "../components/AnimatedComponent";
import phone_image from "../assets/images/illustration-phones.svg";
import { fadeInY, popOut } from "../utils/animationVariants";

export default function AboutSection() {
  return (
    <section className="flex bg-blue-950 bg-pattern-circles bg-no-repeat bg-bottom md:bg-left-bottom bg-left justify-center rounded-tr-[5rem] rounded-bl-[5rem] mt-44 pb-20 md:pb-0 w-full">
      <div className="w-full max-w-[1440px] relative z-10 p-6 md:p-10 lg:px-24 ">
        <div className="flex flex-col gap-24 md:gap-6 lg:gap-10 md:flex-row justify-between items-center">
          {/* <motion.div className="-mt-28 -mb-36"> */}
          <AnimatedComponent
            tag="img"
            variants={popOut}
            src={phone_image}
            alt="phone_image"
            className="-ml-10 -mt-28 -mb-36"
          />
          {/* </motion.div> */}

          <AnimatedComponent
            tag="div"
            variants={fadeInY(0.4)}
            className="md:w-1/2 flex flex-col text-white"
          >
            <h1 className="text-3xl mt-10 mb-4 md:mt-0 font-semibold">
              State of the Art Infrastructure
            </h1>
            <AnimatedComponent
              tag="p"
              variants={fadeInY(0.4)}
              className="text-[#c8c8cb]"
            >
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </AnimatedComponent>
          </AnimatedComponent>
        </div>
      </div>
    </section>
  );
}
