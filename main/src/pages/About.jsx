import React from 'react';
import { motion } from 'framer-motion';
import { WORK_EXPERIENCE, EDUCATION, CERTIFICATIONS } from '../constants';

export default function About() {
  return (
    <div className="page about-page">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        About Me & Experience
      </motion.h1>

      <section>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            WORK EXPERIENCE
        </motion.h2>
        {WORK_EXPERIENCE.map((job, index) => (
          <motion.div 
            key={index} 
            className="card job-entry"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
          >
            <h3>{job.title}</h3>
            <p className="duration">{job.duration}</p>
            <ul>
              {job.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
          </motion.div>
        ))}
      </section>

      <section>
        <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
            EDUCATION & CERTIFICATIONS
        </motion.h2>
        {EDUCATION.map((edu, index) => (
          <motion.div 
            key={index} 
            className="card edu-entry"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
          >
            <h3>{edu.institution} - {edu.degree}</h3>
            <p className="duration">{edu.duration}{edu.gpa && ` | GPA: ${edu.gpa}`}</p>
          </motion.div>
        ))}
        <motion.div 
            className="certifications-list"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
        >
            <h4>Certifications:</h4>
            <ul>
                {CERTIFICATIONS.map((cert, index) => (
                    <li key={index}>{cert.name}({cert.issuer})</li>
                ))}
            </ul>
        </motion.div>
      </section>
    </div>
  );
}