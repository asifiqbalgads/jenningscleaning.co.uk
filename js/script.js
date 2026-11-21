/* ==========================================================================
   Jennings Cleaning — Vanilla JavaScript
   Mobile navigation drawer, FAQ accordion, header scroll state, footer year
   ========================================================================== */

(function () {
  "use strict";

  // ---- Mobile navigation drawer -------------------------------------
  const menuToggle = document.querySelector(".header__menu-toggle");
  const nav = document.getElementById("header-nav");
  const header = document.getElementById("header");

  function setNav(open) {
    if (!nav || !menuToggle) return;
    nav.classList.toggle("is-open", open);
    menuToggle.classList.toggle("is-open", open);
    menuToggle.setAttribute("aria-expanded", open ? "true" : "false");
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    document.body.style.overflow = open ? "hidden" : "";
  }

  if (menuToggle && nav) {
    menuToggle.addEventListener("click", function () {
      setNav(!nav.classList.contains("is-open"));
    });

    // Close the drawer when a nav link is chosen
    nav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        setNav(false);
      });
    });

    // Close the drawer on Escape
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && nav.classList.contains("is-open")) {
        setNav(false);
        menuToggle.focus();
      }
    });

    // Close the drawer if the viewport grows past the desktop breakpoint
    let wasMobile = window.matchMedia("(max-width: 1199px)").matches;
    window.addEventListener("resize", function () {
      const isMobile = window.matchMedia("(max-width: 1199px)").matches;
      if (wasMobile && !isMobile) setNav(false);
      wasMobile = isMobile;
    });
  }

  // ---- FAQ accordion -------------------------------------------------
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

  // ---- Header scroll state -----------------------------------------
  if (header) {
    let ticking = false;
    const update = function () {
      if (window.scrollY > 12) {
        header.classList.add("is-scrolled");
      } else {
        header.classList.remove("is-scrolled");
      }
      ticking = false;
    };
    window.addEventListener(
      "scroll",
      function () {
        if (!ticking) {
          window.requestAnimationFrame(update);
          ticking = true;
        }
      },
      { passive: true }
    );
    update();
  }

  // ---- Footer year ---------------------------------------------------
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
