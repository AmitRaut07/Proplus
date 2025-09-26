import React from "react";
import styles from "./WhyChooseUs.module.css";
import { motion } from "framer-motion";
import { Shield, Clock, Award, Phone } from "lucide-react";

export default function WhyChooseUs() {
  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  return (
    <section id="why-choose-us" className={styles.section}>
      <div className={styles.overlay}></div>
      <div className={styles.container}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <p className={styles.eyebrow}>Why Choose Us</p>
          <h2 className={styles.title}>Trusted Pest Control in Greater Sydney</h2>
          <p className={styles.subtitle}>
            We provide reliable pest control services across Greater Sydney and all surrounding suburbs, delivering effective solutions tailored to your property’s needs.
          </p>
        </motion.header>

        <div className={styles.grid}>
          {[ 
            {
              Icon: Shield,
              title: "Licensed & Insured Experts",
              text: "Our team is fully licensed and insured, ensuring your home or business is treated by professionals who care about safety and compliance."
            },
            {
              Icon: Clock,
              title: "Same-Day & Emergency Service",
              text: "We know pests can’t wait. That’s why we offer same-day and emergency callouts, so your problem is solved quickly and effectively."
            },
            {
              Icon: Award,
              title: "Safe & Eco-Friendly Solutions",
              text: "We use low-toxicity, eco-friendly treatments that are safe for children, pets, and the environment while still eliminating pests effectively."
            },
            {
              Icon: Phone,
              title: "100% Satisfaction Guarantee",
              text: "Our work is backed by a satisfaction guarantee. If pests return, so do we — at no extra cost."
            }
          ].map((item, i) => (
            <motion.div
              key={i}
              className={styles.card}
              custom={i}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              <item.Icon className={styles.icon} />
              <h3 className={styles.cardTitle}>{item.title}</h3>
              <p className={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className={styles.ctaWrapper}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <a href="/contact" className={styles.ctaBtn}>
            Get a Free Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
}
