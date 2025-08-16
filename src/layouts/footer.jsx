import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import config
import config from "@/assets/config.json";

// import icon
import { RiDiscordFill, RiInstagramFill, RiTwitterXFill } from "@assets/icons";

const Footer = () => {
  const socialInfo = [
    { icon: RiDiscordFill, url: "#" },
    { icon: RiInstagramFill, url: "#" },
    { icon: RiTwitterXFill, url: "#" },
  ];

  useGSAP(() => {
    gsap.set("footer", { marginTop: "100vh" });
  });

  return (
    <footer>
      <div className="w-50 md:w-65 absolute top-0 right-0 rotate-15 translate-x-10 -translate-y-12">
        <img src="/images/Trees/tree-7.png" alt="tree" className="w-full" />
        <img
          src="/images/Trees/tree-7-1.png"
          alt="tree"
          className="w-full absolute top-0"
        />
      </div>

      <div className="w-50 md:w-65 absolute top-0 left-0 -rotate-15 -translate-x-10 -translate-y-15">
        <img src="/images/Trees/tree-7-2.png" alt="tree" className="w-full" />
        <img
          src="/images/Trees/tree-7-2-1.png"
          alt="tree"
          className="w-full absolute top-0"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-15 xl:px-30">
        <div className="flex justify-center lg:flex-col lg:justify-start gap-5 mb-5 lg:mb-0">
          <h2 className="text-center lg:text-start font-juzhokaizen text-[1.6rem] md:text-[2.5rem] lg:text-[2rem] w-[80%] md:w-[70%] lg:w-[80%]">
            Only a few will feel it. Become one of them.
          </h2>

          <div className="hidden lg:flex  mt-5 flex-col gap-1">
            <div className="flex items-center gap-1">
              <h2 className="opacity-50">{config.footer.copyright_designer}</h2>
              <a
                href="https://www.behance.net/3c27fa3f?fbclid=PAZXh0bgNhZW0CMTEAAaeahNBW4HG2rSoi7O_Gv-tJCo-vxnvT8amc9Lj3tbWYeus_yRoG-2nv6JRyxQ_aem_moh7g8VxbhQRKkhGZZRWTw"
                target="_blank"
                className="text-red text-[.71rem] font-bold"
              >
                Victoria
              </a>
            </div>
            <div className="flex items-center gap-1">
              <h2 className="opacity-50">
                {config.footer.copyright_developer}
              </h2>
              <a
                href="https://ahmedabdalalim.pages.dev/"
                target="_blank"
                className="w-[1.2rem] pt-1"
              >
                <img
                  src="https://raw.githubusercontent.com/ahmed-abd-alalim/ahmed-abd-alalim/main/assets/3A.png"
                  alt="3A"
                  width={"100%"}
                />
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-end gap-6 lg:gap-15">
          <div className="text-center lg:text-start">
            <h4>menu</h4>
            <ul>
              <li className="hover:text-dark-red focus:text-dark-red hover:opacity-80 focus:opacity-80 transition-all duration-500">
                about
              </li>
              <li className="hover:text-dark-red  focus:text-dark-red hover:opacity-80  focus:opacity-80 transition-all duration-500">
                collection
              </li>
              <li className="hover:text-dark-red focus:text-dark-red hover:opacity-80 focus:opacity-80 transition-all duration-500">
                utility
              </li>
              <li className="uppercase hover:text-dark-red focus:text-dark-red hover:opacity-80 focus:opacity-80 transition-all duration-500">
                faq
              </li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h4>messengers</h4>
            <ul>
              <li className="hover:text-dark-red hover:opacity-80 transition-all duration-500">
                instagram
              </li>
              <li className="hover:text-dark-red hover:opacity-80 transition-all duration-500">
                discord
              </li>
              <li className="hover:text-dark-red hover:opacity-80 transition-all duration-500">
                twitter
              </li>
            </ul>
          </div>
          <div className="flex justify-center items-center lg:hidden gap-3">
            {socialInfo.map((iconInfo, _) => {
              let Ico = iconInfo.icon;
              return (
                <a
                  key={_}
                  className="w-10 h-10 md:w-14  md:h-14 rounded-full bg-red flex-center border-1 border-red cursor-pointer group hover:bg-soft-white focus:bg-soft-white transition-all duration-550"
                  href={iconInfo.url}
                >
                  <Ico className="text-white text-[1.25rem] md:text-[1.95rem] group-hover:text-red group-focus:text-red" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative mt-38 lg:mt-2">
        <div className="absolute -top-30 lg:-top-40 left-1/2 transform -translate-x-1/2 w-50 h-50 md:w-55 md:h-55 lg:w-68 lg:h-68 bg-red bg-[url(/images/more/dragon.png)] [background-size:160%] rounded-full overflow-hidden">
          <img
            src="/images/avatars/avatar-2.png"
            alt="Cut Out"
            className="w-full h-full object-cover scale-110"
          />
        </div>
        <div className="footer-mask-curved bg-[url('/images/more/footer.png')] bg-red bg-center bg-repeat  [background-size:20rem] md:[background-size:30rem] xl:[background-size:25rem]  h-[20rem] md:h-[17rem] lg:h-[16rem] 2xl:h-[17rem]  flex flex-col items-center justify-end text-center py-3 lg:py-0 [--r:40px] [--s:110px] [--a:24deg] md:[--r:40px] md:[--s:120px] md:[--a:19deg] lg:[--r:45px] lg:[--s:150px] lg:[--a:21.5deg]">
          <h1>Red Blossom Spirits</h1>

          <div className="flex lg:hidden mt-3 flex-col md:flex-row md:gap-5 gap-1">
            <div className="flex items-center gap-1">
              <h2 className="text-white text-[.71rem] opacity-50">
                {config.footer.copyright_designer}
              </h2>
              <a
                href="https://www.behance.net/3c27fa3f?fbclid=PAZXh0bgNhZW0CMTEAAaeahNBW4HG2rSoi7O_Gv-tJCo-vxnvT8amc9Lj3tbWYeus_yRoG-2nv6JRyxQ_aem_moh7g8VxbhQRKkhGZZRWTw"
                target="_blank"
                className="text-white text-[.71rem] font-bold opacity-70"
              >
                Victoria
              </a>
            </div>
            <div className="flex items-center gap-1">
              <h2 className="text-white text-[.71rem] opacity-50">
                {config.footer.copyright_developer}
              </h2>
              <a
                href="https://ahmedabdalalim.pages.dev/"
                target="_blank"
                className="w-[1.2rem] pt-1"
              >
                <img
                  src="https://raw.githubusercontent.com/ahmed-abd-alalim/ahmed-abd-alalim/main/assets/3A.png"
                  alt="3A"
                  width={"100%"}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
