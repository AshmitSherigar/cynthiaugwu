import { gsap } from "gsap";

const scroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
});

function circleFollowerWithSkew() {
    const circle = document.querySelector(".mini-circle");
    let xscale = 1;
    let yscale = 1;
    let xprev = 0;
    let yprev = 0;

    window.addEventListener("mousemove", function (e) {
        const xdiff = e.clientX - xprev;
        const ydiff = e.clientY - yprev;

        xscale = gsap.utils.clamp(0.9, 1.1, xdiff);
        yscale = gsap.utils.clamp(0.9, 1.1, ydiff);

        xprev = e.clientX;
        yprev = e.clientY;

        gsap.to(circle, {
            x: e.clientX,
            y: e.clientY,
            scaleX: xscale,
            scaleY: yscale,
            duration: 1,
            ease: "power3.out"
        });

    });
}

function pageOne() {
    const tl = gsap.timeline();

    tl.from(".nav", {
        y: 15,
        opacity: 0,
        ease: "expo.out",
        duration: 1.5,
    }, "anim");

    tl.to(".boundingelem", {
        y: 0,
        opacity: 1,
        ease: "expo.easeInOut",
        duration: 0.5,
        stagger: 0.1,
    }, "anim");

    tl.from(".hero-footer", {
        y: 25,
        opacity: 0,
        ease: "expo.easeInOut",
        duration: 0.5,
    }, "anim");
}


document.querySelectorAll(".elem").forEach(function (elem) {
    console.log(elem);
    
    elem.addEventListener("mousemove", function (dets) {
        // console.log(dets);
        gsap.to(elem.querySelector("img"),{
            x:dets.clientX,  
            y:dets.clientY,
            opacity:1
        })



    })

})
circleFollowerWithSkew();
pageOne();
