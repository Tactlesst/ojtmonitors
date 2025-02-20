import { useState, useEffect } from 'react';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling 300px
  const checkScroll = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => {
      window.removeEventListener('scroll', checkScroll);
    };
  }, []);

  // Scroll back to top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      style={{
        ...buttonStyles,
        display: isVisible ? 'block' : 'none', // Show or hide the button
      }}
    >
      ↑
    </button>
  );
};

const buttonStyles = {
  position: 'fixed',
  bottom: '20px',
  right: '20px',
  backgroundColor: '#007bff',
  color: 'white',
  padding: '10px 15px',
  fontSize: '16px',
  border: 'none',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease',
};

export default BackToTop;
