import { FaSearch, FaShieldAlt, FaWater } from 'react-icons/fa';
import { GiWoodPile } from 'react-icons/gi';
import './TermiteControl.css';
const TermiteControl = () => {
  const services = [
    { 
      name: "Termite Inspection", 
      icon: <FaSearch className="termite-icon" />,
      desc: "Thorough property assessment using advanced detection technology"
    },
    { 
      name: "Termite Treatment", 
      icon: <GiWoodPile className="termite-icon" />,
      desc: "Effective elimination of active termite colonies"
    },
    { 
      name: "Termite Protection", 
      icon: <FaShieldAlt className="termite-icon" />,
      desc: "Preventative barriers to safeguard your property"
    },
    { 
      name: "Baiting System", 
      icon: <FaWater className="termite-icon" />,
      desc: "Environmentally friendly monitoring and elimination"
    },
    { 
      name: "Reticulation Recharge", 
      icon: <FaWater className="termite-icon" />,
      desc: "Replenishment of termiticide in existing systems"
    }
  ];

  return (
    <section className="termite-section">
      <div className="section-header">
        <h2>Termite Control Solutions</h2>
        <p>Specialized protection against Australia's most destructive pests</p>
      </div>
      
      <div className="termite-grid">
        {services.map((service, index) => (
          <div className="termite-card" key={index}>
            <div className="termite-icon-container">
              {service.icon}
            </div>
            <h3>{service.name}</h3>
            <p>{service.desc}</p>
            <button className="termite-btn">
              Service Details
            </button>
          </div>
        ))}
      </div>
      
      <div className="termite-cta">
        <div className="warning-banner">
          <span>⚠️ Warning:</span> Termites cause $1.5B in damage annually in Australia
        </div>
        <button className="cta-btn">
          Request Termite Inspection
        </button>
      </div>
    </section>
  );
};

export default TermiteControl;