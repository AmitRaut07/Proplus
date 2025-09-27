import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import styles from "./QuotationForm.module.css";

const QuotationForm = () => {
  const [service, setService] = useState("");
  const [otherService, setOtherService] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dletz49",
        "template_lsoh3pb",
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setIsSubmitted(true);
        form.current.reset();
        setService("");
        setOtherService("");
      })
      .catch((error) => {
        alert("Failed to send ❌ " + error.text);
      });
  };

  return (
    <div className={styles.formContainer}>
      {isSubmitted ? (
        <div className={styles.thankYou}>
          <h2>🎉 Thank You!</h2>
          <p>Your request has been received. Our team will contact you shortly.</p>
          <button
            className={styles.submitAnother}
            onClick={() => setIsSubmitted(false)}
          >
            Submit Another Request
          </button>
        </div>
      ) : (
        <>
          <div className={styles.formHeader}>
            <h2>Get Your Free Quote</h2>
            <p>Fast, reliable pest control solutions in Sydney</p>
          </div>

          <form ref={form} onSubmit={sendEmail}>
            {/* Name */}
            <div className={styles.formGroup}>
              <input type="text" id="name" name="name" required placeholder=" " />
              <label htmlFor="name">Full Name</label>
            </div>

            {/* Phone */}
            <div className={styles.formGroup}>
              <input type="tel" id="phone" name="phone" required placeholder=" " />
              <label htmlFor="phone">Phone Number</label>
            </div>

            {/* Email */}
            <div className={styles.formGroup}>
              <input type="email" id="email" name="email" required placeholder=" " />
              <label htmlFor="email">Email Address</label>
            </div>
            {/* Address */}
            <div className={styles.formGroup}>
              <input type="text" id="address" name="address" required placeholder=" " />
              <label htmlFor="name">Address/Suburb</label>
            </div>
            {/* Service Needed */}
            <div className={styles.formGroup}>
              <select
                id="service"
                name="service"
                required
                value={service}
                onChange={(e) => setService(e.target.value)}
              >
                <option value="" disabled>
                  Select a Service
                </option>
                <option>General Pest Control</option>
                <option>Termite Inspection</option>
                <option>Rodent Control</option>
                <option>Bed Bug Treatment</option>
                <option>Ant Control</option>
                <option>Cockroach Treatment</option>
                <option>Spider Control</option>
                <option>Wasp & Bee Removal</option>
                <option>Bird Control</option>
                <option>Commercial Pest Control</option>
                <option value="other">Other</option>
              </select>
              <label htmlFor="service">Service Needed</label>
            </div>

            {/* Other Service - always hidden input for EmailJS */}
            <input type="hidden" name="otherService" value={otherService} />

            {/* Visible input only when "Other" is selected */}
            {service === "other" && (
              <div className={styles.formGroup}>
                <input
                  type="text"
                  id="otherServiceVisible"
                  placeholder=" "
                  value={otherService}
                  onChange={(e) => setOtherService(e.target.value)}
                />
                <label htmlFor="otherServiceVisible">Please describe service</label>
              </div>
            )}

            {/* Message */}
            <div className={styles.formGroup}>
              <textarea id="message" name="message" rows="3" placeholder=" "></textarea>
              <label htmlFor="message">Additional Details</label>
            </div>

            {/* Submit */}
            <button type="submit" className={styles.submitBtn}>
              Get Free Quote
            </button>
          </form>
        </>
      )}
    </div>
  );
};

export default QuotationForm;
