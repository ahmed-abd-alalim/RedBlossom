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
      </main>
      <Footer />
    </div>
  );
}

export default App;
