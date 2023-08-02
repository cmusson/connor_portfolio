"use client";
import React, { useEffect, useRef, ReactNode } from "react";
interface IUseClientProps {
  offset?: string;
  children?: ReactNode;
  // any props that come into the component
}

export default function SlideUp({ children, offset = "0px" }: IUseClientProps) {
  const ref = useRef(null);

  useEffect(() => {
    // intersection observer created with callback for intersection of viewport and ref
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // remove classname of opacity-0 so it is visible
            entry.target.classList.remove("opacity-0");
            // run the animation
            entry.target.classList.add("animate-slideUpCubiBezier");
          }
        });
      },
      { rootMargin: offset }
    );

    // and observes ref firing the callback within when it intersects the viewport
    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  return (
    <div ref={ref} className="relative opacity-0">
      {children}
    </div>
  );
}
