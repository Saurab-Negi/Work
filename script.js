//Preloader JS
$(window).on('load', function() {
    setTimeout(function() {
        $('#pre').addClass('slide-up');
        $('#content').fadeIn();
    }, 5000); // Display preloader for 4 seconds
});

//GSAP Animation
gsap.registerPlugin(ScrollTrigger);

//Preloader Animation
gsap.to(".loading-img1",{
    delay: 1,
    duration: 1,
    display: "none",
})

// Hide the image initially
gsap.set(".loading-img2", { autoAlpha: 0 });

// Animate the image to appear after 2 seconds, move upwards and then downwards
gsap.fromTo(".loading-img2", {
    autoAlpha: 0,
    y: 0
}, {
    display: 'flex',
    autoAlpha: 1,
    y: -50,
    duration: .3,
    delay: 3,
    onComplete: function() {
        gsap.to(".loading-img2", {
            y: 0,
            duration: 1,
        });
    }
});

//Navbar
var menu= document.querySelector(".menu a")
var close= document.querySelector(".nav-left a")


var t0= gsap.timeline()
t0.to(".nav",{
  top: 0,
  duration: 1,
})

t0.pause()

menu.addEventListener("click", function(){
  t0.play()
  
})

close.addEventListener("click", function(){
  t0.reverse()
})
// var menu = document.querySelector(".menu a");
// var close = document.querySelector(".nav-left a");
// var nav = document.querySelector(".nav");

// var t0 = gsap.timeline({ paused: true });

// t0.to(".nav", {
//     top: 0,
//     duration: 1,
//     onStart: function() {
//         nav.style.display = "block"; // Show navbar when animation starts
//     },
//     onReverseComplete: function() {
//         nav.style.display = "none"; // Hide navbar when animation completes
//     }
// });

// menu.addEventListener("click", function() {
//     t0.play();
// });

// close.addEventListener("click", function() {
//     t0.reverse();
// });

//Slick 
$(document).ready(function(){
    $('.carousel-img').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        // autoplaySpeed: 2000,
        infinite: true
    });
});


//Section-1 slider using Slik
$(document).ready(function(){
  $('.s-1-carousel').slick({
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1, // Change to 1 to scroll one slide at a time
    autoplaySpeed: 3000, // Set autoplay speed to 2 seconds
    speed: 1000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
});

//Section-1 animation using AOS
AOS.init({
  offset: 120,
  duration: 1000,
  easing: 'ease',
});


// Section-2 GSAP Animation

gsap.registerPlugin(ScrollTrigger);

//s-2-img-five animation

let time5 = gsap.timeline({
  scrollTrigger: {
    trigger: ".s-2-up",
    scroller: "body",
    // markers: true,
    start: "top 40%",
    end: "35% top",
    scrub: 2,
  }
});

time5
  .to(".s-2-five-1", { y: -900, rotate: -12, duration: 0.1, ease: "power1.inOut" }, 0)
  .to(".s-2-five-2", { y: -1000, rotate: -13, duration: 0.1, ease: "power1.inOut" }, 0)
  .to(".s-2-five-3", { y: -900, rotate: 14, duration: 0.1, ease: "power1.inOut" }, 0)
  .to(".s-2-five-4", { y: -1000, rotate: 15, duration: 0.1, ease: "power1.inOut" }, 0)
  .to(".s-2-five-5", { y: -900, rotate: 18, duration: 0.1, ease: "power1.inOut" }, 0)
  

//s-2-img-1 animation
let tl = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-2-img-1",
      scroller: "body",
      // markers: true,
      start: "top 90%",
      end: "top 20%",
      scrub: 3,
  }
});
tl.to(".s-2-img-1", { x: 10, duration: 3, ease: "power2.inOut" })
.to(".s-2-img-1", { y: -50, duration: 3, ease: "power2.inOut" })
.to(".s-2-img-1", { rotate: 13, duration: 3, ease: "power2.inOut" })
.to(".s-2-img-1", { x: 0, duration: 3, ease: "power2.inOut" });

//s-2-img-2 animation
let t2 = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-2-img-2",
      scroller: "body",
      // markers: true,
      start: "20% 60%",
      end: "60% 20%",
      scrub: 3,
  }
});
t2.to(".s-2-img-2", { y: -50, duration: 2, ease: "power1.inOut" })
.to(".s-2-img-2", { x: -10, duration: 2, ease: "power1.inOut" })
.to(".s-2-img-2", { y: -100, duration: 2, ease: "power1.inOut" })


//Section-4 slider using Slik
$(document).ready(function(){
    $('.s-4-slider').slick({
      arrows: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1, // Change to 1 to scroll one slide at a time
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  });

  //Secton 5
  let t4 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-1",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        pin: true,
    }
  });
  t4
  .to(".bottle-1", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-1", { rotate: -20, duration: 3, ease: "power1.inOut" })
  .to(".bottle-1", { x: -130, duration: 3, ease: "power1.inOut" })
  

  let t5 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-2",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        pin: true,
    }
  });
  t5.to(".bottle-2", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-2", { rotate: 0, duration: 3, ease: "power1.inOut" })
  .to(".bottle-2", { x: 0, duration: 3, ease: "power1.inOut" })


  let t6 = gsap.timeline({
    scrollTrigger: {
        trigger: ".bottle-3",
        scroller: "body",
        // markers: true,
        start: "top 100%",
        end: "top 80%",
        scrub: 3,
        pin: true,
    }
  });
  t6.to(".bottle-3", { y: -500, duration: 3, ease: "power1.inOut" })
  .to(".bottle-3", { rotate: 20, duration: 3, ease: "power1.inOut" })
  .to(".bottle-3", { x: 130, duration: 3, ease: "power1.inOut" })


// GSAP Marquee and Wave Animation

// Break the text into spans for GSAP animation
//var h1Text= document.querySelector("h1").textContent  {Short hand property}

function breakTheText() {
  const h1s = document.querySelectorAll("h1");
  h1s.forEach(h1 => {
      const h1Text = h1.textContent; //It gives the text which is inside the h1
      const splittedText = h1Text.split("");  //Breaks the string into individual chars
      let clutter = "";

      splittedText.forEach(char => {
          clutter += `<span>${char}</span>`;  //chars will be stored in individual spans
      });

      h1.innerHTML = clutter;
  });
}
breakTheText(); // Calling the above function

gsap.fromTo("h1 span", 
{ 
  y: 25,
  duration: 1.5,
  ease: "power1.inOut",
  repeat: -1, 
  yoyo: true, 
  stagger: {
    each: 0.3, 
    repeat: -1
  }
}, 
{ 
  y: -25, 
  duration: 1.5, 
  ease: "power1.inOut", 
  repeat: -1, 
  yoyo: true, 
  stagger: {
    each: 0.3, 
    repeat: -1
  }
}
);

//On scroll animation of text right/left
window.addEventListener("wheel", function(event) {
  if (event.deltaY > 0) {
      gsap.to(".marque", {
          xPercent: -200,
          duration: 10,
          repeat: -1,
          ease: "none",
      });
  } else {
      gsap.to(".marque", {
          xPercent: 0,
          duration: 10,
          repeat: -1,
          ease: "none",
      });
  }
});

//Section-6

//card-1
let t7 = gsap.timeline({
  scrollTrigger: {
      trigger: ".s-6-mid",
      scroller: "body",
      // markers: true,
      start: "top 64%",
      end: "top 29%",
      scrub: 5,
      pin: true,
  }
});
t7.to(".card-1", { x: -10, duration: 0.3, ease: "power1.inOut" })
// .to(".card-1", { rotate: -5, duration: 2, ease: "power1.inOut" })
// .to(".card-1", { y: -2, duration: 1, ease: "power1.inOut" })
// .to(".card-1", { y: -4, duration: 1, ease: "power1.inOut" })
// .to(".card-1", { y: -6, duration: 1, ease: "power1.inOut" })
// .to(".card-1", { zIndex: 0 , duration: 1, ease: "power1.inOut" })
// .to(".card-1", { rotate: 0, duration: 2, ease: "power1.inOut" })
// .to(".card-1", { opacity: 0.9, duration: 1, ease: "power1.inOut" })
// .to(".card-1", { x: 0, duration: 1, ease: "power1.inOut" })
// .to(".card-1", { opacity: 0.7, duration: 1, ease: "power1.inOut" })

// card-2
// let t8 = gsap.timeline({
//   scrollTrigger: {
//       trigger: ".card-2",
//       scroller: "body",
//       // markers: true,
//       start: "top 50%",
//       end: "top 15%",
//       scrub: 5,
//       pin: true,
//   }
// });
// t8.to(".card-2", { x: 10, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { rotate: 5, duration: 2, ease: "power1.inOut" })
// .to(".card-2", { y: 10, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { y: 30, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { y: 50, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { opacity: 0.8, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { zIndex: 100 , duration: 1, ease: "power1.inOut" })
// .to(".card-2", { rotate: 0, duration: 2, ease: "power1.inOut" })
// .to(".card-2", { opacity: 1, duration: 1, ease: "power1.inOut" })
// .to(".card-2", { x: 0, duration: 1, ease: "power1.inOut" })

//card-1
let t9 = gsap.timeline({
  scrollTrigger: {
      trigger: ".card-3",
      scroller: "body",
      // markers: true,
      start: "top 64%",
      end: "top 29%",
      scrub: 5,
      // pin: true,
  }
});
t9.to(".card-3", { x: -10, duration: 1, ease: "power1.inOut" })
.to(".card-3", { rotate: -5, duration: 2, ease: "power1.inOut" })
.to(".card-3", { y: 10, duration: 1, ease: "power1.inOut" })
.to(".card-3", { y: 30, duration: 1, ease: "power1.inOut" })
.to(".card-3", { y: 50, duration: 1, ease: "power1.inOut" })
.to(".card-3", { zIndex: 100 , duration: 1, ease: "power1.inOut" })
.to(".card-3", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-3", { opacity: 1, duration: 1, ease: "power1.inOut" })
.to(".card-3", { x: 5, duration: 1, ease: "power1.inOut" })

// card-2
let t10 = gsap.timeline({
  scrollTrigger: {
      trigger: ".card-4",
      scroller: "body",
      // markers: true,
      start: "top 71%",
      end: "top 50%",
      scrub: 5,
      // pin: true,
  }
});
t10.to(".card-4", { x: 10, duration: 1, ease: "power1.inOut" })
.to(".card-4", { rotate: 5, duration: 2, ease: "power1.inOut" })
.to(".card-4", { y: -10, duration: 1, ease: "power1.inOut" })
.to(".card-4", { y: -30, duration: 1, ease: "power1.inOut" })
.to(".card-4", { y: -50, duration: 1, ease: "power1.inOut" })
.to(".card-4", { zIndex: 0 , duration: 1, ease: "power1.inOut" })
.to(".card-4", { opacity: 0.7, duration: 1, ease: "power1.inOut" })
.to(".card-4", { rotate: 0, duration: 2, ease: "power1.inOut" })
.to(".card-4", { x: -5, duration: 1, ease: "power1.inOut" })



//Section-7
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

let timeline = gsap.timeline({
  scrollTrigger: {
    trigger: ".section-7",
    pin: true,
    pinSpacing: true,
    start: "center center",
    end: "+=4000",
    // markers: true,
    scrub: 1,
  }
});

timeline.addLabel('card1')
  .fromTo('.s-7-card-1', {yPercent: 100}, {yPercent: 0, opacity: 1})
  .fromTo('.s-7-card-2', {zIndex: 1, yPercent: 100}, {yPercent: -5, opacity: 1, xPercent: 2}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 5, yPercent: -4, opacity: 0.9, zIndex: -1}, "-=0.3")

  .addLabel('card2')
  .fromTo('.s-7-card-3', {zIndex: 1, yPercent: 100}, {yPercent: -5, opacity: 1, xPercent: 4}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 10, yPercent: -15}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 7, yPercent: -13, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card3')
  .fromTo('.s-7-card-4', {zIndex: 1, yPercent: 100}, {yPercent: -8, opacity: 1, xPercent: 6}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 13, yPercent: -28}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 10, yPercent: -22}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 7, yPercent: -14, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card4')
  .fromTo('.s-7-card-5', {zIndex: 1, yPercent: 100}, {yPercent: -11, opacity: 1, xPercent: 8}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 22, yPercent: -26}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 18, yPercent: -23}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 14, yPercent: -20}, "-=0.5")
  .to('.s-7-card-4', {xPercent: 10, yPercent: -17, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card5')
  .fromTo('.s-7-card-6', {zIndex: 1, yPercent: 100}, {yPercent: -13, opacity: 1, xPercent: 10}, "+=0.5")
  .to('.s-7-card-1', {xPercent: 29, yPercent: -40}, "-=0.3")
  .to('.s-7-card-2', {xPercent: 25, yPercent: -35}, "-=0.5")
  .to('.s-7-card-3', {xPercent: 21, yPercent: -30}, "-=0.5")
  .to('.s-7-card-4', {xPercent: 17, yPercent: -25}, "-=0.5")
  .to('.s-7-card-5', {xPercent: 13, yPercent: -21, opacity: 0.9, zIndex: -1}, "-=0.5")

  .addLabel('card6');


  //Section-8
  gsap.registerPlugin(ScrollTrigger, ModifiersPlugin);

  gsap.to(".s-8-card-up", {
    xPercent: 620,
    duration: 25,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(620, 0) // xPercent modifier with gsap.utils.wrap creates the effect of an infinite loop by wrapping the xPercent value.
    }
  });

  gsap.to(".s-8-card-down", {
    xPercent: -620,
    duration: 25,
    ease: "none",
    repeat: -1,
    modifiers: {
      xPercent: gsap.utils.wrap(-620, 0)
    }
  });