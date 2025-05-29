
import { useEffect, useState } from "react";

interface ParallaxBackgroundProps {
  children: React.ReactNode;
  backgroundImage?: string;
  className?: string;
  speed?: number;
}

export const ParallaxBackground = ({ 
  children, 
  backgroundImage, 
  className = "",
  speed = 0.5 
}: ParallaxBackgroundProps) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center transition-transform duration-75 ease-out"
          style={{
            backgroundImage: `url('${backgroundImage}')`,
            transform: `translateY(${scrollY * speed}px)`,
          }}
        />
      )}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
