import React, { useState, useEffect } from 'react';
import { cn } from '../Libs/utils';

interface TextWithMarqueeProps {
  children: React.ReactNode; // ReactNode covers any type of children including string, JSX, etc.
  className?: string; // className is optional
  threshold?: number; // threshold is optional with a default value of 10
}

const TextWithMarquee: React.FC<TextWithMarqueeProps> = ({ children, className = '', threshold = 10 }) => {
  const [isMarquee, setIsMarquee] = useState(false);

  useEffect(() => {
    const textElement = document.querySelector('.marquee-text');
    if (textElement && textElement.textContent && textElement.textContent.trim().length > threshold) {
      setIsMarquee(true);
    } else {
      setIsMarquee(false);
    }
  }, [children, threshold]);

  return (
    <p className={cn('marquee-text', `${isMarquee ? 'animate-marquee whitespace-nowrap' : ''}`, className)}>
      {children}
    </p>
  );
};

export default TextWithMarquee;
