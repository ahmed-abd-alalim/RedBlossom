import { useState, useEffect } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

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

  useGSAP(() => {
    // Initially hide nav
    gsap.set("nav", { opacity: 0 });

    gsap.to("nav", {
      scrollTrigger: {
        trigger: "nav",
        toggleActions: "restart",
      },
      delay: 1,
      duration: 1,
      opacity: 1,
      ease: "power1.inOut",
      maskImage:
        "radial-gradient(circle at 50% 100vh, black 95%, transparent 100%)",
    });

    // Create scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "top top",
        end: "bottom",
        scrub: 2,
        // markers: true,
      },
    });

    // Fade nav out on scroll
    tl.to("nav", {
      duration: 1,
      ease: "power1.inOut",
      maskImage:
        "radial-gradient(circle at 50% 0vh, black 30%, transparent 0%)",
    });
  });

  useEffect(() => {
    const pgLinks = document.querySelectorAll(".pg-link > div");
    const handlers = [];

    pgLinks.forEach((pgLink) => {
      gsap.set(pgLink, { opacity: 0 });

      const onEnter = () => {
        gsap.to(pgLink, {
          opacity: 1,
          duration: 1,
        });
      };

      const onLeave = () => {
        gsap.to(pgLink, {
          opacity: 0,
          duration: 1,
        });
      };

      pgLink.addEventListener("mouseenter", onEnter);
      pgLink.addEventListener("mouseleave", onLeave);

      handlers.push({ pgLink, onEnter, onLeave });
    });

    // Cleanup function to remove event listeners on unmount
    return () => {
      handlers.forEach(({ pgLink, onEnter, onLeave }) => {
        pgLink.removeEventListener("mouseenter", onEnter);
        pgLink.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []); // Empty dependency array to run once on mount

  useEffect(() => {
    function preventScroll(event) {
      event.preventDefault();
      window.scrollTo(0, 0);
    }
    if (menuIsOpen) {
      window.addEventListener("scroll", preventScroll, { passive: false });
    } else {
      window.removeEventListener("scroll", preventScroll, { passive: false });
    }
    // Cleanup on unmount
    return () => {
      window.removeEventListener("scroll", preventScroll, { passive: false });
    };
  }, [menuIsOpen]);

  return (
    <>
      <nav
        className={`fixed ${
          menuIsOpen
            ? " bg-soft-white border-b-1 border-dark-two-red lg:absolute lg:bg-transparent lg:border-b-0 transition-all duration-250 lg:transition-none"
            : "bg-transparent"
        }`}
      >
        <div className="flex-left lg:gap-15">
          <div className="w-[3.8rem] md:w-[4.3rem]">
            <img src="/images/logo.png" alt="logo" width={"100%"} />
          </div>
          <div className="hidden lg:block">
            <ul>
              <li className="relative pg-link">
                <div className="w-12 h-full absolute top-0 left-0 -translate-x-1 flex justify-center items-center px-2">
                  <img
                    src="/images/navbar/left.png"
                    alt="tree"
                    className="w-full -rotate-25"
                  />
                  <img
                    src="/images/navbar/right.png"
                    alt="tree"
                    className="w-full rotate-25"
                  />
                </div>
                about
              </li>
              <li className="relative pg-link">
                <div className="w-11 h-full absolute top-0 left-0 -translate-x-3 flex justify-between items-center">
                  <img
                    src="/images/navbar/left.png"
                    alt="tree"
                    className="w-full -rotate-25"
                  />
                  <img
                    src="/images/navbar/right.png"
                    alt="tree"
                    className="w-full rotate-25"
                  />
                </div>
                collection
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-right lg:gap-15">
          <ul className="hidden lg:flex">
            <li className="relative pg-link">
              <div className="w-12 h-full absolute top-0 left-0 -translate-x-6 flex justify-between items-center px-2">
                <img
                  src="/images/navbar/left.png"
                  alt="tree"
                  className="w-full -rotate-25"
                />
                <img
                  src="/images/navbar/right.png"
                  alt="tree"
                  className="w-full rotate-25"
                />
              </div>
              utility
            </li>
            <li className="uppercase relative pg-link">
              <div className="w-13 h-full absolute top-0 left-0 -translate-x-7 flex justify-between items-center px-3">
                <img
                  src="/images/navbar/left.png"
                  alt="tree"
                  className="w-full -rotate-25"
                />
                <img
                  src="/images/navbar/right.png"
                  alt="tree"
                  className="w-full rotate-25"
                />
              </div>
              faq
            </li>
          </ul>
          <div className="hidden lg:flex lg:flex-center gap-3">
            {socialInfo.map((iconInfo, _) => {
              let Ico = iconInfo.icon;
              return (
                <a
                  key={_}
                  className="w-9 h-9 rounded-full bg-red flex-center border-1 border-red cursor-pointer group hover:bg-soft-white transition-all duration-550"
                  href={iconInfo.url}
                >
                  <Ico className="text-white text-[1.25rem] group-hover:text-red" />
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
        className={`bg-soft-white bg-[url(/images/bgs/1.webp)] bg-[length:110%] bg-[position:center] bg-no-repeat w-full h-[calc(65%-5rem)] md:h-[calc(60%-6rem)] fixed z-100 top-0 left-0 translate-y-[5rem] md:translate-y-[6rem] flex-center text-center transition-all lg:transition-none duration-300 ${
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
        className={`bg-soft-white w-full h-[35%] md:h-[40%] fixed z-100 bottom-0 left-0 transition-all lg:transition-none duration-300 delay-50 flex-center overflow-hidden ${
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
