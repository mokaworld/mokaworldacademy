/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load("particles-js", "assest/particles.json", function () {
  console.log("callback - particles.js config loaded");
});

// INIT OWL CAROUSEL
var owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true,
  margin: 10,
  autoplay: true,
  pagination: false,
  rtl: true,
  dots: false,
  autoplayTimeout: 2500,
  autoplayHoverPause: true,
});
$(".play").on("click", function () {
  owl.trigger("play.owl.autoplay", [2500]);
});
$(".stop").on("click", function () {
  owl.trigger("stop.owl.autoplay");
});

// loader
let loader = document.getElementById("loader");

window.onload = function loderPage() {
  loader.style.transition = "5s";
  loader.style.display = "none";
  
  console.log("loading successfully ");
};
