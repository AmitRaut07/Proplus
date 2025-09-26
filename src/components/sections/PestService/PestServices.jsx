import React from 'react';
import './PestServices.css'; 
const PestServices = () => {
  const services = [
    { 
      name: "General Pest Control", 
      image: "/images/generalpestcontrol.jpg",
      alt: "Various household pests",
      blogSlug: "general-pest-control"
    },
    { 
      name: "Residential Pest Services", 
      image: "/images/rsidentialpest.jpg",
      alt: "House with pest control treatment",
      blogSlug: "residential-pest-services"
    },
    { 
      name: "Commercial Pest Control", 
      image: "/images/pests/commercial.jpg",
      alt: "Office building pest control",
      blogSlug: "commercial-pest-control"
    },
    { 
      name: "Bird Control", 
      image: "/images/pests/birdcontrol.jpg",
      alt: "Pigeons on building ledge",
      blogSlug: "bird-control"
    },
    { 
      name: "Possums", 
      image: "/images/pests/possums.jpeg",
      alt: "Possum in roof space",
      blogSlug: "possum-removal"
    },
    { 
      name: "Rodent Control", 
      image: "/images/pests/rodent.jpg",
      alt: "Rat in home environment",
      blogSlug: "rodent-control"
    },
    { 
      name: "Cockroaches Control", 
      image: "/images/pests/cockroach.jpg",
      alt: "Cockroach infestation",
      blogSlug: "cockroach-control"
    },
    { 
      name: "Bed Bug", 
      image: "/images/pests/bedbug.jpg",
      alt: "Bed bugs on mattress",
      blogSlug: "bed-bug-treatment"
    },
    { 
      name: "End of Lease Pest Control", 
      image: "/images/endoflease.jpg",
      alt: "Clean apartment for inspection",
      blogSlug: "end-of-lease-pest-control"
    },
    { 
      name: "Spider", 
      image: "/images/pests/spider.jpg",
      alt: "Dangerous spider",
      blogSlug: "spider-control"
    },
    { 
      name: "Wasp Removal", 
      image: "/images/pests/wasps.jpg",
      alt: "Wasp nest removal",
      blogSlug: "wasp-removal"
    },
    { 
      name: "Flea Treatment", 
      image: "/images/pests/fleas.jpg",
      alt: "Flea infestation",
      blogSlug: "flea-treatment"
    },
    { 
      name: "Childcare/Office Pest", 
      image: "/images/childcare.jpg",
      alt: "Childcare center pest control",
      blogSlug: "childcare-office-pest-control"
    }
  ];

  return (
    <section className="pest-services-section" id="services">
      <div className="services-header">
        <h2>Our Pest Services</h2>
        <p>Comprehensive pest management solutions for residential and commercial properties</p>
      </div>
      
      <div className="services-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
  <div className="service-image-container">
    <img 
      src={service.image} 
      alt={service.alt}
      className="service-photo"
      loading="lazy"
    />
    <div className="image-overlay"></div>
  </div>
  <div className="service-content">
    <h3>{service.name}</h3>
    <a 
      href={`/blog/${service.blogSlug}`} 
      className="service-btn"
    >
      Learn More
    </a>
  </div>
</div>
        ))}
      </div>
      
      <div className="service-cta">
        <p>Can't find your specific pest problem? We handle all pest types!</p>
        <button className="cta-btn">Get Free Inspection</button>
      </div>
    </section>
  );
};

export default PestServices;