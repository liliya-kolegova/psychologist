import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = () => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline()

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0,
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100,
      stagger: 0.2,
    })
  }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
  const bannerOne = document.getElementById("banner-1")
  const bannerTwo = document.getElementById("banner-2")
  const bannerThree = document.getElementById("banner-3")
  const bannerFour = document.getElementById("banner-4")

  console.log("animatePageOut called", { bannerOne, bannerTwo, bannerThree, bannerFour });

  if (bannerOne && bannerTwo && bannerThree && bannerFour) {
    const tl = gsap.timeline();

    tl.set([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 0, // Ensure the banners start at 0
    }).to([bannerOne, bannerTwo, bannerThree, bannerFour], {
      yPercent: 100, // Move the banners out of view
      stagger: 0.2,
      duration: 1, // Increase duration for better visibility
      ease: "power1.inOut",
      onStart: () => {
        console.log("Animation started");
      },
      onUpdate: () => {
        console.log("Animation in progress");
      },
      onComplete: () => {
        console.log("Animation step complete");
      },
    });

    // Start the navigation a fraction of a second before the animation ends
    gsap.delayedCall(0.9, () => {
      console.log("Starting navigation to", href);
      router.push(href);
    });
  } else {
    console.log("One or more elements are missing");
    router.push(href);
  }
}