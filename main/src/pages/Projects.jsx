import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

export default function Projects() {
  return (
    <div className="page projects-page">
      <motion.h1
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        My Portfolio Projects
      </motion.h1>

      <div className="projects-grid">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={index} 
            className="card project-card"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.1 + index * 0.15 }}
            whileHover={{ scale: 1.05, boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)' }}
          >
            <h2>{project.name}</h2>
            <p className="tech-stack">{project.tech}</p>
            <p className="duration">{project.duration}</p>
            <ul>
              {project.details.map((detail, i) => <li key={i}>{detail}</li>)}
            </ul>
            <a href={project.link} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                View Project (Link)
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
}