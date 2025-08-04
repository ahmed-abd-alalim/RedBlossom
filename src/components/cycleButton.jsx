// import icon
import { HiMiniArrowUpRight } from "@/assets/icons";

const CycleButton = ({ style, title }) => {
  return (
    <div
      className={`${style} w-30 h-30 rounded-full bg-red flex-center gap-1 cursor-pointer`}
    >
      <span className="text-white text-[.55rem] uppercase">{title}</span>
      <HiMiniArrowUpRight className="text-white" />
    </div>
  );
};

export default CycleButton;
