import Lottie from "lottie-react";

// import animation
import Chinese_woman from "@assets/animation/Chinese_woman.json";

const Looding = ({ isLoad }) => {
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
