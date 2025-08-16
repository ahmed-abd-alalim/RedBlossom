import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import ScrollSmoother from "gsap/ScrollSmoother";
import { useEffect } from "react";

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
import { STP } from "@utils";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    // Create the smoother
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.5,
      effects: true,
    });
  }, []);

  return (
    <div id="smooth-wrapper" className="app-container">
      <STP />
      <Looding />
      <div id="smooth-content">
        <Navbar />
        <main>
          <Hero />
          <About />
          <FVideo />
          <Collection />
          <Utility />
          <SVideo />
          <HowToGetIt />
          <FAQ />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
