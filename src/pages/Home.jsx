import styles from './Home.module.css';
import QuotationForm from '../components/QuotationForm/QuotationForm';
import ServicesShowcase from '../components/sections/ServicesShowcase/ServicesShowcase';
import PestGallery from '../components/sections/ServiceGallery/PestGallery';
import Testimonials from '../components/sections/Testimonials/Testimonials';
import WhyChooseUs from '../components/sections/ChooseUS/WhyChooseUs';
import { useEffect } from 'react';

const Home = () => {
  // Animate trust metrics + count-up
  useEffect(() => {
    // Existing scroll animations
    const elements = document.querySelectorAll(`.${styles.animateOnScroll}`);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.animated);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    elements.forEach((el) => observer.observe(el));

    // Count-up animation for metrics
    const counters = document.querySelectorAll(`.${styles.metricNumber}`);
    const speed = 200; // lower = faster

    const animateCount = (counter) => {
      const target = +counter.getAttribute('data-target') || 0;
      const suffix = counter.getAttribute('data-suffix') || '';
      const updateCount = () => {
        const current = +counter.innerText.replace(/\D/g, '');
        const increment = Math.ceil(target / speed);

        if (current < target) {
          counter.innerText = current + increment + suffix;
          requestAnimationFrame(updateCount);
        } else {
          counter.innerText = target + suffix;
        }
      };
      updateCount();
    };

    const countObserver = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateCount(entry.target);
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    counters.forEach((counter) => countObserver.observe(counter));

    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.heroSection}>
        <div className={styles.heroBgImage}></div>
        <div className={styles.heroOverlay}></div>

        <div className={styles.heroContent}>
          {/* Left Text */}
          <div className={`${styles.heroText}`}>
            <h1>
              <span className={styles.emphasis}>Sydney's Best</span>{' '}
              <span className={styles.gradientText}>Pest Control Service</span>
            </h1>

            {/* Trust Metrics Section */}
            <div className={styles.trustMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber} data-target="1000" data-suffix="+">
                  0
                </span>
                <span className={styles.metricLabel}>Happy Customers</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber} data-target="500" data-suffix="+">
                  0
                </span>
                <span className={styles.metricLabel}>Pest Problems Solved</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber} data-target="5" data-suffix="+">
                  0
                </span>
                <span className={styles.metricLabel}>Years Experience</span>
              </div>
              <div className={styles.metricItem}>
                <span className={styles.metricNumber} data-target="24" data-suffix="/7">
                  0
                </span>
                <span className={styles.metricLabel}>Emergency Support</span>
              </div>
            </div>

            <p className={styles.subtitle}>
              Reliable, safe, and eco-friendly pest solutions for your home or business.
            </p>

            <div className={styles.heroFeatures}>
              <p>✔ Eco-Friendly Solutions</p>
              <p>✔ Licensed & Insured Technicians</p>
              <p>✔ 24/7 Emergency Services</p>
            </div>

            <div className={styles.trustBadges}>
              <img src="/images/trust/ecofriendly.png" alt="Eco-Friendly" />
              <img src="/images/trust/satisfaction.png" alt="Satisfaction Guaranteed" />
              <img src="/images/trust/certified.png" alt="Certified Quality" />
            </div>
          </div>

          {/* Right Form */}
          <aside className={`${styles.heroForm}`}>
            <div className={styles.formHeader}>
              <h2>Request a Free Quote</h2>
              <p>Quick response & same-day inspection available</p>
            </div>
            <QuotationForm />
          </aside>
        </div>
      </section>

      <PestGallery />
      <ServicesShowcase />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
};

export default Home;
