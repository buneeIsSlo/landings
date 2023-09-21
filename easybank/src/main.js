import "./scss/main.scss";
import Lenis from "@studio-freight/lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const navToggle = document.querySelector(".nav-toggle");
const hamburgerIcon = document.querySelector(".hamburger");
const closeIcon = document.querySelector(".close");
const navMenu = document.querySelector(".nav-list");
const backgroundOverlay = document.querySelector(".bg-overlay");
const headings = Array.from(document.querySelectorAll(".heading"));
const statCards = Array.from(document.querySelectorAll(".stats-item"));

navToggle.addEventListener("click", (e) => {
    hamburgerIcon.classList.toggle("hidden");
    closeIcon.classList.toggle("hidden");
    navMenu.classList.toggle("show-nav");
    backgroundOverlay.classList.toggle("hidden");
    navToggle.setAttribute("aria-expanded", !backgroundOverlay.classList.contains("hidden"));
});

const lenis = new Lenis({
    duration: 0.9
})

// lenis.on('scroll', (e) => {
//     console.log(e)
// })

function raf(time) {
    lenis.raf(time)
    requestAnimationFrame(raf)
}

requestAnimationFrame(raf);

headings.forEach((heading) => {
    gsap.fromTo(
        heading,
        {
            opacity: 0,
            y: 5
        },
        {
            opacity: 1,
            y: 0,
            duration: 1.4,
            scrollTrigger: {
                trigger: heading,
                markers: true,
                start: "center bottom",
            },
            ease: "power2"
        }
    )
});

statCards.forEach((card, i) => {
    gsap.fromTo(
        card,
        {
            opacity: 0,
            x: -20,
        },
        {
            delay: 0.1 * i,
            opacity: 1,
            x: 0,
            duration: 1.4,
            scrollTrigger: {
                trigger: card,
                markers: true,
                start: "center bottom",
            },
            ease: "power3.inOut"
        }
    )
})

console.log("bunee!");