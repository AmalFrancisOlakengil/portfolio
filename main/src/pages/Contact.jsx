import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO } from '../constants';

export default function Contact() {
  const contactLinks = [
    { label: "Email", value: CONTACT_INFO.email, href: `mailto:${CONTACT_INFO.email}` },
    { label: "Phone", value: CONTACT_INFO.phone, href: `tel:${CONTACT_INFO.phone}` },
    { label: "GitHub", value: 'AmalFrancisOlakengil', href: CONTACT_INFO.github },
    { label: "LinkedIn", value: 'amalfrancisolakengil', href: CONTACT_INFO.linkedin },
  ];
  
  // Define which labels should NOT be rendered as a clickable <a> tag
  const nonClickableLabels = ["Email", "Phone"];

  return (
    <div className="page contact-page">
      <motion.h1
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Get in Touch
      </motion.h1>

      <div className="contact-grid">
        {contactLinks.map((item, index) => (
          <motion.div
            key={index}
            className="card contact-item"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)' }}
          >
            <h3>{item.label}</h3>
            
            {/* Conditional Rendering: Check if the label is in the nonClickableLabels array */}
            {nonClickableLabels.includes(item.label) ? (
              // Render as a non-clickable span
              <span className="contact-value">
                {item.value}
              </span>
            ) : (
              // Render as a clickable link
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.value}
              </a>
            )}
          </motion.div>
        ))}
      </div>
      
      <motion.p
        className="contact-location"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        Based in {CONTACT_INFO.location}
      </motion.p>
    </div>
  );
}