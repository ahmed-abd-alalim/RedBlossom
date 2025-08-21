import { useState, useEffect } from "react";
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
  const [isSafari, setIsSafari] = useState(false);

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
      smoothTouch: 0.1,
      effects: true,
      normalizeScroll: true,
      ignoreMobileResize: true,
    });

    return () => smoother.kill();
  }, []);

  useEffect(() => {
    const ua = navigator.userAgent.toLowerCase();
    const safari = /^((?!chrome|android|edg).)*safari/.test(ua);
    setIsSafari(safari);
  }, []);

  return (
    <>
      <STP />
      <RR />
      <Looding isLoad={isLoad} />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="app-container">
            <Navbar />
            <main>
              <Hero isLoad={isLoad} setIsLoad={setIsLoad} isSafari={isSafari} />
              <Element name="about">
                <About />
              </Element>
              <FVideo />
              <Element name="collection">
                <Collection />
              </Element>
              <Element name="utility">
                <Utility isSafari={isSafari} />
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
