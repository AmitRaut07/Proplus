import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './ContactFooter.css';

const ContactFooter = () => {
  const scrollToService = (serviceName) => {
    const element = document.getElementById(serviceName.replace(/\s+/g, '-').toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
const serviceAreas = [
    { name: "Sydney CBD", slug: "pest-control-sydney-cbd" },
    { name: "Eastern Suburbs", slug: "pest-control-eastern-suburbs" },
    { name: "Northern Beaches", slug: "pest-control-northern-beaches" },
    { name: "Inner West", slug: "pest-control-inner-west" },
    { name: "North Shore", slug: "pest-control-north-shore" },
    { name: "Western Sydney", slug: "pest-control-western-sydney" },
    { name: "South Sydney", slug: "pest-control-south-sydney" },
    { name: "Hills District", slug: "pest-control-hills-district" },
    // New individual suburbs
    { name: "Parramatta", slug: "pest-control-parramatta" },
    { name: "Kellyville", slug: "pest-control-kellyville" },
    { name: "Castle Hill", slug: "pest-control-castle-hill" },
    { name: "Baulkham Hills", slug: "pest-control-baulkham-hills" },
    { name: "Dural", slug: "pest-control-dural" },
    { name: "Hornsby", slug: "pest-control-hornsby" },
    { name: "Epping", slug: "pest-control-epping" },
    { name: "Macquarie Park", slug: "pest-control-macquarie-park" },
    { name: "Chatswood", slug: "pest-control-chatswood" },
    { name: "Wahroonga", slug: "pest-control-wahroonga" },
    { name: "Berowra", slug: "pest-control-berowra" },
    { name: "Strathfield", slug: "pest-control-strathfield" },
    { name: "Newtown", slug: "pest-control-newtown" },
    { name: "North Sydney", slug: "pest-control-north-sydney" },
    { name: "Randwick", slug: "pest-control-randwick" },
    { name: "Bondi Junction", slug: "pest-control-bondi-junction" },
    { name: "The Rocks", slug: "pest-control-the-rocks" },
    { name: "Marrickville", slug: "pest-control-marrickville" },
    { name: "Miranda", slug: "pest-control-miranda" },
    { name: "Cronulla", slug: "pest-control-cronulla" },
    { name: "Sutherland", slug: "pest-control-sutherland" },
    { name: "Burwood", slug: "pest-control-burwood" },
    { name: "Manly", slug: "pest-control-manly" },
    { name: "Brookvale", slug: "pest-control-brookvale" },
    { name: "Milsons Point", slug: "pest-control-milsons-point" },
    { name: "Crows Nest", slug: "pest-control-crows-nest" },
    { name: "Leichhardt", slug: "pest-control-leichhardt" },
    { name: "Surry Hills", slug: "pest-control-surry-hills" },
    { name: "Sydney", slug: "pest-control-sydney" },
    { name: "Darlinghurst", slug: "pest-control-darlinghurst" },
    { name: "Potts Point", slug: "pest-control-potts-point" },
    { name: "Redfern", slug: "pest-control-redfern" },
    { name: "Annandale", slug: "pest-control-annandale" },
    { name: "Merrylands", slug: "pest-control-merrylands" },
    { name: "Northmead", slug: "pest-control-northmead" },
    { name: "Rydalmere", slug: "pest-control-rydalmere" },
    { name: "Seven Hills", slug: "pest-control-seven-hills" },
    { name: "Blacktown", slug: "pest-control-blacktown" },
    { name: "Bella Vista", slug: "pest-control-bella-vista" },
    { name: "Beaumont Hills", slug: "pest-control-beaumont-hills" },
    { name: "Campbelltown", slug: "pest-control-campbelltown" },
    { name: "Werrington", slug: "pest-control-werrington" },
    { name: "Ingleburn", slug: "pest-control-ingleburn" },
    { name: "Liverpool", slug: "pest-control-liverpool" },
    { name: "Eastwood", slug: "pest-control-eastwood" },
    { name: "Rouse Hill", slug: "pest-control-rouse-hill" },
    { name: "Harris Park", slug: "pest-control-harris-park" },
    { name: "North Parramatta", slug: "pest-control-north-parramatta" },
    { name: "Wentworthville", slug: "pest-control-wentworthville" },
    { name: "Greystanes", slug: "pest-control-greystanes" },
    { name: "Pennant Hills", slug: "pest-control-pennant-hills" },
    { name: "Thornleigh", slug: "pest-control-thornleigh" },
    { name: "Turramurra", slug: "pest-control-turramurra" },
    { name: "Pymble", slug: "pest-control-pymble" },
    { name: "Ryde", slug: "pest-control-ryde" }
];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h3 className="footer-heading">Quick Links</h3>
          <ul className="footer-links">
            <li><a href="/">Home</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/blogs">Blog</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Our Services</h3>
          <ul className="footer-links">
            <li><button onClick={() => scrollToService("General Pest Control")}>General Pest Control</button></li>
            <li><button onClick={() => scrollToService("Residential Pest Services")}>Residential Services</button></li>
            <li><button onClick={() => scrollToService("Commercial Pest Control")}>Commercial Services</button></li>
            <li><button onClick={() => scrollToService("Rodent Control")}>Rodent Control</button></li>
            <li><button onClick={() => scrollToService("Cockroaches Control")}>Cockroach Control</button></li>
            <li><button onClick={() => scrollToService("Bed Bug")}>Bed Bug Treatment</button></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Contact Us</h3>
          <div className="contact-info">
            <div className="contact-item">
              <FaPhone className="contact-icon" />
              <span>0416 210 288</span>
            </div>
            <div className="contact-item">
              <FaMapMarkerAlt className="contact-icon" />
              <span>88 marsden street Parramatta ,2150 , NSW, Australia</span>
            </div>
            <div className="contact-item">
              <FaEnvelope className="contact-icon" />
              <span>info@propluspest.com.au</span>
            </div>
          </div>
        </div>

        <div className="footer-section">
          <h3 className="footer-heading">Follow Us</h3>
          <div className="social-links">
            <a href="https://facebook.com/propluspestcontrol" aria-label="Facebook"><FaFacebook /></a>
            <a href="https://instagram.com/propluspestcontrol" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://linkedin.com/company/propluspestcontrol" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
          <div className="emergency-contact">
            <h4>24/7 Emergency Service</h4>
            <p>Available for urgent pest infestations</p>
            <a href="tel:0416210288" className="emergency-btn">
              <FaPhone /> Call Now 0416 210 288
            </a>
          </div>
        </div>
      </div>

      <div className="service-areas">
        <div className="areas-container">
          <h3>Areas We Serve in Sydney</h3>
          <div className="areas-grid">
            {serviceAreas.map((area, index) => (
              <a 
                key={index} 
                href={`/blogs/${area.slug}`} 
                className="area-link"
                aria-label={`Pest control services in ${area.name}`}
              >
                {area.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Pro Plus Pest Control. All Rights Reserved.</p>
        <div className="legal-links">
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
          <a href="/licenses">Licenses</a>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;