/* ======================================================
   PRELOADER
====================================================== */
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    preloader.style.pointerEvents = "none";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 800);
  }, 1200);
});

/* ======================================================
   SPLASH / ENTRADA
====================================================== */
const enterBtn = document.getElementById("enterSite");
const splash = document.getElementById("splash");

if (enterBtn) {
  enterBtn.addEventListener("click", () => {
    splash.style.opacity = "0";
    splash.style.transform = "scale(1.1)";
    setTimeout(() => {
      splash.style.display = "none";
      document.body.style.overflowY = "auto";
    }, 900);
  });
}

/* ======================================================
   SCROLL REVEAL
====================================================== */
const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
  const windowHeight = window.innerHeight;
  const revealPoint = 120;

  reveals.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    if (elementTop < windowHeight - revealPoint) {
      el.classList.add("active");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* ======================================================
   HEADER EFECTO SCROLL
====================================================== */
const header = document.getElementById("mainHeader");

window.addEventListener("scroll", () => {
  if (window.scrollY > 60) {
    header.style.background = "rgba(255,255,255,0.95)";
    header.style.backdropFilter = "blur(10px)";
  } else {
    header.style.background = "";
    header.style.backdropFilter = "";
  }
});

/* ======================================================
   MODO OSCURO (PERSISTENTE)
====================================================== */
const themeToggle = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("dark-mode");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("theme", mode);
}

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const current = document.body.classList.contains("dark-mode")
    ? "dark"
    : "light";
  setTheme(current === "dark" ? "light" : "dark");
});

/* ======================================================
   CONTADOR CONMEMORATIVO
====================================================== */
const targetDate = new Date("2025-12-15T00:00:00").getTime();

function updateCounter() {
  const now = new Date().getTime();
  const diff = targetDate - now;

  if (diff < 0) return;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  const seconds = Math.floor((diff / 1000) % 60);

  document.getElementById("days").textContent = String(days).padStart(2, "0");
  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

setInterval(updateCounter, 1000);
updateCounter();

/* ======================================================
   GALERÍAS – EFECTOS HOVER AVANZADOS
====================================================== */
const mediaCards = document.querySelectorAll(".media-card, .promo-card, .gallery-item");

mediaCards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-6px) scale(1.02)";
    card.style.boxShadow = "0 20px 50px rgba(0,0,0,0.25)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "";
    card.style.boxShadow = "";
  });
});

/* ======================================================
   CONTROL DE VIDEO (g7)
====================================================== */
const videos = document.querySelectorAll("video");

videos.forEach(video => {
  video.addEventListener("play", () => {
    videos.forEach(v => {
      if (v !== video) {
        v.pause();
      }
    });
  });

  video.addEventListener("mouseenter", () => {
    video.style.filter = "brightness(1.1)";
  });

  video.addEventListener("mouseleave", () => {
    video.style.filter = "";
  });
});

/* ======================================================
   SCROLL SUAVE PARA MENÚ
====================================================== */
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    const target = document.querySelector(anchor.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

/* ======================================================
   EFECTO PARALLAX SUAVE (SPLASH)
====================================================== */
window.addEventListener("scroll", () => {
  const splashBg = document.querySelector(".splash-bg img");
  if (!splashBg) return;

  const offset = window.scrollY * 0.4;
  splashBg.style.transform = `translateY(${offset}px)`;
});

/* ======================================================
   MICRO-ANIMACIONES EXTRA
====================================================== */
const buttons = document.querySelectorAll("button");

buttons.forEach(btn => {
  btn.addEventListener("mousedown", () => {
    btn.style.transform = "scale(0.96)";
  });
  btn.addEventListener("mouseup", () => {
    btn.style.transform = "";
  });
});

/* ======================================================
   FIRMA FINAL
====================================================== */
console.log(
  "Politécnico Fundación MIR | Promoción 2025 | Sitio institucional cargado correctamente"
);
/* ======================================================
   === EXTENSIÓN JS AVANZADA – PERIÓDICO ESCOLAR ===
   NO BORRAR NADA ANTERIOR
====================================================== */

/* ======================================================
   DETECCIÓN DE DISPOSITIVO
====================================================== */
const isMobile = window.matchMedia("(max-width: 768px)").matches;
const isLowEnd = navigator.hardwareConcurrency <= 4;

/* ======================================================
   OPTIMIZACIÓN PARA MÓVIL / DISPOSITIVOS LENTOS
====================================================== */
if (isMobile || isLowEnd) {
  document.body.classList.add("reduced-motion");
  console.log("Modo optimizado para móvil / bajo rendimiento activado");
}

/* ======================================================
   STAGGER ANIMATION REAL (EDITORIAL)
====================================================== */
const staggerElements = document.querySelectorAll(
  ".media-card, .promo-card, .gallery-item"
);

function staggerReveal() {
  let delay = 0;
  staggerElements.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80 && !el.classList.contains("active")) {
      el.style.transitionDelay = `${delay}s`;
      el.classList.add("active");
      delay += 0.12;
    }
  });
}

window.addEventListener("scroll", staggerReveal);
staggerReveal();

/* ======================================================
   SCROLL DIRECCIONAL (UP / DOWN)
====================================================== */
let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;

  if (currentScroll > lastScrollY) {
    document.body.classList.add("scroll-down");
    document.body.classList.remove("scroll-up");
  } else {
    document.body.classList.add("scroll-up");
    document.body.classList.remove("scroll-down");
  }

  lastScrollY = currentScroll;
});

/* ======================================================
   EFECTO EDITORIAL EN TÍTULOS (PERIÓDICO)
====================================================== */
const editorialTitles = document.querySelectorAll(
  ".section-header h2, .gallery-title"
);

editorialTitles.forEach(title => {
  const text = title.textContent;
  title.textContent = "";

  [...text].forEach((char, i) => {
    const span = document.createElement("span");
    span.textContent = char;
    span.style.display = "inline-block";
    span.style.opacity = "0";
    span.style.transform = "translateY(20px)";
    span.style.transition = `all 0.6s ease ${i * 0.04}s`;
    title.appendChild(span);
  });
});

function revealTitles() {
  editorialTitles.forEach(title => {
    const rect = title.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      [...title.children].forEach(span => {
        span.style.opacity = "1";
        span.style.transform = "translateY(0)";
      });
    }
  });
}

window.addEventListener("scroll", revealTitles);
revealTitles();

/* ======================================================
   EFECTO PARALLAX EDITORIAL (IMÁGENES)
====================================================== */
const parallaxImages = document.querySelectorAll(
  ".media-card img, .promo-card img"
);

window.addEventListener("scroll", () => {
  if (isMobile) return;

  parallaxImages.forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      const offset = (window.innerHeight - rect.top) * 0.03;
      img.style.transform = `scale(1.05) translateY(${offset}px)`;
    }
  });
});

/* ======================================================
   MENÚ MÓVIL INFERIOR (SIMULADO)
====================================================== */
if (isMobile) {
  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.remove("scroll-down");
    });
  });
}

/* ======================================================
   ANIMACIÓN ESPECIAL – SECCIÓN LIAN FANJUL
====================================================== */
const institucionalSection = document.getElementById("institucional");

function ceremonialReveal() {
  if (!institucionalSection) return;

  const rect = institucionalSection.getBoundingClientRect();
  if (rect.top < window.innerHeight - 150) {
    institucionalSection.style.transition = "all 1.4s ease";
    institucionalSection.style.transform = "scale(1)";
    institucionalSection.style.opacity = "1";
  }
}

window.addEventListener("scroll", ceremonialReveal);
ceremonialReveal();

/* ======================================================
   CONTROL DE ANIMACIONES SEGÚN VISIBILIDAD (PERFORMANCE)
====================================================== */
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        entry.target.style.willChange = "auto";
      } else {
        entry.target.style.willChange = "transform, opacity";
      }
    });
  },
  { threshold: 0.2 }
);

staggerElements.forEach(el => observer.observe(el));

/* ======================================================
   MODO PERIÓDICO DINÁMICO (TECLADO)
====================================================== */
document.addEventListener("keydown", e => {
  if (e.key.toLowerCase() === "p") {
    document.body.classList.toggle("editorial-mode");
    console.log("Modo Periódico Escolar activado/desactivado");
  }
});

/* ======================================================
   FIRMA EDITORIAL FINAL
====================================================== */
console.log(
  "Edición Especial | Periódico Escolar Digital – Fundación MIR | JS Avanzado cargado"
);
