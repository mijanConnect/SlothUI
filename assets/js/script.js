// Navbar
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const btn = document.querySelector(".navbar-buttons");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    btn.classList.toggle("nav-active");
  });
});

// Tab Features
function openFeatures(evt, FeaturesName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(FeaturesName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Accodion
const accordions = document.querySelectorAll(".accordion");

accordions.forEach((accordion) => {
  accordion.addEventListener("click", function () {
    const panel = this.nextElementSibling;
    const isActive = this.classList.contains("active");

    // Close all
    accordions.forEach((acc) => {
      acc.classList.remove("active");
      acc.nextElementSibling.classList.remove("open");
    });

    // Toggle current only if it was not active
    if (!isActive) {
      this.classList.add("active");
      panel.classList.add("open");
    }
  });
});

// Load More
document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  const loadMoreButton = document.getElementById("loadMore");
  let visibleCount = 4;

  items.forEach((item, index) => {
    if (index < visibleCount) {
      item.classList.add("visible");
    }
  });

  loadMoreButton.addEventListener("click", function () {
    for (let i = visibleCount; i < visibleCount + 4; i++) {
      if (items[i]) {
        items[i].classList.add("visible");
      }
    }
    visibleCount += 4;

    if (visibleCount >= items.length) {
      loadMoreButton.style.display = "none";
    }
  });
});

// Css animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
});

document
  .querySelectorAll(".animate-ease")
  .forEach((el) => observer.observe(el));
document
  .querySelectorAll(".animate-zoom")
  .forEach((el) => observer.observe(el));

//Data Efficiencey & Conversion Rate counter
function countUp(element, target, duration = 2000) {
  let start = 0;
  const increment = Math.ceil(target / (duration / 16)); // Approx. 60fps
  const update = () => {
    start += increment;
    if (start >= target) {
      element.textContent = target;
    } else {
      element.textContent = start;
      requestAnimationFrame(update);
    }
  };
  update();
}

function observeCountUpOnScroll(targetId, countTo) {
  const element = document.getElementById(targetId);
  if (!element) return;

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          countUp(element, countTo);
          started = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element.closest("section"));
}
observeCountUpOnScroll("count", 420);
observeCountUpOnScroll("count2", 720);

// AI LLM Scale counter
function countUpFormatted(element, target, duration = 2000, suffix = "") {
  let start = 0;
  const fps = 60;
  const steps = duration / (1000 / fps);
  const increment = target / steps;
  let currentStep = 0;

  const update = () => {
    currentStep++;
    start += increment;
    if (currentStep >= steps) {
      element.textContent = formatNumber(target) + suffix;
    } else {
      element.textContent = formatNumber(start) + suffix;
      requestAnimationFrame(update);
    }
  };

  update();
}

function formatNumber(num) {
  if (num >= 1e6) {
    return (num / 1e6).toFixed(2) + "M";
  } else if (num >= 1e3) {
    return (num / 1e3).toFixed(1) + "K";
  } else {
    return Math.floor(num).toString();
  }
}

function observeFormattedCounter(targetId, countTo, duration = 2000) {
  const element = document.getElementById(targetId);
  if (!element) return;

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          countUpFormatted(element, countTo, duration);
          started = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(element.closest("section"));
}
observeFormattedCounter("count3", 1820000);
