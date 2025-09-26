import React from 'react';
import styles from './PestGallery.module.css';

const PestGallery = () => {
  const pestServices = [
    { name: 'Residential Pest', slug: 'residential-pest-services', image: '/images/residential.jpg' },
    { name: 'Commercial Pest', slug: 'commercial-pest-control', image: '/images/commercial.jpg' },
    { name: 'Rodent Control', slug: 'rodent-control', image: '/images/pests/rodent.jpg' },
    { name: 'Cockroaches', slug: 'cockroach-control', image: '/images/pests/cockroach.jpg' },
    { name: 'Bed Bug', slug: 'bed-bug-treatment', image: '/images/pests/bedbug.jpg' },
    { name: 'Spider Control', slug: 'spider-control', image: '/images/pests/spider.jpg' },
    { name: 'Wasp Removal', slug: 'wasp-removal', image: '/images/pests/wasps.jpg' },
    { name: 'Flea Treatment', slug: 'flea-treatment', image: '/images/pests/fleas.jpg' },
  ];

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Our Pest Solutions</h2>
      <div className={styles.gallery}>
        {pestServices.map((service, index) => (
          <a 
            href={`/blogs/${service.slug}`} 
            className={styles.card} 
            key={index}
            aria-label={`Learn more about ${service.name}`}
          >
            <div className={styles.imageWrapper}>
              <img 
                src={service.image} 
                alt={service.name} 
                className={styles.image}
                loading="lazy"
              />
              <div className={styles.overlay}></div>
            </div>
            <h3 className={styles.name}>{service.name}</h3>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PestGallery;
