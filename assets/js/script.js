// Navbar
document.addEventListener("DOMContentLoaded", () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
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
