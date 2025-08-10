// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const Button = ({ style, title }) => {
  return (
    <div className={`${style} cursor-pointer w-50`}>
      <div className="w-full relative">
        <div className="button-bg-mask"></div>
        <div className="w-full h-full absolute z-2 top-0 left-0 flex justify-between items-center pr-3 px-4">
          <span className="text-white text-[.9rem] capitalize">{title}</span>
          <HiMiniArrowUpRight className="text-white text-[1.1rem]" />
        </div>
      </div>
    </div>
  );
};

export default Button;
