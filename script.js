// import * as Shery from './node_modules/sheryjs/index.js';

function locomotiveJS (){
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

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
  ease: Power4,
});
tl.to("#loader", {
  display: "none",
})
tl.from("#hero-1 h1, #hero-2 h1, #hero-3 h1, #hero-3 h2,  #hero-3 h3, #hero-4 h1 ", {
  y: 150,
  stagger: 0.2,
})
tl.from("#hero , #page3", {
  opacity: 0,
},"-=1")
tl.from("#nav", {
  opacity: 0,
})
}
// // mouse hover
// function cursorAnimation (){
//   document.addEventListener("mousemove", function(dets){
//   gsap.to("#crsr",{
//       left: dets.x,
//       top: dets.y,
//     })
//   })
//   Shery.makeMagnet("#nav-part-2 h4");
// }

window.addEventListener("load", function(){
  window.scrollTo(0, 0);
});

function sheryAnimation() {
  Shery.imageEffect(".image-div", {
    style: 5,
    gooey: true,
    config: {"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7272663218860533},"ignoreShapeAspect":{"value":true},"shapePosition":{"value":{"x":0,"y":0}},"shapeScale":{"value":{"x":0.5,"y":0.5}},"shapeEdgeSoftness":{"value":0,"range":[0,0.5]},"shapeRadius":{"value":0,"range":[0,2]},"currentScroll":{"value":0},"scrollLerp":{"value":0.07},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.3,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.5,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0,"range":[0,0.1]},"noise_height":{"value":0.27,"range":[0,2]},"noise_scale":{"value":19.85,"range":[0,100]}}
  })
}

function cursorAnimation() {
  Shery.mouseFollower({
    skew: true,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    duration: 1,
  });
  Shery.makeMagnet("#nav-part2 h4");
  let videoContainer = document.querySelector("#video-container");
  let video = document.querySelector("#video-container video");
  videoContainer.addEventListener("mouseenter", function(){
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to(".mousefollower", {
        opacity: 0,
      })
      gsap.to("#video-crsr", {
        left: dets.x - 570,
        y:dets.y - 100,
      })
    })
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to(".mousefollower", {
      opacity: 1,
    })
    gsap.to("#video-crsr", {
      left: "70%",
      top: "-15%",
    })
  })
  videoContainer.addEventListener("click",function() {
    video.play();
    video.style.opacity=  1;
    videoContainer.style.backgroundImage = "none";
  })
}

locomotiveJS();
loadingAnimation();
cursorAnimation();
sheryAnimation();
mouseFollower();
