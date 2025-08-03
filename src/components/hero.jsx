const Hero = () => {
  return (
    <section className="xl:bg-[url(/images/bgs/1.webp)] bg-[length:200%] bg-[position:center_top] md:bg-[length:100%] bg-no-repeat grid grid-cols-1 xl:grid-cols-[18%_64%_18%]">
      <div className="hidden xl:flex justify-center items-center">#</div>
      <div className="relative flex-center mt-[5rem] lg:mt-0">
        <div className="gradient-layer top-0 xl:hidden bg-linear-to-b" />
        <div className="gradient-layer bottom-0 translate-y-1 bg-linear-to-t" />

        <div className="h-[27rem] md:h-[50rem] lg:h-[60rem] xl:h-[100vh] overflow-hidden">
          <video
            className="h-full relative z-2 scale-130 pr-[.2rem] md:scale-115 md:pr-[1.2rem] lg:scale-100 lg:pr-[1rem] xl:scale-110"
            autoPlay
            muted
          >
            <source src="/videos/Hero.webm" />
          </video>
        </div>

        <div className="absolute z-1 abs-center w-[clamp(22rem,_71.43vw,_42rem)] h-[clamp(22rem,_71.43vw,_42rem)] rounded-full bg-radial-[at_50%_50%] from-light-red to-dark-red" />
      </div>
      <div className="hidden xl:flex justify-center items-center">#</div>
      <div className="flex justify-center items-center xl:hidden">#</div>
    </section>
  );
};

export default Hero;
