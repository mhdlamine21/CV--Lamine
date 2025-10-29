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

// Bouton "Retour en haut"
const backToTopBtn = document.createElement("button");
backToTopBtn.type = "button";
backToTopBtn.className = "btn btn-primary";
backToTopBtn.textContent = "↑";
backToTopBtn.setAttribute("aria-label", "Retour en haut");
Object.assign(backToTopBtn.style, {
  position: "fixed",
  right: "16px",
  bottom: "16px",
  display: "none",
  zIndex: "999",
});
document.body.appendChild(backToTopBtn);
const toggleTopBtn = () =>
  (backToTopBtn.style.display = window.scrollY > 300 ? "inline-flex" : "none");
addEventListener("scroll", toggleTopBtn, { passive: true });
addEventListener("load", toggleTopBtn);
backToTopBtn.addEventListener("click", () =>
  scrollTo({ top: 0, behavior: "smooth" })
);
