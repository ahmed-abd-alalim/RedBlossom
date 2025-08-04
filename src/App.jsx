// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import { Hero, About } from "@components";

function App() {
  return (
    <div className="app-container">
      <Looding />
      <Navbar />
      <main>
        <Hero />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
