import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const About = () => {
  useGSAP(() => {
    gsap.set(".about-tree", {
      opacity: 0,
    });

    gsap.set(".about-contant", { opacity: 0 });

    gsap.to(".about-tree", {
      scrollTrigger: {
        trigger: ".about-tree",
        toggleActions: "restart",
      },
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      maskImage:
        "radial-gradient(circle at 50% 100vh, black 94%, transparent 100%)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".about-section",
        start: "top top",
        end: "bottom top",
        scrub: 2.5,
        pin: true,
        // markers: true,
      },
    });
    tl.to(".hero-section", { opacity: 0 }).to(
      ".about-contant",
      {
        opacity: 1,
        duration: 5,
        scale: 1.05,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      },
      "<"
    );
  });

  return (
    <section className="about-section relative w-full h-[100vh] col-center bg-[url(/images/bgs/2.webp)] bg-[position:center_center] md:bg-[length:100%] bg-no-repeat -translate-y-4 bg-soft-white">
      <div className="about-contant hidden md:block relative font-juzhokaizen text-black uppercase md:text-[1.6rem]/8 xl:text-[2rem]/11 md:w-[82%] lg:w-[65%] xl:w-[65%] 2xl:w-[55%]">
        <span className="md:block text-center">
          This is a collection of elegant,
        </span>
        <div className="text-center">
          <span>symbolic images - spirits</span>
          <div className="w-15 inline-flex mx-4">
            <img src="/images/logo.png" alt="logo" width={"100%"} />
          </div>
          <span>that embody</span>
        </div>
        <span className="md:block text-center">beauty, strength</span>
        <span className="md:block text-center md:translate-x-15">
          and silence.
        </span>
        <span className="md:block text-center md:translate-x-10">Each NFT</span>
        <span className="text-start">
          is inspired by Eastern aesthetics, emotional depth and multi-layered
          meanings.
        </span>
      </div>

      <div className="hidden xl:block w-[10%] absolute top-40 left-40">
        <p className="text-[.7rem]/3 font-medium text-black opacity-30">
          The collection contains 4 unique characters, each with its own visual
          code and character.
        </p>
      </div>
      <div className="hidden xl:block w-[10%] absolute bottom-40 right-35 2xl:right-45">
        <p className="text-[.7rem]/3 font-medium text-black opacity-30">
          Ideal for digital art lovers, collectors and those who see art as more
          than just a picture.
        </p>
      </div>

      <div className="about-contant md:hidden ">
        <h2 className="font-juzhokaizen uppercase text-center text-black text-[1.4rem] px-5">
          This is a collection of elegant, symbolic images - spirits that embody
          beauty, strength and silence.
          <div className="w-15 m-auto mb-3">
            <img src="/images/logo.png" alt="logo" width={"100%"} />
          </div>
          Each NFT is inspired by Eastern aesthetics, emotional depth and
          multi-layered meanings.
        </h2>

        <div className="flex items-center justify-center gap-2 mt-4 cursor-pointer group">
          <span className="underline text-[1.1rem] text-black group-hover:text-red group-focus:text-red transition-all duration-550">
            Read more
          </span>
          <HiMiniArrowUpRight className="text-[1.1rem] text-black group-hover:text-red group-focus:text-red transition-all duration-550" />
        </div>
      </div>

      <div className="w-[30%] md:w-[25%] xl:w-[20%] absolute z-5 xl:z-1 bottom-0 -right-0 translate-x-5">
        <div>
          <img src="/images/Trees/tree-2.png" alt="tree" width={"100%"} />
        </div>
        <div className=" about-tree w-full abs-center">
          <img src="/images/Trees/tree-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[30%] md:w-[25%] xl:w-[15%] absolute z-5 xl:z-1  top-0 -left-0 -translate-x-5">
        <div>
          <img src="/images/Trees/tree-2-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="about-tree w-full abs-center">
          <img src="/images/Trees/tree-2-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default About;
