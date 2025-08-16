import { useEffect } from "react";
import gsap from "gsap";

// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const CycleButton = ({ style, title }) => {
  useEffect(() => {
    const buttonCycles = document.querySelectorAll(".button-cycle");

    // Set initial position for each button's .s-scare-button individually
    buttonCycles.forEach((buttonCycle) => {
      const sScareButton = buttonCycle.querySelector(".s-scare-button");
      if (sScareButton) {
        gsap.set(sScareButton, { x: -15 });
      }
    });

    // Store cleanup handlers
    const cleanups = [];

    buttonCycles.forEach((buttonCycle) => {
      const fScareButton = buttonCycle.querySelector(".f-scare-button");
      const sScareButton = buttonCycle.querySelector(".s-scare-button");

      if (!fScareButton || !sScareButton) return;

      // Handlers targeting only this buttonCycle's children
      const fonEnter = () => {
        gsap.to(fScareButton, { x: 15, y: -15, ease: "power1.inOut" });
      };

      const sonEnter = () => {
        gsap.to(sScareButton, { x: 0, y: -16, ease: "power1.inOut" });
      };

      const fonLeave = () => {
        gsap.to(fScareButton, { x: 0, y: 0 });
      };

      const sonLeave = () => {
        gsap.to(sScareButton, { x: -15, y: 0 });
      };

      buttonCycle.addEventListener("mouseenter", fonEnter);
      buttonCycle.addEventListener("mouseenter", sonEnter);
      buttonCycle.addEventListener("mouseleave", fonLeave);
      buttonCycle.addEventListener("mouseleave", sonLeave);

      cleanups.push(() => {
        buttonCycle.removeEventListener("mouseenter", fonEnter);
        buttonCycle.removeEventListener("mouseenter", sonEnter);
        buttonCycle.removeEventListener("mouseleave", fonLeave);
        buttonCycle.removeEventListener("mouseleave", sonLeave);
      });
    });

    return () => {
      cleanups.forEach((cleanupFn) => cleanupFn());
    };
  }, []);

  return (
    <div
      className={`button-cycle ${style} w-30 h-30 rounded-full flex-center gap-1 cursor-pointer bg-[url('/images/more/button-bg.png')] bg-red bg-center bg-no-repeat [background-size:100%]`}
    >
      <span className="text-white text-[.55rem] uppercase">{title}</span>
      <div className="w-5 h-5 overflow-hidden">
        <HiMiniArrowUpRight className="text-white f-scare-button" />
        <HiMiniArrowUpRight className="text-white s-scare-button" />
      </div>
    </div>
  );
};

export default CycleButton;
