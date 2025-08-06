// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import { Hero, About, FVideo, Collection, Utility } from "@sections";

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
