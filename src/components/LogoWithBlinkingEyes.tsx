import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useTransition } from 'react';

interface LogoWithBlinkingEyesProps {
  className?: string;
  size?: string;
}

const LogoWithBlinkingEyes: React.FC<LogoWithBlinkingEyesProps> = ({ 
  className = '',
  size = 'max-w-full h-auto'
}) => {
  const [currentFrame, setCurrentFrame] = useState(1);
  const [isHovering, setIsHovering] = useState(false);
  const [isPending, startTransition] = useTransition();
  const logoRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<{upInterval: NodeJS.Timeout | null, downInterval: NodeJS.Timeout | null}>({
    upInterval: null,
    downInterval: null
  });
  const totalFrames = 7;
  
  // Memoized blink function to prevent unnecessary re-renders
  const blink = useCallback(() => {
    // Clear any existing animation
    if (animationRef.current.upInterval) clearInterval(animationRef.current.upInterval);
    if (animationRef.current.downInterval) clearInterval(animationRef.current.downInterval);
    
    // First go from 1 to 7
    let frameCount = 1;
    animationRef.current.upInterval = setInterval(() => {
      setCurrentFrame(frameCount);
      frameCount++;
      
      if (frameCount > totalFrames) {
        if (animationRef.current.upInterval) clearInterval(animationRef.current.upInterval);
        animationRef.current.upInterval = null;
        
        // Then go from 7 back to 1
        let reverseFrameCount = totalFrames - 1;
        animationRef.current.downInterval = setInterval(() => {
          setCurrentFrame(reverseFrameCount);
          reverseFrameCount--;
          
          if (reverseFrameCount < 1) {
            if (animationRef.current.downInterval) clearInterval(animationRef.current.downInterval);
            animationRef.current.downInterval = null;
            setCurrentFrame(1);
          }
        }, 35); // Slightly faster opening
      }
    }, 40);
  }, []);
  
  // Handle automatic blinking every 30-60 seconds
  useEffect(() => {
    const randomInterval = Math.floor(Math.random() * 30000) + 30000; // Random between 30-60 seconds
    const mainInterval = setInterval(() => {
      if (!isHovering) { // Don't auto-blink if already hovering
        blink();
      }
    }, randomInterval);
    
    // Initial blink when component mounts
    blink();
    
    return () => {
      clearInterval(mainInterval);
      // Clean up any running animations
      if (animationRef.current.upInterval) clearInterval(animationRef.current.upInterval);
      if (animationRef.current.downInterval) clearInterval(animationRef.current.downInterval);
    };
  }, [isHovering, blink]);
  
  // Handle hover detection for eye area
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!logoRef.current) return;
      
      const rect = logoRef.current.getBoundingClientRect();
      const logoWidth = rect.width;
      const logoHeight = rect.height;
      
      // Define eye area (approximately where the eyes are in the logo)
      // Expanded eye area for easier hovering
      const eyeAreaLeft = rect.left + logoWidth * 0.15;
      const eyeAreaRight = rect.left + logoWidth * 0.45;
      const eyeAreaTop = rect.top + logoHeight * 0.45;
      const eyeAreaBottom = rect.top + logoHeight * 0.75;
      
      // Check if mouse is in eye area
      const isInEyeArea = 
        e.clientX >= eyeAreaLeft && 
        e.clientX <= eyeAreaRight && 
        e.clientY >= eyeAreaTop && 
        e.clientY <= eyeAreaBottom;
      
      // Trigger blink if entering eye area
      if (isInEyeArea && !isHovering) {
        setIsHovering(true);
        blink();
      } else if (!isInEyeArea && isHovering) {
        setIsHovering(false);
      }
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isHovering, blink]);
  
  // Add debug click handler to force blink
  const handleClick = () => {
    blink();
  };
  
  return (
    <div className={`relative ${className}`} ref={logoRef} onClick={handleClick}>
      <img 
        src={`/logo-animation/logo-sprite-${currentFrame}.svg`}
        alt="Big Data Energy Logo" 
        className={size}
        style={{ objectFit: 'contain' }}
      />
    </div>
  );
};

export default LogoWithBlinkingEyes;
