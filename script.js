//  Apparition au défilement

const revealElements = document.querySelectorAll(".section, .timeline-item");

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => {
  el.classList.add("hidden");
  revealObserver.observe(el);
});
