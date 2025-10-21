// script.js — smooth scroll + active nav + year updater

document.addEventListener("DOMContentLoaded", () => {
  // Update year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Smooth scroll
  const navLinks = document.querySelectorAll(".nav-link");
  navLinks.forEach(link => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.querySelector(link.getAttribute("href"));
      window.scrollTo({
        top: target.offsetTop - 70,
        behavior: "smooth"
      });
    });
  });

  // Active link on scroll
  const sections = document.querySelectorAll("section, header.hero-section");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove("active"));
        const activeLink = document.querySelector(`.nav-link[href='#${entry.target.id}']`);
        if (activeLink) activeLink.classList.add("active");
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => observer.observe(sec));
});
