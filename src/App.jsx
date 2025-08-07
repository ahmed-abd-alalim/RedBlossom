// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import { Hero, About, FVideo, Collection, Utility, SVideo } from "@sections";

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
