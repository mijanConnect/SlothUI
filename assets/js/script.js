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
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

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
