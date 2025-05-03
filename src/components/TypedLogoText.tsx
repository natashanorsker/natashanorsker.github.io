import React, { useState, useEffect } from 'react';

interface TypedLogoTextProps {
  className?: string;
  typingSpeed?: number;
  initialDelay?: number;
  showLogo?: boolean;
}

const TypedLogoText: React.FC<TypedLogoTextProps> = ({ 
  className = '',
  typingSpeed = 150,
  initialDelay = 1000,
  showLogo = false
}) => {
  // The letters to be typed (with their corresponding SVG files)
  const letters = [
    { char: "B", svg: "/logo-text/B.svg" },
    { char: "I", svg: "/logo-text/I.svg" },
    { char: "G", svg: "/logo-text/G.svg" },
    { char: " ", svg: null },
    { char: "D", svg: "/logo-text/D.svg" },
    { char: "A", svg: "/logo-text/A.svg" },
    { char: "T", svg: "/logo-text/T.svg" },
    { char: "A", svg: "/logo-text/A.svg" },
    { char: " ", svg: null },
    { char: "E", svg: "/logo-text/E.svg" },
    { char: "N", svg: "/logo-text/N.svg" },
    { char: "E", svg: "/logo-text/E.svg" },
    { char: "R", svg: "/logo-text/R.svg" },
    { char: "G", svg: "/logo-text/G.svg" },
    { char: "Y", svg: "/logo-text/Y.svg" }
  ];
  
  const [visibleLetters, setVisibleLetters] = useState<number>(0);
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [typingStarted, setTypingStarted] = useState(false);
  
  useEffect(() => {
    const startDelay = setTimeout(() => {
      setTypingStarted(true);
    }, initialDelay);
    
    return () => clearTimeout(startDelay);
  }, [initialDelay]);
  
  useEffect(() => {
    if (!typingStarted) return;
    
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < letters.length) {
        setVisibleLetters(currentIndex + 1);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
        setIsTypingComplete(true);
      }
    }, typingSpeed);
    
    return () => {
      clearInterval(typingInterval);
      setIsTypingComplete(false);
      setVisibleLetters(0);
    };
  }, [typingStarted, typingSpeed, letters.length]);
  
  return (
    <div className={`relative ${className}`}>
      <div className="flex items-center">
        {/* Typed Text - reduced size */}
        <div className="flex items-center">
          <div className="flex tracking-wider items-center h-[20px]">
            {letters.slice(0, visibleLetters).map((letter, index) => (
              <span key={index} className="h-[20px] flex items-center mx-0.5">
                {letter.svg ? (
                  <img 
                    src={letter.svg} 
                    alt={letter.char} 
                    className="h-full w-auto"
                  />
                ) : (
                  <span className="text-brand-green font-bold text-xs w-2">&nbsp;</span>
                )}
              </span>
            ))}
            {!isTypingComplete && (
              <img 
                src="/logo-text/cursor.svg" 
                alt="cursor" 
                className="h-[20px] w-auto animate-pulse mx-0.5"
                style={{ animationDuration: '1s' }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TypedLogoText;
