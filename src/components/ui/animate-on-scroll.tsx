
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface AnimateOnScrollProps {
  children: React.ReactNode;
  className?: string;
  animation?: "fade-in" | "fade-in-up" | "fade-in-down" | "slide-in-left" | "slide-in-right" | "scale-in" | "zoom-in" | "float-in" | "blur-in" | "rotate-in";
  delay?: number;
  threshold?: number;
  duration?: "fast" | "normal" | "slow";
}

export const AnimateOnScroll = ({ 
  children, 
  className, 
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  duration = "normal"
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

  const getDurationClass = () => {
    switch (duration) {
      case "fast": return "duration-300";
      case "slow": return "duration-1000";
      default: return "duration-700";
    }
  };

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all ease-out",
        getDurationClass(),
        isVisible ? `animate-${animation}` : "opacity-0 transform translate-y-8",
        className
      )}
    >
      {children}
    </div>
  );
};
