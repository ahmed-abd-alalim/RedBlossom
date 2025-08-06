// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import { Hero, About, FVideo, Collection } from "@sections";

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
      </main>
      <Footer />
    </div>
  );
}

export default App;
