import AnimatedComponent from "../components/AnimatedComponent";
import { fadeInY, popOut } from "../utils/animationVariants";
import desktop from "../assets/images/illustration-editor-desktop.svg";
import desktop2 from "../assets/images/illustration-editor-mobile.svg";

export default function ConnectSection() {
  return (
    <section className="flex  justify-center w-full my-10 lg:my-34 xl:my-44 pt-10 lg:pt-16 xl:pt-20 ">
      <div className="w-full max-w-[1440px] px-6 sm:px-10 md:px-14 lg:px-24 overflow-x-clip">
        <div className="flex flex-col lg:flex-row text-center lg:text-left justify-end relative">
          <div className="lg:hidden">
            <AnimatedComponent
              tag="img"
              variants={popOut}
              src={desktop2}
              alt="laptop illustration"
              className="w-[80%] mx-auto"
            />
          </div>
          <div className="hidden lg:block absolute h-30 xl:h-44 lg:top-[-2rem] lg:left-[-10rem] xl:top-[-10rem] xl:left-[-26rem]">
            <AnimatedComponent
              tag="img"
              variants={popOut}
              src={desktop}
              alt="laptop illustration"
              className="lg:w-[35rem] xl:w-full"
            />
          </div>
          <div className="w-full lg:w-1/2 text-[#4b5862]">
            <div>
              <AnimatedComponent tag="div" className="py-10">
                <AnimatedComponent
                  tag="h2"
                  variants={fadeInY(0.4)}
                  className="text-xl py-4 font-semibold text-[#1f3f5b]"
                >
                  Free, open, simple
                </AnimatedComponent>
                <AnimatedComponent tag="p" className="text-base">
                  Blogr is a free and open source application backed by a large
                  community of helpful developers. It supports features such as
                  code syntax highlighting, RSS feeds, social media integration,
                  third-party commenting tools, and works seamlessly with Google
                  Analytics. The architecture is clean and is relatively easy to
                  learn.
                </AnimatedComponent>
              </AnimatedComponent>
              <AnimatedComponent tag="div" className="py-10">
                <AnimatedComponent
                  tag="h2"
                  variants={fadeInY(0.4)}
                  className="text-xl py-4 font-semibold text-[#1f3f5b]"
                >
                  Powerful tooling
                </AnimatedComponent>
                <AnimatedComponent
                  tag="p"
                  variants={fadeInY(0.4)}
                  className="text-base"
                >
                  Batteries included. We built a simple and straightforward CLI
                  tool that makes customization and deployment a breeze, but
                  capable of producing even the most complicated sites.
                </AnimatedComponent>
              </AnimatedComponent>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
