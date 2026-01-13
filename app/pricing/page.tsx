import { ArrowLeft } from "lucide-react";
import styles from "./styles/pricing.module.scss";
import PricingWidget from "./components/PricingWidget";

export default function PricingPage() {
  return (
    <section className={styles.pricingPage}>
      <div className={styles.card}>
        <ArrowLeft />
        <div className={styles.header}>
          <p className={styles.badge}>Premium Plans</p>
          <h1>Choose the Lex plan that fits your practice</h1>
        </div>
        <PricingWidget />
      </div>
    </section>
  );
}
