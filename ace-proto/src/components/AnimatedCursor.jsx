import { useEffect, useState, useRef } from 'react';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const [lasers, setLasers] = useState([]);
  const cursorRef = useRef(null);

  useEffect(() => {
    const img = new Image();
    img.src = '/AcePage/cursor.png';
  
    
    img.onerror = (err) => {
      console.error('Cursor image error:', err);
    };

    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };

    const handleMouseLeave = () => {
      setVisible(false);
    };

    const handleMouseEnter = () => {
      setVisible(true);
    };

    const handleClick = (e) => {
      const newLaser = {
        id: Date.now(),
        x: e.clientX,
        y: e.clientY
      };

      setLasers(prev => [...prev, newLaser]);

      setTimeout(() => {
        setLasers(prev => prev.filter(laser => laser.id !== newLaser.id));
      }, 150); // Match this to the animation duration
    };

    window.addEventListener('mousemove', updatePosition);
    document.body.addEventListener('mouseleave', handleMouseLeave);
    document.body.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
      document.body.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('click', handleClick);
    };
  }, [visible]);

  return (
    <>
      <div 
        ref={cursorRef}
        className="custom-cursor"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          opacity: visible ? 1 : 0
        }}
      />
      {lasers.map(laser => (
         <div
           key={laser.id}
           className="laser-beam"
           style={{
             left: `${laser.x}px`,
             top: `${laser.y - 3.75}px`,
             transform: 'rotate(135deg)',
             transformOrigin: 'top center'
           }}
         />
       ))}
    </>
  );
};

export default AnimatedCursor;
