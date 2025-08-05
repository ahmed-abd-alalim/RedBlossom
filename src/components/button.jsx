// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const Button = ({ style, title }) => {
  return (
    <div className={`${style} flex justify-center items-center cursor-pointer`}>
      <div className="bg-red py-3 px-6 rounded-3xl text-white text-[.9rem] capitalize translate-x-3">
        {title}
      </div>
      <div className="relative w-[2rem] h-3 bg-red">
        <div
          id="curved-corner-topleft"
          className="absolute z-8 -translate-y-[1.3rem] translate-x-[.3rem] top-0 left-0 rotate-136"
        />
        <div
          id="curved-corner-topleft"
          className="absolute z-8 -translate-y-[.7rem] translate-x-[.3rem] bottom-0 left-0 -rotate-47"
        />
      </div>
      <div className="bg-red py-3 px-3 rounded-full text-white text-[1.1rem] capitalize -translate-x-3">
        <HiMiniArrowUpRight />
      </div>
    </div>
  );
};

export default Button;
