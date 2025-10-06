import { Navbar } from "./components/layout/Navbar";
import { Hero } from "./components/layout/Hero";
import { Products } from "./components/layout/Products";
import { About } from "./components/layout/About";
import { Contact } from "./components/layout/Contact";
import { Footer } from "./components/layout/Footer";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      {/* Header */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main>
        <Hero />
        <Products />
        <About />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
