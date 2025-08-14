
import { useEffect, useRef, useState } from 'react';

interface ScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
}

export const useScrollAnimation = <T extends HTMLElement,>(options: ScrollAnimationOptions = {}) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  const { threshold = 0.1, rootMargin = '0px' } = options;

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [ref, threshold, rootMargin]);

  return { ref, isVisible };
};
