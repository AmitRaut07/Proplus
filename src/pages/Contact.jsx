import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import QuotationForm from '../components/QuotationForm/QuotationForm';
import styles from './ContactPage.module.css';

const ContactPage = () => {
  return (
    <section className={styles.contactPage}>

      {/* Hero Section */}
      <div className={styles.heroSection}>
        <div className={styles.heroOverlay}></div>
        <div className={styles.heroContent}>
          
          {/* Left: Contact Info */}
          <div className={styles.contactInfo}>
            <h1>Protect Your Property Today</h1>
            <p>We provide eco-friendly, reliable, and professional pest control services across Sydney. Reach out and get a free quotation now.</p>
            
            <div className={styles.highlights}>
              <div className={styles.highlightItem}>
                <FaPhone className={styles.icon} />
                <div>
                  <h4>24/7 Emergency</h4>
                  <a href="tel:+610410288">+61 0410 288</a>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <FaClock className={styles.icon} />
                <div>
                  <h4>Business Hours</h4>
                  <p>Mon-Fri: 7:30 AM - 5:00 PM</p>
                  <p>Sat: 8:00 AM - 2:00 PM</p>
                </div>
              </div>

              <div className={styles.highlightItem}>
                <FaMapMarkerAlt className={styles.icon} />
                <div>
                  <h4>All Sydney Areas</h4>
                  <p>NSW Licensed #123456</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Quotation Form */}
          <div className={styles.formContainer}>
            <QuotationForm />
          </div>
        </div>
      </div>

      {/* Map Section with heading */}
      <div className={styles.mapSectionWrapper}>
        <h2>Visit or Locate Us</h2>
        <p>Our licensed pest control experts are ready to help you across Sydney. Find our office or get directions below.</p>

        <div className={styles.mapContainer}>
          <iframe
            title="Pro Plus Pest Control Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3314.7073581901354!2d150.99648877461868!3d-33.81986431652409!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a3782f36cb41%3A0xc1455f6dee816134!2sPro%20Plus%20Termite%20%26%20Pest%20Control!5e0!3m2!1sen!2snp!4v1755140736300!5m2!1sen!2snp"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      {/* Connect Section */}
      <div className={styles.connectSection}>
        <div className={styles.connectContent}>
          <h2>Let's Connect</h2>
          <p>Have questions about pest control? Reach out to us for expert advice and fast service.</p>
          
          <div className={styles.contactMethods}>
            <div className={styles.method}>
              <FaPhone className={styles.methodIcon} />
              <div>
                <h4>Call Us</h4>
                <a href="tel:+610410288">+61 0416 210 288</a>
                <p>Emergency service available</p>
              </div>
            </div>

            <div className={styles.method}>
              <FaEnvelope className={styles.methodIcon} />
              <div>
                <h4>Email Us</h4>
                <a href="mailto:info@propluspest.com.au">info@propluspest.com.au</a>
                <p>Response within 24 hours</p>
              </div>
            </div>

            <div className={styles.method}>
              <FaFacebook className={styles.methodIcon} />
              <div>
                <h4>Follow Us</h4>
                <div className={styles.socialLinks}>
                  <a href="https://facebook.com"><FaFacebook /></a>
                  <a href="https://instagram.com"><FaInstagram /></a>
                  <a href="https://linkedin.com"><FaLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ContactPage;
