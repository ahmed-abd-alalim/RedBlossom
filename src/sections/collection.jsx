import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import { useEffect, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import components
import { Button, Cards } from "@components";

const Collection = () => {
  const cardData = [
    {
      img: "/images/avatars/avatar-1-1.jpg",
      title: "Empress Xue",
      des: "The sovereign of purity and perfection. Her cold beauty reigns over the ethereal gardens.",
    },
    {
      img: "/images/avatars/avatar-2-1.png",
      title: "The Silent Orchid",
      des: "A symbol of serenity and inner harmony. She embodies the balance between nature and spirit.",
    },
    {
      img: "/images/avatars/avatar-3.jpg",
      title: "Crimson Lian",
      des: "Radiating passion and elegance. Each petal reflects her unyielding strength and grace.",
    },
    {
      img: "/images/avatars/avatar-4-1.png",
      title: "Blossom Warden",
      des: "The eternal guardian of sacred blossoms. Her presence protects the fragile beauty of the realm.",
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: {
      perView: 1,
    },
    breakpoints: {
      "(min-width: 750px)": {
        loop: false,
        slides: {
          perView: 2,
        },
      },
      "(min-width: 1080px)": {
        loop: false,
        slides: {
          perView: 4,
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
    gsap.set(".collection-tree", {
      opacity: 0,
    });

    gsap.set(
      [
        ".collection-contant",
        ".collection-navebar",
        ".collection-scroller",
        ".collection-small-button",
      ],
      { opacity: 0 }
    );

    gsap.set(".collection-section", { marginTop: "60vh" });

    gsap.to(".collection-tree", {
      scrollTrigger: {
        trigger: ".collection-tree",
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
        trigger: ".collection-section",
        start: "top top",
        end: "bottom +=30%",
        scrub: 2.5,
        pin: true,
        // markers: true,
      },
    });

    tl.to(
      ".collection-contant",
      {
        delay: 0.5,
        opacity: 1,
        duration: 15,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 65%, transparent 100%)",
      },
      "<"
    )
      .to(
        ".collection-navebar",
        {
          opacity: 1,
          duration: 10,
          ease: "power1.inOut",
        },
        "<"
      )
      .to(".collection-scroller", {
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
      })
      .to(".collection-small-button", {
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
      });
  });

  return (
    <section className="collection-section relative bg-[url(/images/bgs/3.webp)] bg-[position:center_center] md:bg-[length:100%] bg-no-repeat lg:px-10 flex flex-col justify-center pt-4 md:pt-0  gap-2 md:gap-20 lg:gap-25 xl:gap-15 2xl:gap-5  h-[110vh] md:h-[100vh] bg-soft-white">
      <div className="collection-navebar relative z-4 w-full flex flex-col md:flex-row justify-center md:justify-between items-center md:px-[3rem]">
        <h2 className="font-juzhokaizen text-black text-[2rem]/8  lg:text-[2.4rem]/11  text-center md:text-start">
          Meet the Red <br /> Blossom spirits
        </h2>
        <span className=" md:hidden text-[.95rem] text-black text-center opacity-70 mx-15 mt-1">
          Unique spirits, immortalized in fine details, waiting to become part
          of your collection.
        </span>
        <Button title={"Join the Spirits"} style={"hidden md:flex scale-110"} />
      </div>

      <div
        className="collection-contant relative z-4 w-full flex keen-slider"
        ref={sliderRef}
      >
        {cardData.map((_, index) => (
          <div
            className="min-w-full px-8 md:px-5 lg:px-4 flex flex-col justify-end keen-slider__slide py-2 xl:py-8"
            key={index}
          >
            <Cards
              style={`${
                index % 2 === 0 ? "xl:-translate-y-5" : "xl:translate-y-5"
              } `}
              data={_}
            />
          </div>
        ))}
      </div>

      <div className="collection-scroller flex md:hidden justify-center space-x-2 mt-3">
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

      <div className="collection-small-button">
        <Button
          title={"Join the Spirits"}
          style={"m-auto md:hidden scale-110 mt-4"}
        />
      </div>

      <div className="hidden md:block w-[30%] xl:w-[15%] absolute z-1 top-35 -right-0 translate-x-15">
        <div>
          <img src="/images/Trees/tree-3.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center collection-tree">
          <img src="/images/Trees/tree-3-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="hidden md:block  w-[40%] xl:w-[20%] absolute z-1  top-15 -left-0 -translate-x-15">
        <div>
          <img src="/images/Trees/tree-3-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="w-full abs-center collection-tree">
          <img src="/images/Trees/tree-3-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default Collection;
