import { useState } from "react";

// import icon
import {
  RiDiscordFill,
  RiInstagramFill,
  RiTwitterXFill,
  HiOutlineMenuAlt3,
  IoClose,
} from "@assets/icons";

const Navbar = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const socialInfo = [
    { icon: RiDiscordFill, url: "#" },
    { icon: RiInstagramFill, url: "#" },
    { icon: RiTwitterXFill, url: "#" },
  ];

  return (
    <>
      <nav
        className={
          menuIsOpen
            ? "fixed bg-soft-white border-b-1 border-dark-two-red lg:absolute lg:bg-transparent lg:border-b-0 transition-all duration-250 lg:transition-none"
            : "bg-transparent"
        }
      >
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
          {menuIsOpen ? (
            <IoClose
              className="lg:hidden text-black text-[1.7rem] md:text-[1.9rem] cursor-pointer"
              onClick={() => setMenuIsOpen(false)}
            />
          ) : (
            <HiOutlineMenuAlt3
              className="lg:hidden text-black text-[1.8rem] md:text-[2rem] cursor-pointer"
              onClick={() => setMenuIsOpen(true)}
            />
          )}
        </div>
      </nav>

      <div
        className={`bg-soft-white w-full h-[calc(65%-5rem)] md:h-[calc(60%-6rem)] fixed z-100 top-0 left-0 translate-y-[5rem] md:translate-y-[6rem] flex-center text-center transition-all lg:transition-none duration-300 ${
          menuIsOpen
            ? "translate-x-[0%] lg:translate-x-[150%]"
            : "translate-x-[150%]"
        } `}
      >
        <ul className="flex flex-col justify-center items-center gap-10 md:gap-15">
          <li className="capitalize text-black font-juzhokaizen text-[1.2rem] md:text-[1.8rem] cursor-pointer">
            about
          </li>
          <li className="capitalize text-black font-juzhokaizen text-[1.2rem] md:text-[1.8rem] cursor-pointer">
            collection
          </li>
          <li className="capitalize text-black font-juzhokaizen text-[1.2rem]  md:text-[1.8rem] cursor-pointer">
            utility
          </li>
          <li className="uppercase  text-black font-juzhokaizen text-[1.2rem]  md:text-[1.8rem] cursor-pointer">
            faq
          </li>
        </ul>
      </div>

      <div
        className={`bg-soft-white w-full h-[35%] md:h-[40%] fixed z-100 bottom-0 left-0 transition-all lg:transition-none duration-300 flex-center overflow-hidden ${
          menuIsOpen
            ? "translate-x-[0%] lg:translate-x-[150%]"
            : "translate-x-[150%]"
        } `}
      >
        <img
          src="/images/avatars/avatar-1-1.jpg"
          alt="avatar"
          className="w-auto h-auto brightness-75"
        />
      </div>
    </>
  );
};

export default Navbar;
