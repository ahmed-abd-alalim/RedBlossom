import gsap from "gsap";
import { useGSAP } from "@gsap/react";

// import components
import { CycleButton, Button } from "@components";

const HowToGetIt = () => {
  useGSAP(() => {
    gsap.set(".HowToGetIt-tree", {
      opacity: 0,
    });

    gsap.set([".HowToGetIt-button", ".HowToGetIt-title"], { opacity: 0 });
    gsap.set([".HowToGetIt-contant", ".HowToGetIt-small-contant"], {
      opacity: 0,
      y: -15,
    });

    gsap.set(".HowToGetIt-section", { marginTop: "60vh" });

    gsap.to(".HowToGetIt-tree", {
      scrollTrigger: {
        trigger: ".HowToGetIt-tree",
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
        trigger: ".HowToGetIt-section",
        start: "top top",
        end: "bottom +=30%",
        scrub: true,
        pin: true,
        // markers: true,
      },
    });
    tl.to(
      ".HowToGetIt-button",
      {
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
      },
      "<"
    ).to(
      ".HowToGetIt-title",
      {
        opacity: 1,
        duration: 10,
        ease: "power1.inOut",
      },
      "<"
    );

    // Animate small cards (only if visible)
    document.querySelectorAll(".HowToGetIt-contant").forEach((item) => {
      if (item.offsetParent !== null) {
        // visible check
        tl.to(item, {
          y: 0,
          opacity: 1,
          duration: 20,
          ease: "power1.inOut",
        });
      }
    });

    // Animate big cards (only if visible)
    document.querySelectorAll(".HowToGetIt-small-contant").forEach((item) => {
      if (item.offsetParent !== null) {
        // visible check
        tl.to(item, {
          y: 0,
          opacity: 1,
          duration: 15,
          ease: "power1.inOut",
        });
      }
    });
  });

  return (
    <section className="HowToGetIt-section bg-[url(/images/bgs/5.webp)] bg-[position:center_center] md:bg-[length:100%] bg-no-repeat h-[100vh] bg-soft-white">
      <div className="HowToGetIt-title text-center xl:hidden  px-2 py-5">
        <h2 className="font-juzhokaizen text-black text-[1.8rem]/9 lg:text-[2.4rem]/11 text-center">
          Ritual of awakening <br />
          spirits
        </h2>
        <p className=" text-[.95rem] text-black text-center opacity-70 mx-8 mt-1">
          A collector’s privilege — refined, rare, <br /> and steeped in
          symbolic power.
        </p>
      </div>

      <div className="relative w-full h-[45rem]">
        <div className="hidden w-full h-full relative z-2 xl:grid grid-cols-1 md:grid-cols-[50%_60%] px-10 py-20">
          <div className="flex flex-col gap-38">
            <div className="HowToGetIt-title xl:translate-x-25">
              <h2 className="font-juzhokaizen text-black text-[2.5rem]/11">
                Ritual of <br /> awakening spirits
              </h2>
              <p className="text-black opacity-60 text-[.8rem]">
                A collector’s privilege — refined, rare,
                <br /> and steeped in symbolic power.
              </p>
            </div>

            <div className="flex items-center gap-15">
              <div className="HowToGetIt-button">
                <p className="text-black opacity-60 text-[.8rem]">
                  Become part of the circle before <br /> they disappear
                  forever.
                </p>
                <CycleButton
                  style={"scale-145 mt-15 ml-8"}
                  title={"Join the Spirits"}
                />
              </div>
              <div>
                <div className="HowToGetIt-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4">
                  <span className="font-juzhokaizen text-[4.5rem]/15 mt-8">
                    1
                  </span>
                  <p className="text-center text-[.9rem]/5 text-black opacity-70">
                    Feel which spirit resonates with you.
                  </p>
                </div>
                <p className="text-black opacity-60 text-[.7rem] mt-10">
                  A timeless presence wrapped in pixels — <br /> this is not
                  just art, it’s an awakening.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="HowToGetIt-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 translate-x-30">
              <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">3</span>
              <p className="text-center text-[.9rem]/5 text-black opacity-70">
                Watch for the signal - the portal will open unexpectedly.
              </p>
            </div>
            <div className="flex gap-20 mt-35">
              <div className="HowToGetIt-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4">
                <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">
                  2
                </span>
                <p className="text-center text-[.9rem]/5 text-black opacity-70">
                  Make sure your Ethereum wallet is ready.
                </p>
              </div>
              <div className="HowToGetIt-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 translate-x-35 translate-y-15">
                <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">
                  4
                </span>
                <p className="text-center text-[.9rem]/5 text-black opacity-70">
                  Perform the Mint ritual and take your guardian.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="relative z-3 py-5 px-6 md:px-30 lg:px-40 grid-cols-4 xl:hidden">
          <div className="HowToGetIt-small-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 m-auto mr-0">
            <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">1</span>
            <p className="text-center text-[.9rem]/5 text-black opacity-70">
              Feel which spirit resonates with you.
            </p>
          </div>
          <div className="HowToGetIt-small-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 mt-3">
            <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">2</span>
            <p className="text-center text-[.9rem]/5 text-black opacity-70">
              Make sure your Ethereum wallet is ready.
            </p>
          </div>
          <div className="HowToGetIt-small-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 m-auto mr-0 mt-3">
            <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">3</span>
            <p className="text-center text-[.9rem]/5 text-black opacity-70">
              Watch for the signal - the portal will open unexpectedly.
            </p>
          </div>
          <div className="HowToGetIt-small-contant w-45 h-40 bg-white rounded-3xl shadow-[5px_3px_10px_1px] shadow-soft-black col-center p-4 mt-3">
            <span className="font-juzhokaizen text-[4.5rem]/15 mt-5">4</span>
            <p className="text-center text-[.9rem]/5 text-black opacity-70">
              Perform the Mint ritual and take your guardian.
            </p>
          </div>
        </div>

        <div className="w-[140%] md:w-[80%] lg:w-[75%] xl:w-[85%] absolute top-1/2 left-1/2 -translate-x-3/10 md:-translate-x-2/10 xl:-translate-x-3/10 -translate-y-6/6 md:-translate-y-5/6 xl:-translate-y-1/2 rotate-50 md:rotate-40 xl:rotate-0">
          <div>
            <img src="/images/Trees/tree-5.png" alt="tree" width={"100%"} />
          </div>
          <div className="HowToGetIt-tree w-full abs-center">
            <img src="/images/Trees/tree-5-1.png" alt="tree" width={"100%"} />
          </div>
        </div>

        <div className="w-[100%] md:w-[70%] xl:hidden absolute top-1/2 left-1/2 -translate-x-5/6 md:-translate-x-6/6 translate-y-1/2 md:-translate-y-1/6 scale-x-[-1] -rotate-50">
          <div>
            <img src="/images/Trees/tree-5.png" alt="tree" width={"100%"} />
          </div>
          <div className="HowToGetIt-tree w-full abs-center">
            <img src="/images/Trees/tree-5-1.png" alt="tree" width={"100%"} />
          </div>
        </div>
      </div>

      <div className="HowToGetIt-button xl:hidden">
        <p className="text-[.95rem] text-black text-center opacity-50 mx-8 mt-1">
          Become part of the circle before <br /> they disappear forever.
        </p>
        <Button title={"Join the Spirits"} style={"m-auto scale-110 mt-5"} />
      </div>
    </section>
  );
};

export default HowToGetIt;
