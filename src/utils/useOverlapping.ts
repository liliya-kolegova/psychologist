import { useEffect, useLayoutEffect, RefObject } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// gsap.registerPlugin(ScrollTrigger);

export const useOverlapping = (ref: RefObject<HTMLElement>) => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const sections: HTMLElement[] = gsap.utils.toArray<HTMLElement>(".section");
      if (sections) {
        sections.forEach((section) =>
          gsap.to(section, {
            scrollTrigger: {
              trigger: section,
              start: "top top",
              endTrigger: ref.current,
              end: "bottom top",
              scrub: true,
              pin: section,
              pinSpacing: false,
            },
          })
        );
      }
    }, ref);

    return () => ctx.revert();
  }, [ref]);
};

