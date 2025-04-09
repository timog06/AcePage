import { useEffect, useState, useRef, useMemo, useCallback } from 'react';
import { handleError } from '../utils/errorHandler';

const AnimatedCursor = ({ disabled = false }) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const cursorRef = useRef(null);
  const laserContainerRef = useRef(null);
  
  // Use CSS variables instead of inline styles
  useEffect(() => {
    if (disabled) return;
    
    // Update CSS variables
    document.documentElement.style.setProperty('--cursor-x', `${position.x}px`);
    document.documentElement.style.setProperty('--cursor-y', `${position.y}px`);
    document.documentElement.style.setProperty('--cursor-opacity', visible ? '1' : '0');
  }, [position.x, position.y, visible, disabled]);

  // Use callback for event handlers to prevent recreation on each render
  const updatePosition = useCallback((e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    if (!visible) setVisible(true);
  }, [visible]);

  const handleMouseLeave = useCallback(() => {
    setVisible(false);
  }, []);

  const handleMouseEnter = useCallback(() => {
    setVisible(true);
  }, []);

  const handleClick = useCallback((e) => {
    // Create a laser element using CSS classes instead of state
    if (laserContainerRef.current) {
      const laser = document.createElement('div');
      laser.className = 'laser-beam';
      laser.style.left = `${e.clientX}px`;
      laser.style.top = `${e.clientY - 3.75}px`; // Adjust for cannon position
      laser.style.transformOrigin = 'top center';
      
      // Add to DOM
      laserContainerRef.current.appendChild(laser);
      
      // Remove after animation completes
      setTimeout(() => {
        if (laserContainerRef.current && laserContainerRef.current.contains(laser)) {
          laserContainerRef.current.removeChild(laser);
        }
      }, 300);
    }
  }, []);

  useEffect(() => {
    if (disabled) return;
    
    // Preload cursor image with proper loading state
    const img = new Image();
    
    img.onload = () => {
      // Adjust cursor size based on loaded image if needed
      if (img.width > 0 && img.height > 0) {
        const size = Math.max(32, Math.min(img.width, 64));
        document.documentElement.style.setProperty('--cursor-size', `${size}px`);
      }
    };
    
    img.onerror = (err) => {
      handleError(err, 'cursor image loading', false);
      // Fallback to default cursor on error
      document.documentElement.style.setProperty('--cursor-opacity', '0');
      document.body.style.cursor = 'default';
    };
    
    img.src = '/AcePage/cursor.png';

    // Event listeners
    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('click', handleClick);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('click', handleClick);
    };
  }, [disabled, updatePosition, handleMouseLeave, handleMouseEnter, handleClick]);

  if (disabled) return null;

  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor"
      />
      <div ref={laserContainerRef} className="laser-container" />
    </>
  );
};

export default AnimatedCursor;
