import React from "react";
import styles from "./PricingAndFaqs.module.css";

export default function PricingAndFaqs() {
  return (
    <div className={styles.pricingFaqs}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroContent}>
          <h1>Pest Control Pricing & Services</h1>
          <p>
            Affordable and eco-friendly pest treatments across Sydney.
            Transparent pricing for every service, no hidden fees.
          </p>
          <a href="#pricing" className={styles.ctaButton}>
            View Pricing
          </a>
        </div>
      </section>

      {/* Pricing Section */}
      <section className={styles.pricingSection}>
        <h2 id="pricing">Our Pest Control Pricing</h2>
        <p className={styles.pricingIntro}>
          Below is a general guide to our services. Prices may vary depending on
          property size & pest infestation level.
        </p>
        <div className={styles.tableContainer}>
          <table className={styles.pricingTable}>
            <thead>
              <tr>
                <th>Service</th>
                <th>Starting Price (AUD)</th>
              </tr>
            </thead>
            <tbody>
              <tr><td>Single Storey General Pest Control</td><td>$190</td></tr>
              <tr><td>Double Storey General Pest Control</td><td>$210</td></tr>
              <tr><td>Termite Inspection / Timber Pest</td><td>$220</td></tr>
              <tr><td>Student Apartments / Units Pest Control</td><td>$149</td></tr>
              <tr><td>Fleas Control</td><td>$145</td></tr>
              <tr><td>End of Lease Pest Treatment</td><td>$150</td></tr>
              <tr><td>Bed Bug Treatment</td><td>$149</td></tr>
              <tr><td>Possum Removal</td><td>$110</td></tr>
              <tr><td>Termite Barrier</td><td>$100</td></tr>
              <tr><td>Ants Pest Control</td><td>$99</td></tr>
              <tr><td>Bird Pest Control</td><td>$119</td></tr>
              <tr><td>Fumigation / Re-fumigation</td><td>$450</td></tr>
              <tr><td>Add-on Service Package</td><td>$99</td></tr>
              <tr><td>Complete Home Package (Single Storey)</td><td>$400</td></tr>
              <tr><td>Double Storey Pest Package</td><td>$450</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* FAQs */}
      <section className={styles.faqsSection}>
        <h2>Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          <div className={styles.faqItem}>
            <h3>How often should I get pest control done?</h3>
            <p>
              For most homes in Sydney, we recommend professional pest control
              every 6–12 months to ensure pests don't return.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Is your pest control safe for kids and pets?</h3>
            <p>
              Yes, we use eco-friendly and pet-safe treatments designed to keep
              your family safe while effectively removing pests.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>Do you provide same-day pest control?</h3>
            <p>
              Yes, we offer same-day emergency pest control services across
              Sydney for urgent situations.
            </p>
          </div>

          <div className={styles.faqItem}>
            <h3>How do I prepare for pest control treatment?</h3>
            <p>
              We recommend cleaning and decluttering areas where pests are
              active. Our team will guide you through any specific preparation.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
