import styles from "./About.module.css";

export function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.content}>
        <h2 className={styles.title}>About Makhana Delights</h2>
        <p className={styles.text}>
          At Makhana Delights, we believe snacking should be healthy and delicious!  
          Our makhana (fox nuts) are carefully roasted and flavored to bring you the perfect crunch in every bite.  
          Packed with protein, low in calories, and full of natural goodness, our snacks are perfect for everyone.  
        </p>
        <p className={styles.text}>
          Whether you love classic flavors like Salt & Pepper or adventurous ones like Peri Peri,  
          we have a snack for every mood. Taste the difference, enjoy the health, and snack happy!
        </p>
      </div>
      <div className={styles.imageWrapper}>
        <img src="/images/makhana-bowl.png" alt="Makhana bowl" className={styles.image} />
      </div>
    </section>
  );
}
