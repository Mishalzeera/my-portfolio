gsap.registerPlugin(ScrollTrigger);

function playMusic() {
  console.log("Music is the soul of life.");
}

const startAnim = () => {
  gsap.from("#top", { opacity: 0, duration: 2 });
  gsap.fromTo("#large-arrow-icon", { opacity: 0 }, { opacity: 1, duration: 6 });

  gsap.to("#large-arrow-span", {
    opacity: 0,
    duration: 5,
  });

  gsap.fromTo(
    "#arrow-down",
    { opacity: 0 },
    { opacity: 0.2, duration: 40, ease: "slow.in" }
  );

  gsap.from("#down-arrow-pulse", {
    opacity: 0,
    duration: 0.8,
    repeat: -1,
  });
};

gsap.to("#about-me", {
  scrollTrigger: {
    trigger: ".about",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 4,
});

gsap.to("#goat-daisy", {
  scrollTrigger: {
    trigger: ".goat",
    toggleActions: "restart none none reset",
  },
  opacity: 1,
  duration: 4,
});

// gitgoat livegoat

gsap.to("#money", {
  scrollTrigger: {
    trigger: ".money",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 4,
});

// gitmoney livemoney

gsap.to("#projects", {
  scrollTrigger: {
    trigger: ".rainbow",
    toggleActions: "restart none none none",
  },
  opacity: 1,
  duration: 4,
});
