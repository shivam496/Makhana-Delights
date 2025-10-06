import { motion } from "framer-motion";
import styles from "./Products.module.css";
import { Button } from "../ui/Button";

interface Product {
  name: string;
  description: string;
  image: string;
}

const products: Product[] = [
  {
    name: "Salt & Pepper",
    description: "Classic roasted makhana with a dash of salt & pepper.",
    image: "/images/salt-pepper.png",
  },
  {
    name: "Peri Peri",
    description: "Spicy Peri Peri flavored makhana for the brave taste buds.",
    image: "/images/peri-peri.png",
  },
  {
    name: "Cheese Delight",
    description: "Creamy cheesy flavor with a crunchy bite.",
    image: "/images/cheese.png",
  },
  {
    name: "Masala Mix",
    description: "Tangy masala roasted makhana, perfect for snacks.",
    image: "/images/masala.png",
  },
];

// Animation variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function Products() {
  return (
    <motion.section
      className={styles.products}
      id="products"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <h2 className={styles.title}>Our Flavors</h2>
      <div className={styles.grid}>
        {products.map((product) => (
          <motion.div
            key={product.name}
            className={styles.card}
            variants={cardVariants}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          >
            <img
              src={product.image}
              alt={product.name}
              className={styles.productImage}
            />
            <h3 className={styles.productName}>{product.name}</h3>
            <p className={styles.productDesc}>{product.description}</p>
            <Button size="sm">Buy Now</Button>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
