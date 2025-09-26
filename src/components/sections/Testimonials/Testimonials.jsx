import React, { useState, useEffect } from "react";
import { FaQuoteLeft, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./Testimonials.module.css";

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      name: "Sarah K.",
      rating: 5,
      review:
        "Absolutely fantastic service! The technician was punctual, professional, and solved our ant problem in one visit. Will definitely use them again.",
      date: "2 weeks ago",
      source: "Google",
    },
    {
      name: "Michael T.",
      rating: 5,
      review:
        "Best pest control in Sydney. They identified our termite issue quickly and provided a comprehensive treatment plan. Very thorough!",
      date: "1 month ago",
      source: "Google",
    },
    {
      name: "Lisa & James P.",
      rating: 5,
      review:
        "Good service for our rental property. The spider treatment worked well, though it took a couple days to see full results.",
      date: "3 months ago",
      source: "Google",
    },
    {
      name: "David R.",
      rating: 5,
      review:
        "Emergency service saved us when we found rats in our roof. Responded same day and problem was completely resolved. Worth every penny!",
      date: "2 months ago",
      source: "Google",
    },
    {
      name: "Emma W.",
      rating: 5,
      review:
        "Highly recommend! Quick, professional, and the team is very friendly. They handled our termite issue efficiently.",
      date: "1 week ago",
      source: "Google",
    },
    {
      name: "James L.",
      rating: 5,
      review:
        "Good value for money. Pest control team was knowledgeable and explained the process thoroughly.",
      date: "3 weeks ago",
      source: "Google",
    },
    {
      name: "Olivia M.",
      rating: 5,
      review:
        "Very satisfied with the service. The home sanitization made our environment so much cleaner and safe.",
      date: "2 months ago",
      source: "Google",
    },
  ];

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const getInitials = (name) =>
    name
      .split(" ")
      .map((part) => part[0])
      .join("")
      .toUpperCase();

  const renderStars = (rating) =>
    [1, 2, 3, 4, 5].map((star) => (
      <FaStar
        key={star}
        className={star <= rating ? styles.starFilled : styles.star}
      />
    ));

  const calculateAverageRating = () => {
    const sum = testimonials.reduce((acc, curr) => acc + curr.rating, 0);
    return (sum / testimonials.length).toFixed(1);
  };

  // Number of visible cards on desktop
  const visibleCards = 3;

  // Get indices of currently visible cards
  const getVisibleTestimonials = () => {
    const visible = [];
    for (let i = 0; i < visibleCards; i++) {
      visible.push(testimonials[(currentIndex + i) % testimonials.length]);
    }
    return visible;
  };

  return (
    <section
      className={styles.testimonialsSection}
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      <div className={styles.headingContainer}>
        <h2 className={styles.headingText}>
          Rated {calculateAverageRating()} <FaStar className={styles.headingStar} />
        </h2>
        <p className={styles.subtitle}>
          Don’t just take our word for it — see what our customers say
        </p>
      </div>

      <div className={styles.testimonialsSlider}>
        <button className={styles.navButton} onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>

        <div className={styles.testimonialWrapper}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              className={styles.testimonialsRow}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              {getVisibleTestimonials().map((testimonial, idx) => (
                <div key={idx} className={styles.testimonialCard}>
                  <FaQuoteLeft className={styles.quoteIcon} />
                  <div className={styles.reviewContent}>
                    <div className={styles.reviewHeader}>
                      <div className={styles.reviewerInfo}>
                        <div className={styles.reviewerAvatar}>
                          {getInitials(testimonial.name)}
                        </div>
                        <div className={styles.reviewerDetails}>
                          <span className={styles.reviewerName}>{testimonial.name}</span>
                          <span className={styles.reviewDate}>{testimonial.date}</span>
                        </div>
                      </div>
                      <div className={styles.stars}>
                        {renderStars(testimonial.rating)}
                        <span className={styles.ratingSource}>{testimonial.source}</span>
                      </div>
                    </div>
                    <p className={styles.reviewText}>{testimonial.review}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        <button className={styles.navButton} onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>

      <div className={styles.dotsContainer}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`${styles.dot} ${
              index === currentIndex ? styles.dotActive : ""
            }`}
            onClick={() => {
              setCurrentIndex(index);
              setIsAutoPlaying(false);
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
