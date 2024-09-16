var crsr = document.querySelector("#cursor");
var blurr = document.querySelector("#cursor-blur");

var h4all = document.querySelectorAll("#nav h4");

document.addEventListener("mousemove", function(dets) {
  crsr.style.left = dets.x + "px";
  crsr.style.top = dets.y + "px";
  blurr.style.left = dets.x - 150 + "px";
  blurr.style.top = dets.y - 150 + "px";
});

h4all.forEach(function(elem) {
  elem.addEventListener("mouseover", function() {
    crsr.style.backgroundColor = "transparent";
    crsr.style.border = "0.5px solid #fff";
    crsr.style.scale = 3;
  });

  elem.addEventListener("mouseleave", function() {
    crsr.style.backgroundColor = "#95c11e";  
    crsr.style.border = "none";              
    crsr.style.scale = 1;                    
  });
});

gsap.to("#nav", {
  backgroundColor: "black",
  height: "75px",
  duration: 0.5,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -10%",
    end: "top -11%",
    scrub: 1
  }
});

gsap.to("#main", {
  backgroundColor: "black",
  scrollTrigger: {
    trigger: "#main",
    scroller: "body",
    start: "top -30%",
    end: "top -80%",
    scrub: 1
  }
});

gsap.from("#about-us img ,#about-us #about-us-in", {
  y:90,
  duration : 1,
  opacity : 0,
  scrollTrigger :{
  trigger: "#about-us",
  scroller : 'body',
  start : "top 70%",
  end : "top 65%",
  scrub : 1
  }
})

gsap.from(".card", {
  scale: 0.8,
  duration : 0.5,
  opacity : 0,
  scrollTrigger :{
  trigger: ".card",
  scroller : 'body',
  start : "top 70%",
  end : "top 65%",
  scrub : 1
  }
})

gsap.from("#colon1",{
  y: -70,
  x : -70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub : 4
  }
})

gsap.from("#colon2",{
  y: 70,
  x : 70,
  scrollTrigger:{
    trigger:"#colon1",
    scroller: "body",
    start: "top 60%",
    end: "top 50%",
    scrub : 4
  }
})

gsap.from("#page4 h1",{
  y: 50,
  scrollTrigger:{
    trigger:"#page4 h1",
    scroller: "body",
    start: "top 70%",
    end: "top 65%",
    scrub : 3
  }
})