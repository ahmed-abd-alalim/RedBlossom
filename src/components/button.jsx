import { useEffect } from "react";
import gsap from "gsap";

// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const Button = ({ style, title }) => {
  useEffect(() => {
    const buttonCycles = document.querySelectorAll(".button-normal");

    // Set initial positions for all buttons individually
    buttonCycles.forEach((buttonCycle) => {
      const sScareButton = buttonCycle.querySelector(".s-scare-normal-button");
      if (sScareButton) {
        gsap.set(sScareButton, { x: -15 });
      }
    });

    // Keep track of listeners for cleanup
    const cleanups = [];

    buttonCycles.forEach((buttonCycle) => {
      const fScareButton = buttonCycle.querySelector(".f-scare-normal-button");
      const sScareButton = buttonCycle.querySelector(".s-scare-normal-button");

      if (!fScareButton || !sScareButton) return;

      // Create handlers specific to this buttonCycle
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

      // Store cleanup functions
      cleanups.push(() => {
        buttonCycle.removeEventListener("mouseenter", fonEnter);
        buttonCycle.removeEventListener("mouseenter", sonEnter);
        buttonCycle.removeEventListener("mouseleave", fonLeave);
        buttonCycle.removeEventListener("mouseleave", sonLeave);
      });
    });

    // Cleanup on unmount
    return () => {
      cleanups.forEach((cleanupFn) => cleanupFn());
    };
  }, []);

  return (
    <div className={`button-normal ${style} cursor-pointer w-50`}>
      <div className="w-full relative">
        <div className="button-bg-mask"></div>
        <div className="w-full h-full absolute z-2 top-0 left-0 flex justify-between items-center pr-3 px-4">
          <span className="text-white text-[.9rem] capitalize">{title}</span>
          <div className="w-4.5 h-4.5 overflow-hidden">
            <HiMiniArrowUpRight className="text-white text-[1.1rem] f-scare-normal-button" />
            <HiMiniArrowUpRight className="text-white text-[1.1rem] s-scare-normal-button" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Button;
