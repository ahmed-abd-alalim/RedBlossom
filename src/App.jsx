// import layouts
import { Navbar, Footer, Looding } from "@layouts";

// import components
import { Hero } from "@components";

function App() {
  return (
    <div className="app-container">
      <Looding />
      <Navbar />
      <main>
        <Hero />
      </main>
      <Footer />
    </div>
  );
}

export default App;
