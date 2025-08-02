// import icon
import {
  RiDiscordFill,
  RiInstagramFill,
  RiTwitterXFill,
  HiOutlineMenuAlt3,
} from "@assets/icons";

const Navbar = () => {
  const socialInfo = [
    { icon: RiDiscordFill, url: "#" },
    { icon: RiInstagramFill, url: "#" },
    { icon: RiTwitterXFill, url: "#" },
  ];

  return (
    <nav>
      <div className="flex-left lg:gap-35">
        <div className="w-[3.8rem] md:w-[4.3rem]">
          <img src="/images/logo.png" alt="logo" width={"100%"} />
        </div>
        <div className="hidden lg:block">
          <ul>
            <li>about</li>
            <li>collection</li>
          </ul>
        </div>
      </div>
      <div className="flex-right lg:gap-33">
        <ul className="hidden lg:flex">
          <li>utility</li>
          <li className="uppercase">faq</li>
        </ul>
        <div className="hidden lg:flex lg:flex-center gap-3">
          {socialInfo.map((iconInfo, _) => {
            let Ico = iconInfo.icon;
            return (
              <a
                key={_}
                className="w-9 h-9 rounded-full bg-red flex-center cursor-pointer"
                href={iconInfo.url}
              >
                <Ico className="text-white text-[1.25rem]" />
              </a>
            );
          })}
        </div>
        <HiOutlineMenuAlt3 className="lg:hidden text-black text-[1.8rem] md:text-[2rem] cursor-pointer" />
      </div>

      {/* small menu */}
    </nav>
  );
};

export default Navbar;
