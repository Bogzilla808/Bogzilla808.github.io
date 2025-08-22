// Theme toggle with persistence
(function initTheme() {
  const root = document.documentElement;
  const saved = localStorage.getItem("theme");
  if (saved === "light") root.classList.add("light");
})();

document.getElementById("themeToggle").addEventListener("click", () => {
  const root = document.documentElement;
  root.classList.toggle("light");
  localStorage.setItem("theme", root.classList.contains("light") ? "light" : "dark");
});

// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const navMenu = document.getElementById("navMenu");
navToggle.addEventListener("click", () => {
  const open = navMenu.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(open));
});

// Smooth scroll + close mobile menu on click
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener("click", (e) => {
    const id = a.getAttribute("href").slice(1);
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      navMenu.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// Copy buttons
document.querySelectorAll(".copy").forEach(btn => {
  btn.addEventListener("click", async () => {
    const val = btn.getAttribute("data-copy");
    try {
      await navigator.clipboard.writeText(val);
      btn.textContent = "Copied!";
      setTimeout(() => (btn.textContent = "Copy"), 1200);
    } catch {
      btn.textContent = "Press Ctrl+C";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    }
  });
});

// Fake contact form (front-end only)
document.getElementById("fakeSend").addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  if (!name || !email || !message) {
    alert("Please fill out name, email, and message.");
    return;
  }
  alert("Thanks! This demo form doesn’t send emails. Use the email/WhatsApp listed to reach me.");
});

// Year in footer
document.getElementById("year").textContent = new Date().getFullYear();
