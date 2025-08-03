const Hero = () => {
  return (
    <section className="bg-[url(/images/bgs/1.webp)] bg-[length:200%] bg-[position:center_top] md:bg-[length:100%] bg-no-repeat grid grid-cols-1 xl:grid-cols-[18%_64%_18%] border-2 border-amber-500">
      <div className="hidden lg:block">#</div>
      <div className="relative border-2 flex-center xl:overflow-hidden border-amber-500">
        <div className="gradient-layer top-0 xl:hidden bg-linear-to-b" />
        <div className="gradient-layer bottom-0 bg-linear-to-t" />
        <video
          className="relative z-2 h-[85vh] md:h-[90vh] lg:h-[100vh] scale-130 pr-[.2rem] md:scale-115 md:pr-[1.2rem] lg:scale-100 lg:pr-[1rem] xl:scale-110"
          autoPlay
          muted
        >
          <source src="/videos/Hero.webm" />
        </video>

        <div className="absolute z-1 abs-center w-[clamp(21rem,_92.86vw,_47rem)] h-[clamp(21rem,_92.86vw,_47rem)] rounded-full bg-radial-[at_50%_50%] from-light-red to-dark-red" />
      </div>
      <div className="hidden lg:block">#</div>
    </section>
  );
};

export default Hero;
