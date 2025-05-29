
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in";
  delay?: number;
  threshold?: number;
}

export const AnimateOnScroll = ({ 
  children, 
  className, 
  animation = "fade-in",
  delay = 0,
  threshold = 0.1 
}: AnimateOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [delay, threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-600 ease-out",
        isVisible ? `animate-${animation}` : "opacity-0",
        className
      )}
    >
      {children}
    </div>
  );
};
