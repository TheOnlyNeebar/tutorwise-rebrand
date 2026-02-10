(function () {
  const toggle = document.getElementById("menu-toggle");
  const links = document.getElementById("nav-links");

  if (!toggle || !links) return;

  function closeMenu() {
    links.classList.remove("active");
    toggle.setAttribute("aria-expanded", "false");
  }

  function openMenu() {
    links.classList.add("active");
    toggle.setAttribute("aria-expanded", "true");
  }

  toggle.setAttribute("aria-label", "Open menu");
  toggle.setAttribute("aria-expanded", "false");

  toggle.addEventListener("click", () => {
    if (links.classList.contains("active")) closeMenu();
    else openMenu();
  });

  // Close on link click (mobile)
  links.querySelectorAll("a").forEach((a) => {
    a.addEventListener("click", () => closeMenu());
  });

  // Close if user taps outside nav (mobile)
  document.addEventListener("click", (e) => {
    const nav = document.querySelector("nav");
    if (!nav) return;
    if (!nav.contains(e.target)) closeMenu();
  });

  // Close on escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeMenu();
  });
})();