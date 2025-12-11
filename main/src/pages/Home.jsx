import React from 'react';
import { motion } from 'framer-motion';
import { CONTACT_INFO, SUMMARY, SKILLS } from '../constants';

export default function Home() {
  return (
    <div className="page home-page">
      <motion.h1
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Hi, I'm {CONTACT_INFO.name}.
      </motion.h1>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Data Scientist & Backend Developer
      </motion.h2>

      <motion.p
        className="summary-text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        {SUMMARY}
      </motion.p>
        <h3>Core Skills</h3>
      <motion.div 
        className="skills-grid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
      >
        
        {SKILLS.map((skill, index) => (
          <motion.span 
            key={skill} 
            className="skill-tag"
            whileHover={{ scale: 1.1, backgroundColor: '#007bff', color: 'white' }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {skill}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
}