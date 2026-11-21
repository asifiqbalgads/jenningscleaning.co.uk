/* ==========================================================================
   Jennings Cleaning — Vanilla JavaScript
   Mobile navigation, FAQ accordion, scroll effects, footer year
   ========================================================================== */

(function () {
  "use strict";

  // ---- Mobile navigation toggle ----
  const menuToggle = document.querySelector(".header__menu-toggle");
  const nav = document.getElementById("header-nav");

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = nav.classList.toggle("is-open");
      menuToggle.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      document.body.style.overflow = isOpen ? "hidden" : "";
    });

    // Close menu when clicking a nav link
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        nav.classList.remove("is-open");
        menuToggle.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
      });
    });
  }

  // ---- FAQ accordion ----
  document.querySelectorAll(".faq-question").forEach(function (button) {
    button.addEventListener("click", function () {
      const isExpanded = button.getAttribute("aria-expanded") === "true";
      const targetId = button.getAttribute("aria-controls");
      const answer = document.getElementById(targetId);
      const icon = button.querySelector(".icon--plus");

      // Close other open answers in the same FAQ list
      const list = button.closest(".faq__list");
      if (list) {
        list.querySelectorAll(".faq-question[aria-expanded='true']").forEach(function (other) {
          other.setAttribute("aria-expanded", "false");
          const otherAnswer = document.getElementById(other.getAttribute("aria-controls"));
          if (otherAnswer) otherAnswer.hidden = true;
          const otherIcon = other.querySelector(".icon--plus");
          if (otherIcon) otherIcon.style.transform = "rotate(0deg)";
        });
      }

      if (!isExpanded) {
        button.setAttribute("aria-expanded", "true");
        if (answer) answer.hidden = false;
        if (icon) icon.style.transform = "rotate(45deg)";
      } else {
        button.setAttribute("aria-expanded", "false");
        if (answer) answer.hidden = true;
        if (icon) icon.style.transform = "rotate(0deg)";
      }
    });
  });

  // ---- Header scroll shadow ----
  const header = document.getElementById("header");
  if (header) {
    window.addEventListener("scroll", function () {
      if (window.scrollY > 10) {
        header.style.boxShadow = "var(--shadow)";
      } else {
        header.style.boxShadow = "none";
      }
    });
  }

  // ---- Footer year ----
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
