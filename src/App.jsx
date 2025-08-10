import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

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
  TVideo,
} from "@sections";

gsap.registerPlugin(ScrollTrigger, SplitText);

function App() {
  return (
    <div className="app-container">
      <Looding />
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
        <TVideo />
      </main>
      <Footer />
    </div>
  );
}

export default App;
