var tl = gsap.timeline()
var element = document.querySelector('.line h2');

var main = document.querySelector('#main')
var divmain = document.querySelector('#video-container');
var vidCrsr = document.querySelector('#video-cursor');
var video = document.querySelector('#video-container video');

var line3 = document.querySelector("#hero3");
var flag=0;


function locomotivescroll(){
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
}

function loadingAnimation(){
    tl.from('.line h1',{
      y: 150,
      stagger: 0.3,
      opacity: 0,
      duration: 0.7,
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
        }, 20);
      },
      });
    
    tl.to("#loader",{
        delay: 1.0,
        duration: 2,
        opacity: '0',
      })
    tl.from("#page1",{
      y: 4500,
      opacity: 0,
      ease: Power4,
      duration: 0.5,
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
      duration: 0.4,
      stagger: 0.1,
    });
    tl.from("#hero1",{
      opacity: 0,
    })
}

function cursorAnimation(){
  Shery.makeMagnet("#nav-part2 h4");
  Shery.mouseFollower({
    skew: true,
    // ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    // duration: 1,
  });
  
  main.addEventListener('mouseenter', function(){
    gsap.to('.mousefollower',{
      opacity: 1,
    })
  })

  divmain.addEventListener("mouseenter", function(){
    gsap.to(".mousefollower",{
      display: 'none',
    })

    divmain.addEventListener("mousemove", function(event){
    var rect = divmain.getBoundingClientRect();
      gsap.to("#video-cursor",{
        // left works relative to parent block not body
        left: event.clientX - rect.left,
        top: event.clientY - rect.top,
      })
      
    })
    divmain.addEventListener("mouseleave", function(dets){
      gsap.to("#video-cursor",{
        top: '0%',
        left: '85%',
        transform: 'translate(-50%, -50%)',
      })
      gsap.to(".mousefollower",{
        display: 'initial',
      })
      video.pause();
      video.style.opacity = '0'
      vidCrsr.style.scale = '1',
      vidCrsr.innerHTML = '<i class="ri-play-mini-fill"></i>'
    })
    divmain.addEventListener("click",function(){
      if(flag==0){
        video.style.opacity = '1';
        vidCrsr.style.scale = '0.5',
        vidCrsr.innerHTML = '<i class="ri-pause-line"></i>'
        video.play();
        flag=1;
      }
      else{
        video.style.opacity = '0';
        vidCrsr.style.scale = '1',
        vidCrsr.innerHTML = '<i class="ri-play-mini-fill"></i>'
        video.pause();
        flag=0;
      }
    })
  })
}

function flagAnimation(){
  line3.addEventListener("mouseenter",function(dets){
    gsap.to(".mousefollower",{
      opacity: '0',
    })
    gsap.to("#flag",{
        opacity: '1',
    })
  })
  line3.addEventListener("mousemove",function(dets){
    gsap.to("#flag",{
      left: dets.x,
      top: dets.y,
    })
  })
  line3.addEventListener("mouseleave",function(dets){
    gsap.to(".mousefollower",{
      opacity: '1',
    })
    gsap.to("#flag",{
      opacity: '0',
    })
  })
}

function photoEffect(){
  Shery.imageEffect(".image-div", {
    style: 6,
    // debug: true,
    gooey: true,
    config:{"a":{"value":2,"range":[0,30]},"b":{"value":0.75,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.7241195453907675},"gooey":{"value":true},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.23,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":0},"noise_speed":{"value":0.5,"range":[0,10]},"metaball":{"value":0.33,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}}
  });
}

function footerAnimation() {
  var clutter = ""
  var clutter2 = ""
  document.querySelector("#footer h1").textContent.split("").forEach(function (elem) {
    clutter += `<span>${elem}</span>`
  })
  document.querySelector("#footer h1").innerHTML = clutter
  document.querySelector("#footer h2").textContent.split("").forEach(function (elem) {
    clutter2 += `<span>${elem}</span>`
  })
  document.querySelector("#footer h2").innerHTML = clutter2


  document.querySelector("#footer-text").addEventListener("mouseenter", function () {
    gsap.to("#footer h1 span", {
      opacity: 0,
      stagger: 0.05
    })
    gsap.to("#footer h2 span", {
      delay: 0.35,
      opacity: 1,
      stagger: 0.1
    })
  })
  document.querySelector("#footer-text").addEventListener("mouseleave", function () {
    gsap.to("#footer h1 span", {
      opacity: 1,
      stagger: 0.1,
      delay: 0.35,

    })
    gsap.to("#footer h2 span", {
      opacity: 0,
      stagger: 0.05
    })
  })
}

function handleScreenSize() {
  locomotivescroll();

  loadingAnimation();

  flagAnimation();

  cursorAnimation();

  // photoEffect();

  footerAnimation();
}

handleScreenSize();



