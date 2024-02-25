gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});
// each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
locoScroll.on("scroll", ScrollTrigger.update);

// tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, // we don't have to define a scrollLeft because we're only scrolling vertically.
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
  pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});


// each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();
Shery.makeMagnet("#nav-part2 h4")

function loadingAnimation(){
  var element = document.querySelector('.line h2');

var tl = gsap.timeline()

tl.from('.line h1',{
  y: 150,
  stagger: 0.3,
  opacity: 0,
  duration: 0.6,
})
tl.to('.line h2',{
  display: 'initial',
})

tl.from('.line1-part1', {
  opacity: 0,
  onStart: function() {
    var timer = document.querySelector('.line1-part1 h5');
    var count = 0;
    var interval = setInterval(function() {
      if (count < 10) {
        timer.innerHTML = "0" + count;
      } else {
        timer.innerHTML = count + " ";
      }
      count++;
      if (count > 100) {
        clearInterval(interval);
      }
    }, 25);
  },
  });

tl.to("#loader",{
  opacity: 0,
  duration: 0.2,
  delay: 2.3,
})
tl.from("#page1",{
  y: 4500,
  opacity: 0,
  ease: Power4,
  delay: 0.3,
})
tl.to("#loader",{
  display: 'none',
})
tl.from("#nav",{
  opacity: 0,
})
tl.from('.hero h1, .hero h2', {
  y: 1000,
  opacity: 0,
});
tl.from("#hero1",{
  opacity: 0,
})
}
loadingAnimation()

function crsrAnimation(){
  var crsr = document.querySelector('#crsr')
  main.addEventListener("mousemove", function(det){
    gsap.to(crsr, {
      opacity: 1,
      left: det.clientX, //- crsr.clientWidth/2, used transform
      top: det.clientY,  // - crsr.clientHeight/2,
    })
  })
  main.addEventListener("mouseleave", function(det){
    gsap.to(crsr, {
      opacity: 0,
    })
  })
}
crsrAnimation()

var h3Line = document.querySelector('#hero3');





