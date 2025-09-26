import { FaShieldAlt, FaMapMarkerAlt, FaBug, FaHome, FaSpider, FaLeaf, FaSkullCrossbones, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import styles from './ServicesShowcase.module.css';

const services = [
  { icon: <FaBug />, title: "Pest Control", description: "Eco-friendly and effective treatments tailored for your home." },
  { icon: <FaShieldAlt />, title: "Termite Protection", description: "Comprehensive termite inspection and prevention solutions." },
  { icon: <FaSpider />, title: "Spider Treatment", description: "Targeted solutions to remove spiders and ensure comfort." },
  { icon: <FaHome />, title: "Home Sanitization", description: "Disinfect and sanitize your home for a healthier environment." },
  { icon: <FaLeaf />, title: "Eco Solutions", description: "Safe and organic solutions for pest prevention." },
  { icon: <FaSkullCrossbones />, title: "Rodent Control", description: "Effective rodent management with minimal disruption." },
  { icon: <FaBug />, title: "Cockroach Control", description: "Eliminate cockroaches quickly with safe methods." },
];

const ServicesShowcase = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.container}>

        {/* Intro Section */}
        <div className={styles.intro}>
          <h2 className={styles.title}>Our Services</h2>
          <p className={styles.subtitle}>
            At <strong>Pro Plus Termite & Pest Control</strong>, we deliver safe, reliable, and affordable pest control services that protect your home and business.  
          </p>

          <div className={styles.highlight}>
            <FaMapMarkerAlt className={styles.highlightIcon} />
            <p>
              Proudly servicing <strong>Sydney</strong> with guaranteed results & competitive pricing.
            </p>
          </div>

          <p className={styles.ctaText}>
            Book with us today — and say goodbye to pests for good.
          </p>
        </div>

        {/* Services Scrolling Grid */}
        <div className={styles.slider}>
          <div className={styles.sliderTrack}>
            {services.map((service, index) => (
              <div className={styles.card} key={index}>
                <div className={styles.icon}>{service.icon}</div>
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Single CTA Button after slider */}
        <div className={styles.sliderCTA}>
          <Link to="/contact" className={styles.btn}>
            <FaCalendarAlt /> Book Now
          </Link>
        </div>

      </div>
    </section>
  );
};

export default ServicesShowcase;
