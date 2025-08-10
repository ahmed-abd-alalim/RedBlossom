// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const CycleButton = ({ style, title }) => {
  return (
    <div
      className={`${style} w-30 h-30 rounded-full flex-center gap-1 cursor-pointer bg-[url('/images/more/button-bg.png')] bg-red bg-center bg-no-repeat [background-size:100%]`}
    >
      <span className="text-white text-[.55rem] uppercase">{title}</span>
      <HiMiniArrowUpRight className="text-white" />
    </div>
  );
};

export default CycleButton;
