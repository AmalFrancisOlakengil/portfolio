import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CONTACT_INFO } from '../constants';

export default function Navbar() {
    // State for managing the mobile menu's open/close status
    const [isMenuOpen, setIsMenuOpen] = useState(false); 
    
    const RESUME_PATH = '/Resume_amalfrancis (1).pdf'; 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    // Close menu when a link is clicked (good mobile UX)
    const handleLinkClick = () => {
        if (isMenuOpen) {
            setIsMenuOpen(false);
        }
    };

    return (
        <nav className="navbar">
            <div className="nav-title">{CONTACT_INFO.name}</div>
            
            {/* Mobile Menu Toggle Button: Visible only on small screens via CSS */}
            <button 
                className="menu-toggle" 
                onClick={toggleMenu} 
                aria-expanded={isMenuOpen}
            >
                {/* Simple close '×' or hamburger '≡' icon */}
                {isMenuOpen ? '×' : '≡'} 
            </button>

            {/* Nav Links: The 'open' class is conditionally applied for mobile menu visibility */}
            <div className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/about" onClick={handleLinkClick}>About</Link>
                <Link to="/projects" onClick={handleLinkClick}>Projects</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
            </div>
            
            <a 
                href={RESUME_PATH} 
                download
                className="resume-download-btn"
                aria-label="Download Resume"
            >
                Download CV
            </a>
        </nav>
    );
}