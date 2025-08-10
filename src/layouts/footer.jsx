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

      <div className="grid grid-cols-1 lg:grid-cols-2 lg:px-30">
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
              <li>about</li>
              <li>collection</li>
              <li>utility</li>
              <li className="uppercase">faq</li>
            </ul>
          </div>
          <div className="hidden lg:block">
            <h4>messengers</h4>
            <ul>
              <li>instagram</li>
              <li>discord</li>
              <li>twitter</li>
            </ul>
          </div>
          <div className="flex justify-center items-center lg:hidden gap-3">
            {socialInfo.map((iconInfo, _) => {
              let Ico = iconInfo.icon;
              return (
                <a
                  key={_}
                  className="w-10 h-10 md:w-14  md:h-14 rounded-full bg-red flex-center cursor-pointer"
                  href={iconInfo.url}
                >
                  <Ico className="text-white text-[1.25rem] md:text-[1.95rem]" />
                </a>
              );
            })}
          </div>
        </div>
      </div>

      <div className="relative bg-[url('/images/more/footer.png')] bg-red bg-center bg-repeat  [background-size:20rem] md:[background-size:30rem] xl:[background-size:25rem]  h-[20rem] md:h-[17rem] lg:h-[16rem] 2xl:h-[17rem] mt-32 lg:mt-2 flex flex-col items-center justify-end text-center py-3 lg:py-0">
        <div className="absolute -top-30 lg:-top-40 left-1/2 transform -translate-x-1/2 w-50 h-50 lg:w-65 lg:h-65 rounded-full overflow-hidden border-18 border-soft-white">
          <img
            src="/images/avatars/avatar-2-1.png"
            alt="Cut Out"
            className="w-full h-full object-cover"
          />
        </div>

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
    </footer>
  );
};

export default Footer;
