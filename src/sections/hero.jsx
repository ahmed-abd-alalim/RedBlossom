// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

// import components
import { CycleButton, Button } from "@/components";

const Hero = () => {
  return (
    <section className="hero-section relative xl:bg-[url(/images/bgs/1.webp)] bg-[position:center_top] md:bg-[length:100%] bg-no-repeat grid grid-cols-1 xl:grid-cols-[18%_64%_23%]">
      <div className="hidden xl:flex flex-col gap-15 justify-center items-center relative z-3">
        <div>
          <h1 className="text-[3rem]/12 text-black font-juzhokaizen scale-135 translate-x-[4.2rem] 2xl:scale-140 2xl:translate-x-[6rem]">
            <span className="block translate-x-8">Red</span>
            <span className="block">Blossom</span>
            <span className="block translate-x-7">Spirits</span>
          </h1>
        </div>
        <div className="w-full flex-between gap-5 2xl:gap-2 translate-x-10 2xl:translate-x-20">
          <div>
            <CycleButton style={"scale-110"} title={"Join the Spirits"} />
          </div>
          <h3 className="w-[40%] 2xl:w-[35%]  text-[.8rem] text-black opacity-25 font-juzhokaizen text-end translate-y-8">
            Limited Exclusive Collectible Handcrafted Timeless Iconic
          </h3>
        </div>
      </div>

      <div className="relative flex-center mt-[5rem] lg:mt-0">
        <div className="gradient-layer top-0 xl:hidden bg-linear-to-b" />
        <div className="gradient-layer bottom-0 translate-y-1 bg-linear-to-t" />

        <div className="h-[27rem] md:h-[50rem] lg:h-[60rem] xl:h-[100vh] overflow-hidden">
          <video
            className="h-full relative z-2 scale-130 pr-[.1rem] md:scale-115 md:pr-[1.2rem] lg:scale-100 lg:pr-[1rem] xl:scale-110"
            autoPlay
            muted
          >
            <source src="/videos/Hero.webm" />
          </video>
        </div>

        <div
          className="absolute z-1 abs-center w-[clamp(22rem,_71.43vw,_42rem)] h-[clamp(22rem,_71.43vw,_42rem)] rounded-full bg-[url('/images/more/dragon.png'),radial-gradient(at_50%_50%,var(--color-light-red),var(--color-dark-red))]
            bg-center bg-no-repeat [background-size:100%]"
        />
      </div>

      <div className="hidden relative z-4 xl:flex flex-col justify-center items-center gap-12 pt-20 ">
        <div className="w-full flex-between -translate-x-25 2xl:-translate-x-45">
          <h6 className="w-[50%] capitalize font-medium text-black text-[.7rem]/4">
            <span className="opacity-30">Red Blossom Spirits is a</span>
            <span className="opacity-40">limited NFT collection</span>
            <span className="opacity-30">
              of ethereal beings born from silence, fire, and dreams.
            </span>
            <img src="/images/logo.png" alt="logo" className="w-12 mt-2" />
          </h6>
          <h5 className="w-[25%] font-juzhokaizen text-end text-[.9rem]/5 opacity-60 scale-x-120">
            Spirits Bloom Mystery Essence Balance Energy
          </h5>
        </div>
        <div className="flex flex-col gap-15 justify-center items-end -translate-x-18 2xl:-translate-x-30">
          <div className="flex-right gap-2 translate-x-5">
            <div className="avatar-cycle scale-180 flex-center">
              <img
                src="/images/avatars/avatar-4-1.png"
                alt="avatar"
                width={"100%"}
              />
            </div>
            <h5 className="w-[45%] opacity-40 text-[.72rem] text-black pl-7">
              Once Minted — Never Repeated
            </h5>
          </div>
          <div className="w-full flex-between">
            <div className="avatar-cycle scale-145 flex-center">
              <img
                src="/images/avatars/avatar-1-1.jpg"
                alt="avatar"
                width={"100%"}
              />
            </div>
            <div className="avatar-cycle scale-115 flex-center">
              <img
                src="/images/avatars/avatar-3.jpg"
                alt="avatar"
                width={"100%"}
              />
            </div>
          </div>
        </div>
        <div className="-translate-x-22 2xl:-translate-x-45 flex flex-col gap-2">
          <h1 className="w-[50%] font-juzhokaizen text-black text-[1.5rem]/7 opacity-80">
            NFT collection
          </h1>
          <h4 className=" w-[50%] text-black text-[.8rem]/4 opacity-40">
            A transformed creation, giving life to a red mystical entity shaped
            by universal spirit archetypes and ancient.
          </h4>
          <div className="flex-left cursor-pointer opacity-70">
            <span className="text-[.9rem] underline">Read More</span>
            <HiMiniArrowUpRight />
          </div>
        </div>
      </div>

      <div className="relative z-5 flex flex-col justify-center items-center gap-3 xl:hidden -translate-y-10 md:-translate-y-25">
        <h1 className="w-[45%] md:w-[30%]  lg:w-[50%] text-black text-[2.5rem]/11 md:text-[3rem]/13 lg:text-[5rem]/20 font-juzhokaizen text-center">
          Red Blossom Spirits
        </h1>
        <Button
          style={"scale-105 md:scale-120 lg:scale-165  md:mt-3 lg:mt-5"}
          title={"Join the Spirits"}
        />
      </div>

      {/* tree */}
      <div className="w-[30%] md:w-[25%] xl:w-[18%] absolute z-5 xl:z-1 bottom-25 xl:bottom-0 -right-0  translate-x-5 -rotate-10">
        <div>
          <img src="/images/Trees/tree-1.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center">
          <img src="/images/Trees/tree-1-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[30%] md:w-[20%] xl:w-[10%] absolute z-5 xl:z-1 top-[65%] md:top-[70%]  xl:top-[45%] -left-0 -translate-x-5 rotate-10">
        <div>
          <img src="/images/Trees/tree-1-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center">
          <img src="/images/Trees/tree-1-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
