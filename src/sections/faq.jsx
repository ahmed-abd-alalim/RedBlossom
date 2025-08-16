import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import icon
import { HiMiniArrowUpRight, RxChevronDown } from "@assets/icons";

const Faq = () => {
  useGSAP(() => {
    gsap.set([".faq-tree", ".faq-title", ".faq-sm-title"], {
      opacity: 0,
    });

    gsap.set(".faq-sm-card", {
      rotate: -80,
      x: "100vh",
      opacity: 0,
    });

    gsap.to(".faq-card", {
      opacity: 0,
      y: -15,
    });

    gsap.set(".faq-section", { opacity: 0, marginTop: "20vh" });

    gsap.to(".faq-tree", {
      scrollTrigger: {
        trigger: ".faq-tree",
        toggleActions: "restart",
      },
      opacity: 1,
      duration: 2,
      ease: "power1.inOut",
      maskImage:
        "radial-gradient(circle at 500% 0vh, black 98%, transparent 100%)",
    });

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".faq-section",
        start: "top top",
        end: "+=60%",
        scrub: 2.5,
        pin: true,
        // markers: true,
      },
    });

    tl.to(".HowToGetIt-section", {
      opacity: 0,
      duration: 2,
      ease: "power1.inOut",
    })
      .to(".faq-section", {
        opacity: 1,
        duration: 2,
        ease: "power1.inOut",
      })
      .to([".faq-title", ".faq-sm-title"], {
        opacity: 1,
        duration: 15,
        scale: 1.05,
        ease: "power1.inOut",
        maskImage:
          "radial-gradient(circle at 50% 0vh, black 85%, transparent 100%)",
      });

    const faqCard = document.querySelectorAll(".faq-card");
    const faqSmCard = document.querySelectorAll(".faq-sm-card");

    faqCard.forEach((item, i) => {
      tl.to(item, {
        delay: 2 * i,
        opacity: 1,
        scale: 1.05,
        y: 0,
        duration: 15,
        ease: "power1.inOut",
      });
    });
    faqSmCard.forEach((item, i) => {
      tl.to(
        item,
        {
          delay: 2 * i,
          rotate: 0,
          x: 0,
          opacity: 1,
          duration: 15,
          ease: "power1.inOut",
        },
        "<"
      );
    });
  });

  return (
    <section className="faq-section relative bg-[url(/images/bgs/6.webp)] bg-[position:center_lefy] md:bg-[position:center_center] bg-[length:300%]  xl:bg-[length:110%] bg-no-repeat h-[100vh] bg-soft-white flex flex-col justify-center gap-10">
      <div className="text-center xl:hidden px-2 faq-title">
        <h2 className="font-juzhokaizen text-black text-[1.7rem] lg:text-[2.4rem] faq-sm-title">
          Questions & Answers
        </h2>
      </div>

      <div className="relative z-3 w-full h-full hidden xl:grid grid-cols-2">
        <h3 className="abs-center font-juzhokaizen text-[2.4rem] faq-title">
          Questions & Answers
        </h3>
        <div className="flex flex-col justify-between py-20 px-20">
          <div className="faq-card w-50 h-55 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black flex flex-col justify-between px-8 py-7">
            <h3 className="font-juzhokaizen text-[1.2rem]/6">
              How many NFTs will be in the collection?
            </h3>
            <span className="uppercase flex items-center justify-end underline cursor-pointer text-[.9rem]">
              open <HiMiniArrowUpRight className="text-[1.1rem]" />
            </span>
          </div>
          <div className="flex items-center gap-10">
            <div className="faq-card w-50 h-55 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black flex flex-col justify-between px-8 py-7">
              <h3 className="font-juzhokaizen text-[1.2rem]/6">
                What chain is used?
              </h3>
              <span className="uppercase flex items-center justify-end underline cursor-pointer text-[.9rem]">
                open <HiMiniArrowUpRight className="text-[1.1rem]" />
              </span>
            </div>
            <div className="faq-card w-50 h-55 bg-[url('/images/more/button-bg.png')] bg-red bg-center bg-no-repeat [background-size:110%] rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black flex flex-col justify-between p-7">
              <h3 className="text-[.7rem] text-white">
                Main focus is soulful digital presence, but exclusive perks may
                appear.
              </h3>
              <span className="uppercase flex items-center justify-end underline cursor-pointer text-white text-[.9rem]">
                open <HiMiniArrowUpRight className="text-[1.1rem]" />
              </span>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end py-20 px-20">
          <div className="faq-card  w-50 h-55 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black flex flex-col justify-between px-8 py-7 -translate-x-25">
            <h3 className="font-juzhokaizen text-[1.2rem]/6">
              When will the mint start
            </h3>
            <span className="uppercase flex items-center justify-end underline cursor-pointer text-[.9rem]">
              open <HiMiniArrowUpRight className="text-[1.1rem]" />
            </span>
          </div>
          <div className="faq-card w-50 h-55 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black flex flex-col justify-between px-8 py-7">
            <h3 className="font-juzhokaizen text-[1.2rem]/6">
              How can I get early access?
            </h3>
            <span className="uppercase flex items-center justify-end underline cursor-pointer text-[.9rem]">
              open <HiMiniArrowUpRight className="text-[1.1rem]" />
            </span>
          </div>
        </div>

        <p className="absolute top-[10%] left-[40%] text-[.7rem]/3 text-black opacity-30">
          Every question reveals <br /> a petal of understanding.
        </p>
        <p className="absolute top-[60%] left-[55%] text-[.7rem]/3 text-black opacity-30">
          Timeless spirits, timeless questions. <br /> Here’s what you need to
          know before <br /> they bloom.
        </p>
        <p className="absolute top-[85%] left-[64%] text-[.7rem]/3 text-black opacity-30">
          Answers whispered through <br /> petals and code.
        </p>
      </div>

      <div className="relative z-3 xl:hidden mt-8">
        <div className="faq-sm-card w-[85%] md:w-[60%] h-18 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black px-6 py-8 m-auto overflow-hidden group">
          <div className="h-[35%] flex justify-between items-center cursor-pointer group-[.h-18]:mt-2">
            <h3 className="w-[85%] font-juzhokaizen text-black text-[1.1rem]/5">
              How many NFTs will be in the collection?
            </h3>
            <RxChevronDown className="text-red rotate-180 text-[1.6rem] group-[.h-18]:text-black group-[.h-18]:rotate-0" />
          </div>
          <div className="h-[65%] mt-5 group-[.h-18]:hidden">
            <p className="text-black text-[.8rem] lg:text-[.9rem] opacity-60">
              Only 4 unique characters, each crafted in a single, iconic bust
              portrait. No copies, no variations — just pure, one-of-a-kind
              digital spirits.
            </p>
          </div>
        </div>

        <div className="faq-sm-card w-[85%] md:w-[60%] h-18 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black px-6 py-8 mt-4 m-auto overflow-hidden group">
          <div className="h-[35%] flex justify-between items-center cursor-pointer group-[.h-18]:mt-2">
            <h3 className="w-[85%] font-juzhokaizen text-black text-[1.1rem]/5">
              What chain is used?
            </h3>
            <RxChevronDown className="text-red rotate-180 text-[1.6rem] group-[.h-18]:text-black group-[.h-18]:rotate-0" />
          </div>
          <div className="h-[65%] mt-5 group-[.h-18]:hidden">
            <p className="text-black text-[.8rem] lg:text-[.9rem] opacity-60">
              Only 4 unique characters, each crafted in a single, iconic bust
              portrait. No copies, no variations — just pure, one-of-a-kind
              digital spirits.
            </p>
          </div>
        </div>

        <div className="faq-sm-card w-[85%] md:w-[60%] h-18 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black px-6 py-8 mt-4 m-auto overflow-hidden group">
          <div className="h-[35%] flex justify-between items-center cursor-pointer group-[.h-18]:mt-2">
            <h3 className=" w-[85%] font-juzhokaizen text-black text-[1.1rem]/5">
              Is this just art of will there be utilities?
            </h3>
            <RxChevronDown className="text-red rotate-180 text-[1.6rem] group-[.h-18]:text-black group-[.h-18]:rotate-0" />
          </div>
          <div className="h-[65%] mt-5 group-[.h-18]:hidden">
            <p className="text-black text-[.8rem] lg:text-[.9rem] opacity-60">
              Only 4 unique characters, each crafted in a single, iconic bust
              portrait. No copies, no variations — just pure, one-of-a-kind
              digital spirits.
            </p>
          </div>
        </div>

        <div className="faq-sm-card w-[85%] md:w-[60%] h-18 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black px-6 py-8 mt-4 m-auto overflow-hidden group">
          <div className="h-[35%] flex justify-between items-center cursor-pointer group-[.h-18]:mt-2">
            <h3 className="w-[85%] font-juzhokaizen text-black text-[1.1rem]/5">
              When will the mint start?
            </h3>
            <RxChevronDown className="text-red rotate-180 text-[1.6rem] group-[.h-18]:text-black group-[.h-18]:rotate-0" />
          </div>
          <div className="h-[65%] mt-5 group-[.h-18]:hidden">
            <p className="text-black text-[.8rem] lg:text-[.9rem] opacity-60">
              Only 4 unique characters, each crafted in a single, iconic bust
              portrait. No copies, no variations — just pure, one-of-a-kind
              digital spirits.
            </p>
          </div>
        </div>

        <div className="faq-sm-card w-[85%] md:w-[60%] h-18 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black px-6 py-8 mt-4 m-auto overflow-hidden group">
          <div className="h-[35%] flex justify-between items-center cursor-pointer group-[.h-18]:mt-2">
            <h3 className="w-[85%] font-juzhokaizen text-black text-[1.1rem]/5">
              How can I get early access?
            </h3>
            <RxChevronDown className="text-red rotate-180 text-[1.6rem] group-[.h-18]:text-black group-[.h-18]:rotate-0" />
          </div>
          <div className="h-[65%] mt-5 group-[.h-18]:hidden">
            <p className="text-black text-[.8rem] lg:text-[.9rem] opacity-60">
              Only 4 unique characters, each crafted in a single, iconic bust
              portrait. No copies, no variations — just pure, one-of-a-kind
              digital spirits.
            </p>
          </div>
        </div>
      </div>

      <div className="w-[35%] md:w-[25%] xl:w-[20%] absolute z-1 top-35 -right-0 translate-x-10">
        <div>
          <img src="/images/Trees/tree-6.png" alt="tree" width={"100%"} />
        </div>
        <div className="faq-tree w-full abs-center">
          <img src="/images/Trees/tree-6-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[35%] md:w-[25%] xl:w-[20%] absolute z-1 top-10 -left-0 -translate-x-10">
        <div>
          <img src="/images/Trees/tree-6-2.png" alt="tree" width={"100%"} />
        </div>
        <div className="faq-tree w-full abs-center">
          <img src="/images/Trees/tree-6-2-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
      <div className="w-[30%] md:w-[20%] xl:w-[15%] absolute z-1  -bottom-0 -left-0 -translate-x-10">
        <div>
          <img src="/images/Trees/tree-6-3.png" alt="tree" width={"100%"} />
        </div>
        <div className="faq-tree w-full abs-center">
          <img src="/images/Trees/tree-6-3-1.png" alt="tree" width={"100%"} />
        </div>
      </div>
    </section>
  );
};

export default Faq;
