import { useState } from "react";
import styles from "./Navbar.module.css";
import { Button } from "../ui/Button";

export function Navbar() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Logo */}
      <div className={styles.logo}>Makhana Delights</div>

      {/* Links + CTA */}
      <div className={`${styles.linksContainer} ${isMenuOpen ? styles.open : ""}`}>
        <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
        <a href="#products" onClick={() => setMenuOpen(false)}>Products</a>
        <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
        <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        <Button size="sm" className={styles.shopButton} onClick={() => setMenuOpen(false)}>
          Shop Now
        </Button>
      </div>

      {/* Hamburger */}
      <button
        className={styles.menuButton}
        onClick={() => setMenuOpen(!isMenuOpen)}
        aria-label="Toggle Menu"
      >
        {isMenuOpen ? "✕" : "☰"}
      </button>
    </nav>
  );
}
