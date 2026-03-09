"use client";

import { buildWhatsappLink, PLANS } from "../constants/constants";
import styles from "./pricing.module.scss";

export default function PricingPage() {
  return (
    <section className={styles.pricingPage}>
      <div className={styles.inner}>
        <div className={styles.plansGrid}>
          {PLANS.map((plan) => (
            <article
              key={plan.id}
              className={`${styles.planCard} ${
                plan.emphasis ? styles.planCardEmphasis : ""
              }`}
            >
              <div className={styles.planHeader}>
                <h2 className={styles.planName}>{plan.name}</h2>
                <div className={styles.priceRow}>
                  <span className={styles.price}>{plan.price}</span>
                  <span className={styles.period}>{plan.period}</span>
                </div>
                <p className={styles.planDescription}>{plan.description}</p>
              </div>

              <ul className={styles.features}>
                {plan.highlights.map((item) => (
                  <li key={item} className={styles.featureItem}>
                    <span className={styles.featureDot} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className={styles.actions}>
                <button
                  className={
                    plan.emphasis
                      ? styles.secondaryButton
                      : styles.primaryButton
                  }
                  onClick={() => {
                    const url = buildWhatsappLink(plan.name);
                    window.open(url, "_blank");
                  }}
                >
                  {plan.cta}
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
