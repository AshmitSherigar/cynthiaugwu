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
    let rotate = 0;
    let diffRot = 0;

    elem.addEventListener("mousemove", function (dets) {
        // Get position relative to the element
        const rect = elem.getBoundingClientRect();
        
        const relY = dets.clientY - rect.top - 150;

        diffRot = dets.clientX - rotate;
        rotate = dets.clientX;

        let finalRot = gsap.utils.clamp(-30, 30, diffRot * 1.1);

        gsap.to(elem.querySelector("img"), {
            rotate: finalRot,
            opacity: 1,
            top: relY,
            left: dets.clientX - 150, // assuming image width ~300px
            ease: "power3.out"
        });
    });

    elem.addEventListener("mouseleave", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: "power3.out"
        });
    });
});

circleFollowerWithSkew();
pageOne();
