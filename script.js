function loadingAnimation (){
  var tl = gsap.timeline();
tl.from(".line h1", {
  y: 150,
  stagger: 0.25,
  duration: 0.6,
  delay: 0.5,
});
tl.from("#line1-part1", {
  opacity: 0,
  onStart: function () {
    var h5timer = document.querySelector("#line1-part1 h5");
    var grow = 0;
    setInterval(() => {
      if (grow < 100) {
        grow++;
        h5timer.innerHTML = grow;
      } else {
        h5timer.innerHTML = grow;
      }
    }, 30);
  }
});
tl.to(".line h2", {
  animationName: "anime",
  opacity: 1,
})
tl.to("#loader", {
  opacity: 0,
  duration: 0.2,
  delay:1,
})
tl.from("#page1", {
  delay: 0.2,
  y: 1600,
  opacity: 0,
  duration: 0.5,
  ease: Power4
});
tl.to("#loader", {
  display: "none",
})
tl.from("#hero-1 h1, #hero-2 h1, #hero-3 h1, #hero-3 h2,  #hero-3 h3, #hero-4 h1 ", {
  y: 120,
  stagger: 0.2,
})
tl.from("#nav", {
  opacity: 0,
})
}
// mouse hover
function cursorAnimation (){
  document.addEventListener("mousemove", function(dets){
  gsap.to("#crsr",{
      left: dets.x,
      top: dets.y,
    })
  })
  Shery.makeMagnet("#nav-part-2 h4");
}


loadingAnimation();
cursorAnimation();
