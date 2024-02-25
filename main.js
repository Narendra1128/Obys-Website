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

function crsrAnimation() {
  var crsr = document.querySelector('#crsr');
  var main = document.querySelector('#main');
  
  window.addEventListener("scroll", function () {
      gsap.to(crsr, {
          opacity: 0,
      });
  });

  main.addEventListener("mousemove", function (event) {
      gsap.to(crsr, {
          opacity: 1,
          left: event.pageX,
          top: event.pageY,
      });
  });

  main.addEventListener("mouseleave", function () {
      gsap.to(crsr, {
          opacity: 0,
      });
  });
}
crsrAnimation();

function vidCrsrAnimation() {
  var crsr = document.querySelector('#crsr');
  var vidCrsr = document.querySelector('#video-cursor');
  var divmain = document.querySelector('#video-container');

  divmain.addEventListener("mouseenter", function () {
      // Animation when mouse enters the video container
      gsap.to(crsr, {
          // Define your animation properties for the 'crsr' cursor
      });
      gsap.to(vidCrsr, {
          // Define your animation properties for the 'vidCrsr' cursor
      });
  });

  divmain.addEventListener("mousemove", function (event) {
      // Animation when mouse moves within the video container
      gsap.to(crsr, {
          // Define your animation properties for the 'crsr' cursor
      });
      gsap.to(vidCrsr, {
          // Define your animation properties for the 'vidCrsr' cursor
          left: event.pageX, // Example: Follow the mouse horizontally
          top: event.pageY,  // Example: Follow the mouse vertically
      });
  });

  divmain.addEventListener("mouseleave", function () {
      // Animation when mouse leaves the video container
      gsap.to(crsr, {
          // Define your animation properties for the 'crsr' cursor
      });
      gsap.to(vidCrsr, {
          // Define your animation properties for the 'vidCrsr' cursor
      });
  });
}

// Call the function to initialize the cursor animation
// vidCrsrAnimation();
