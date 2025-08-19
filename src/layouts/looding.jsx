import { useEffect, useState } from "react";
import Lottie from "lottie-react";

// import animation
import Chinese_woman from "@assets/animation/Chinese_woman.json";

const Looding = () => {
  const [isLoad, setIsLoad] = useState(true);

  useEffect(() => {
    const handleLoad = () => setIsLoad(false);

    if (document.readyState === "complete") {
      // Already loaded
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      return () => window.removeEventListener("load", handleLoad);
    }
  }, []);

  return (
    <>
      {isLoad && (
        <section className="w-full h-full fixed top-0 left-0 z-110 bg-soft-white flex-center">
          <div className="w-[12rem] md:w-[15rem]">
            <Lottie animationData={Chinese_woman} loop={true} autoplay={true} />
          </div>
        </section>
      )}
    </>
  );
};

export default Looding;
