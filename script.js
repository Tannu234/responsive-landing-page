// Scroll behavior for navbar (optional)
window.addEventListener("scroll", function () {
  const navbar = document.getElementById("navbar");
  navbar.style.boxShadow = window.scrollY > 20 ? "0 2px 10px rgba(0,0,0,0.2)" : "none";
});
