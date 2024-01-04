import React, { useState, useEffect } from 'react';

function BackToTopButton() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsVisible(window.scrollY > 50); // Show button when scrolled down more than 200px
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth', // Smooth scrolling animation
        });
    };

    return (
        <button className="back-to-top" onClick={handleClick} style={{ display: isVisible ? 'block' : 'none' }}>
            <i className="fa-solid fa-arrow-up"></i>
        </button>
    );
}

export default BackToTopButton;
