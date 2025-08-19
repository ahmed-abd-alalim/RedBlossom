import { useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useLayoutEffect } from "react";
import { Element } from "react-scroll";

// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import {
  Hero,
  About,
  FVideo,
  Collection,
  Utility,
  SVideo,
  HowToGetIt,
  FAQ,
} from "@sections";

// import utils
import { STP, RR } from "@utils";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  const [isLoad, setIsLoad] = useState(true);

  console.log(
    "\n %c ✦ Enjoy watching ✦ ",
    "background: #f7a617; color: #fffaf5; padding: 5px 0; margin-right: 5px;",
    "https://ahmedabdalalim.pages.dev \n\n "
  );

  useLayoutEffect(() => {
    const smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });

    return () => smoother.kill();
  }, []);

  return (
    <>
      {/* <STP />
      <RR /> */}
      <Looding isLoad={isLoad} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="app-container">
            <Navbar />
            <main>
              <Hero setIsLoad={setIsLoad} />
              <Element name="about">
                <About />
              </Element>
              <FVideo />
              <Element name="collection">
                <Collection />
              </Element>
              <Element name="utility">
                <Utility />
              </Element>
              <SVideo />
              <HowToGetIt />
              <Element name="faq">
                <FAQ />
              </Element>
            </main>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
