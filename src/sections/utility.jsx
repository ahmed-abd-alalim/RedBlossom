import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Utility = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const cardData = [
    "Priority access to future drops",
    "Rights to use the image commercially",
    "Exclusive high-quality digital art",
    "Invitation to a closed circle of collectors",
  ];

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 2,
    },
    breakpoints: {
      "(min-width: 750px)": {
        slides: {
          perView: 3,
        },
      },
    },
  });

  const goToSlide = (idx) => {
    instanceRef.current?.moveToIdx(idx);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 5000);
    return () => clearInterval(interval);
  }, [instanceRef]);

  useGSAP(() => {
    gsap.set(
      [
        ".utility-tree",
        ".utility-card",
        ".utility-avatar",
        ".utility-avatar-title",
      ],
      {
        opacity: 0,
      }
    );
    gsap.set(".utiluty-cycle", {
      scale: 0.9,
      y: "-100vh",
    });

    const mm = gsap.matchMedia();
    // Define breakpoints
    mm.add(
      {
        // Tailwind-like breakpoints
        isSmall: "(max-width: 640px)", // sm
        isMedium: "(min-width: 641px) and (max-width: 1024px)", // md
        isLarge: "(min-width: 1025px)", // lg
      },
      (context) => {
        let { isSmall, isMedium, isLarge } = context.conditions;

        if (isSmall) {
          gsap.set(".utility-section", { marginTop: "100vh" });
        }
        if (isMedium) {
          gsap.set(".utility-section", { marginTop: "40vh" });
        }
        if (isLarge) {
          gsap.set(".utility-section", { marginTop: "40vh" });
        }
      }
    );

    gsap.to(".utility-tree", {
      scrollTrigger: {
        trigger: ".utility-tree",
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
        trigger: ".utility-section",
        start: "top top",
        end: "bottom",
        scrub: 2.5,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".utiluty-cycle", {
      y: "0vh",
      duration: 10,
      ease: "power1.inOut",
    })
      .to(".utiluty-cycle", {
        scale: 1,
        duration: 10,
        ease: "power1.inOut",
      })
      .to(".utility-avatar", {
        opacity: 1,
        duration: 5,
        ease: "power1.inOut",
      })
      .to(".utility-avatar-title", {
        opacity: 1,
        duration: 5,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 50%, transparent 100%)",
      });

    const utilityCard = document.querySelectorAll(".utility-card");
    utilityCard.forEach((item, i) => {
      tl.to(item, {
        delay: 2 * i,
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 65%, transparent 100%)",
      });
    });
  });

  return (
    <section className="utility-section relative xl:bg-[url(/images/bgs/4.webp)] bg-[position:center_center] md:bg-[length:100%] bg-no-repeat h-[100vh] bg-soft-white overflow-hidden">
      <h2 className="utility-avatar-title xl:hidden font-juzhokaizen text-black text-[2rem]/8 lg:text-[2.4rem]/11 text-center pt-5">
        What do you <br />
        get by owning
        <br />
        an NFT?
      </h2>

      <div className="relative flex-center">
        <div className="utility-avatar gradient-layer top-0 xl:hidden bg-linear-to-b" />
        <div className="utility-avatar gradient-layer bottom-0 translate-y-1 bg-linear-to-t" />

        <div className="utility-avatar relative z-2 h-[27rem] md:h-[50rem] lg:h-[60rem] xl:h-[100vh] overflow-hidden">
          <video
            className="h-full relative z-2 scale-120 pl-[.2rem] md:scale-115 md:pl-[1.2rem] lg:scale-100 lg:pl-[1rem] xl:scale-105"
            autoPlay
            muted
          >
            <source src="/videos/utility.webm" />
          </video>
        </div>
        <h2 className="utility-avatar-title hidden xl:block absolute top-3/4 left-1/2 -translate-x-1/2 -translate-y-1/2 z-6 text-white text-[2.5rem] font-juzhokaizen text-center text-shadow-lg">
          What do you <br />
          get by owning
          <br />
          an NFT?
        </h2>

        <div
          className="utiluty-cycle abs-center z-1 w-[clamp(20rem,_71.43vw,_40rem)] h-[clamp(20rem,_71.43vw,_40rem)] rounded-full bg-[url('/images/more/dragon.png'),radial-gradient(at_50%_50%,var(--color-light-red),var(--color-dark-red))]
            bg-center bg-no-repeat [background-size:100%]"
        />
      </div>

      <div className="hidden xl:block w-[10%] absolute top-20 left-30">
        <p className="text-[.7rem]/3 font-medium text-black opacity-30">
          Own a fragment of digital elegance, where art and spirit merge into
          timeless beauty.
        </p>
      </div>
      <div className="hidden xl:block w-[10%] absolute bottom-40 right-20 2xl:right-45">
        <p className="text-[.7rem]/3 font-medium text-black opacity-30">
          An exclusive digital masterpiece — crafted to enrich only the most
          discerning collections.
        </p>
      </div>

      <div className="utility-card hidden xl:flex justify-between items-center w-full h-full absolute z-8 top-0 left-0">
        <div className="translate-x-60 2xl:translate-x-90 translate-y-20 xl:translate-y-5">
          <div className="w-38 h-45 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center gap-1 p-5 text-center -translate-x-25 translate-y-6">
            <p className="text-black text-[.9rem]  font-medium">
              Priority access to future drops
            </p>
            <img src="/images/logo.png" alt="logo" className="w-8" />
          </div>
          <div className="w-38 h-45 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center gap-1 p-5 text-center relative z-2">
            <p className="text-black text-[.9rem] font-medium">
              Rights to use the image commercially
            </p>
            <img src="/images/logo.png" alt="logo" className="w-8" />
          </div>
        </div>
        <div className="-translate-x-65 2xl:-translate-x-98 -translate-y-20">
          <div className="w-38 h-45 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center gap-1 p-5 text-center relative z-3">
            <p className="text-black text-[.9rem]  font-medium">
              Exclusive high-quality digital art
            </p>
            <img src="/images/logo.png" alt="logo" className="w-8" />
          </div>
          <div className="w-38 h-45 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center gap-1 p-5 text-center translate-x-28 -translate-y-6">
            <p className="text-black text-[.9rem]  font-medium">
              Invitation to a closed circle of collectors
            </p>
            <img src="/images/logo.png" alt="logo" className="w-8" />
          </div>
        </div>
      </div>

      <div className="utility-card relative z-6 xl:hidden -translate-y-20">
        <div
          className="relative z-4 w-full h-full flex  keen-slider"
          ref={sliderRef}
        >
          {cardData.map((text, index) => (
            <div
              className="min-w-full px-4 md:px-6 lg:px-8 flex flex-col justify-end keen-slider__slide py-2"
              key={index}
            >
              <div className="bg-white h-30 md:h-35 lg:h-40 rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center gap-1 p-5 text-center">
                <p className="text-black text-[.8rem] md:text-[.9rem] lg:text-[1.2rem] font-medium">
                  {text}
                </p>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="w-10 lg:w-11"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center space-x-2 mt-6">
          {cardData.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goToSlide(idx)}
              className={`w-4 h-4 rounded-full cursor-pointer border-1  ${
                currentSlide === idx
                  ? "bg-red border-red"
                  : "bg-none border-soft-black"
              }`}
            />
          ))}
        </div>
      </div>

      <div className="w-[35%] md:w-[30%] xl:w-[22%] absolute z-5 xl:z-1 bottom-3 scale-y-[-1] md:scale-100  md:bottom-200 xl:bottom-70 rotate-25 md:-rotate-5 -right-0 translate-x-9">
        <div>
          <img src="/images/Trees/tree-4.png" alt="tree" width={"100%"} />
        </div>
        <div className="utility-tree w-full abs-center">
          <img src="/images/Trees/tree-4-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[35%] md:w-[30%] xl:w-[25%] absolute z-5 xl:z-1  bottom-12 scale-y-[-1] md:scale-100  md:bottom-190 xl:bottom-70 -left-0 -translate-x-13">
        <div>
          <img src="/images/Trees/tree-4-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="utility-tree w-full abs-center">
          <img src="/images/Trees/tree-4-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default Utility;
