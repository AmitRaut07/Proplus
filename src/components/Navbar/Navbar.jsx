import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaPhone, FaBars, FaTimes } from "react-icons/fa";
import QuotationForm from "../QuotationForm/QuotationForm.jsx";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showQuoteModal, setShowQuoteModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Mobile detection
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pest links
  const pestLinks = [
    { to: "/blogs/general-pest-control", label: "General Pest Control" },
    { to: "/blogs/residential-pest-services", label: "Residential Pest Services" },
    { to: "/blogs/commercial-pest-control", label: "Commercial Pest Control" },
    { to: "/blogs/bird-control", label: "Bird Control" },
    { to: "/blogs/possums", label: "Possums" },
    { to: "/blogs/rodent-control", label: "Rodent Control" },
    { to: "/blogs/cockroaches-control", label: "Cockroaches Control" },
    { to: "/blogs/bed-bug", label: "Bed Bug" },
    { to: "/blogs/end-of-lease-pest-control", label: "End of Lease Pest Control" },
    { to: "/blogs/spider-control", label: "Spider" },
    { to: "/blogs/wasp-removal", label: "Wasp Removal" },
    { to: "/blogs/flea-treatment", label: "Flea Treatment" },
    { to: "/blogs/childcare-office-pest", label: "Childcare/Office Pest" },
  ];

  // Termite links
  const termiteLinks = [
    { to: "/blogs/termite-inspection", label: "Termite Inspection" },
    { to: "/blogs/termite-treatment", label: "Termite Treatment" },
    { to: "/blogs/termite-protection", label: "Termite Protection" },
    { to: "/blogs/baiting-system", label: "Baiting System" },
    { to: "/blogs/reticulation-recharge", label: "Reticulation Recharge" },
    { to: "/blogs/subfloor-ventilation", label: "Subfloor Ventilation" },
  ];

  return (
    <>
    {/*for transittion */}
    <div className={`${styles.mobileBarWrapper} ${scrolled ? styles.compact : ""}`}>
      <nav className={styles.navbar}>
        {/* Desktop / Mobile before scroll */}
        {(!scrolled || !isMobile) && (
          <div className={styles.navbarContainer}>
            <div className={styles.navLeftSection}>
              <div className={styles.navbarBrand}>
                <Link to="/" className={location.pathname === "/" ? styles.activeLink : ""}>
                  <img src="/logo.jpg" alt="Pro Plus Pest Control Logo" />
                </Link>
                <div className={styles.brandText}>
                  <h1>Pro Plus <br /> Pest Control</h1>
                  <p className={styles.slogan}>Home peace, pest cease</p>
                </div>
              </div>

              <div className={styles.navbarLinks}>
                <Link to="/" className={location.pathname === "/" ? styles.activeLink : ""}>Home</Link>

                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setActiveDropdown("pest")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={styles.dropbtn}>Pest Services</button>
                  <div className={`${styles.dropdownContent} ${activeDropdown === "pest" ? styles.active : ""}`}>
                    <div className={styles.dropdownGrid}>
                      {pestLinks.map(link => (
                        <Link key={link.to} to={link.to}>{link.label}</Link>
                      ))}
                    </div>
                  </div>
                </div>

                <div
                  className={styles.dropdown}
                  onMouseEnter={() => setActiveDropdown("termites")}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <button className={styles.dropbtn}>Termites Control</button>
                  <div className={`${styles.dropdownContent} ${activeDropdown === "termites" ? styles.active : ""}`}>
                    {termiteLinks.map(link => (
                      <Link key={link.to} to={link.to}>{link.label}</Link>
                    ))}
                  </div>
                </div>

                <Link to="/PricingFAQs" className={location.pathname === "/PricingFAQs" ? styles.activeLink : ""}>Pricing/FAQs</Link>
                <Link to="/contact" className={location.pathname === "/contact" ? styles.activeLink : ""}>Contact</Link>
              </div>
            </div>

            {/* Right section */}
            <div className={styles.navRightSection}>
              <div className={`${styles.navbarActions} ${styles.desktopOnly}`}>
                <a href="tel:0416210288" className={styles.ctaCall}><FaPhone /> Call 0416 210 288</a>
                <button className={styles.ctaQuote} onClick={() => setShowQuoteModal(true)}>Get Quotation</button>
              </div>

              <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          </div>
        )}

        {/* Mobile: Only one row after scroll */}
        {isMobile && (
          !scrolled ? (
            <div className={styles.mobileHeaderRows}>
              <div className={styles.mobileTopRow}>
                <div className={styles.navbarBrand}>
                  <Link to="/" className={location.pathname === "/" ? styles.activeLink : ""}>
                    <img src="/logo.jpg" alt="Logo" />
                  </Link>
                </div>
                <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                  {isOpen ? <FaTimes /> : <FaBars />}
                </div>
              </div>
              <div className={styles.mobileRowBtn}>
                <a href="tel:0416210288" className={styles.ctaCall}><FaPhone /> Call 0416 210 288</a>
              </div>
              <div className={styles.mobileRowBtn}>
                <button className={styles.ctaQuote} onClick={() => setShowQuoteModal(true)}>Get Quotation</button>
              </div>
            </div>
          ) : (
            <div className={`${styles.compactMobileBar} ${styles.showCompact}`}>
              <a href="tel:0416210288" className={styles.ctaCall}><FaPhone /> Call 0416 210 288</a>
              <button className={styles.ctaQuote} onClick={() => setShowQuoteModal(true)}>Get Quotation</button>
              <div className={styles.mobileMenuBtn} onClick={toggleMenu}>
                {isOpen ? <FaTimes /> : <FaBars />}
              </div>
            </div>
          )
        )}

        {/* Mobile Menu */}
        <div className={`${styles.mobileMenu} ${isOpen ? styles.active : ""}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>

          <div className={styles.mobileDropdown}>
            <button
              className={styles.mobileDropbtn}
              onClick={() => setActiveDropdown(activeDropdown === "pest-mobile" ? null : "pest-mobile")}
            >
              Pest Services ▼
            </button>
            <div className={`${styles.mobileDropdownContent} ${activeDropdown === "pest-mobile" ? styles.active : ""}`}>
              {pestLinks.map(link => (
                <Link key={link.to} to={link.to} onClick={toggleMenu}>{link.label}</Link>
              ))}
            </div>
          </div>

          <div className={styles.mobileDropdown}>
            <button
              className={styles.mobileDropbtn}
              onClick={() => setActiveDropdown(activeDropdown === "termites-mobile" ? null : "termites-mobile")}
            >
              Termites Control ▼
            </button>
            <div className={`${styles.mobileDropdownContent} ${activeDropdown === "termites-mobile" ? styles.active : ""}`}>
              {termiteLinks.map(link => (
                <Link key={link.to} to={link.to} onClick={toggleMenu}>{link.label}</Link>
              ))}
            </div>
          </div>

          <Link to="/PricingFAQs" onClick={toggleMenu}>Pricing/FAQs</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>
      </nav>
      {/* {transition ends here} */}
         </div>    
      {/* Quotation Modal */}
      {showQuoteModal && (
        <div className={styles.modalOverlay} onClick={() => setShowQuoteModal(false)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button className={styles.modalCloseBtn} onClick={() => setShowQuoteModal(false)}>&times;</button>
            <h2 className={styles.modalTitle}>Request a Free Quotation</h2>
            <p className={styles.modalSubtitle}>Fill the form below and our experts will contact you shortly.</p>
            <QuotationForm />
          </div>
        </div>
      )}
    </>
  );
}
