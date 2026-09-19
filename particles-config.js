const heroParticlesConfig = {
  fullScreen: { enable: false },
  background: { color: { value: "transparent" } },
  particles: {
    number: {
      value: 46,
      density: { enable: true, area: 900 },
    },
    color: { value: "#7dd3fc" },
    links: {
      enable: true,
      color: "#7dd3fc",
      distance: 140,
      opacity: 0.25,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.6,
      outModes: { default: "out" },
    },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "grab" },
      resize: true,
    },
    modes: {
      grab: {
        distance: 180,
        links: { opacity: 0.6 },
      },
    },
  },
  detectRetina: true,
};

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("particles-hero");
  if (container && window.tsParticles) {
    tsParticles.load({ id: "particles-hero", options: heroParticlesConfig });
  }
});
