import { motion } from "framer-motion";
import styles from "./Hero.module.css";
import { Button } from "../ui/Button"; // ShadCN button

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export function Hero() {
  return (
    <section className={styles.hero}>
      {/* Content Section */}
      <motion.div
        className={styles.content}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <h1 className={styles.title}>
          Taste the <span>Crunch of Goodness</span>
        </h1>
        <p className={styles.subtitle}>
          Discover our delicious, guilt-free Makhana snacks — roasted to
          perfection with natural flavors. Healthy, crunchy, and 100% made in
          India.
        </p>

        <div className={styles.buttons}>
          <Button size="lg">Shop Now</Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className={styles.imageWrapper}
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0, transition: { duration: 0.6 } }}
        viewport={{ once: true }}
      >
        <img
          src="/images/makhana-hero.png"
          alt="Bowl of roasted makhana"
          className={styles.heroImage}
        />
      </motion.div>
    </section>
  );
}
